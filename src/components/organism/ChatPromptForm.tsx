import { ArrowUp, Check, Copy, Maximize, Maximize2, Minimize2, Sparkles, Trash2, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { StaggerText } from "../motion/StaggerText";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const ChatPromptForm = (
    {
        streamMessage,
        messages,
        streamDone,
        clearChat,
        onChat
    }: {
        streamMessage: string,
        messages: Chat[],
        streamDone: boolean,
        clearChat: () => void,
        onChat: (e: React.FormEvent<HTMLFormElement>, question: string, onFinish: () => void) => void
    }) => {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [question, setQuestion] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [maximize, setMaximize] = useState<boolean>(false);
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // scroll ke bawah → sembunyikan
                setHidden(true);
            } else {
                // scroll ke atas → tampilkan
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleCopy = async (message: string) => {
        try {
            await navigator.clipboard.writeText(message);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to Copy: ", err);
        }
    }
    const handleOpen = () => {
        setOpen(!open);

        if (!open) {
            document.body.style.overflow = "hidden"; // ❌ Nonaktifkan scroll di body
        } else {
            document.body.style.overflow = "auto";   // ✅ Aktifkan lagi
        }
    }
    const handleChat = (e: React.FormEvent<HTMLFormElement>, question: string) => {
        e.preventDefault();


        if (!open) {
            handleOpen();
        }
        onChat(e, question, () => {
            setQuestion("");
        });
    }

    return <>
        <form onClick={() => {
            if (messages.length) {
                handleOpen();
            }
        }} className={`${open ? "opacity-0 pointer-events-none" : "opacity-100"}`} onSubmit={(e) => handleChat(e, question)}>
            <div className={`fixed max-w-72 w-full bottom-0 left-1/2 animate-fade-in -translate-x-1/2 transition-all duration-500  hover:scale-105 focus-within:-translate-y-4 sm:focus-within:max-w-96 sm:focus-within:scale-105 ${hidden ? "translate-y-full" : "-translate-y-4"}`}>
                <div className='bg-background dark:bg-background'>
                    <Input value={question} onChange={(e) => setQuestion(e.target.value)} className="py-5 pl-4 pr-12" type="text" placeholder="Ask a question..." />
                </div>

                <div className={`absolute top-1/2 p-1 -translate-y-1/2 right-2 `}>
                    <Button disabled={!question.trim()} className={`w-7 h-7 cursor-pointer flex bg-foreground text-background rounded-full`}>
                        <ArrowUp />
                    </Button>
                </div>
            </div>
        </form>

        <div className={`fixed w-full max-w-full sm:max-w-96 h-full right-0 top-0 z-50 shadow-sm bg-background transition-all  ${!open ? "hidden" : ""} ${maximize ? "sm:max-w-[500px]" : ""}`}>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <Sparkles />
                    <p className="font-semibold">Assistant</p>
                </div>

                <div className="flex items-center gap-2">
                    <div onClick={() => setMaximize(!maximize)} className={`p-1 cursor-pointer rounded-md hover:bg-muted ${maximize ? "hidden" : ""}`}>
                        <Maximize2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div onClick={() => setMaximize(!maximize)} className={`p-1 cursor-pointer rounded-md hover:bg-muted ${maximize ? "" : "hidden"}`}>
                        <Minimize2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div onClick={clearChat} className="p-1 cursor-pointer rounded-md hover:bg-muted">
                        <Trash2 className="w-4 h-4 text-muted-foreground" />
                    </div>

                    <div onClick={handleOpen} className="p-1 cursor-pointer rounded-md hover:bg-muted">
                        <X className="w-4 h-4 text-muted-foreground" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full">
                <div className="flex flex-col p-4 h-full overflow-auto mb-28">
                    {messages.map(({ message, question }, i) => {
                        return <div className="flex flex-col gap-4" key={i} >
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-end prose prose-sm dark:prose-invert max-w-none">
                                    <p className="flex items-end justify-end bg-muted p-2 rounded-md w-max ">
                                        <span>{question}</span>
                                    </p>
                                </div>

                                <div className="prose prose-sm dark:prose-invert max-w-none">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}

                                    >
                                        {message}
                                    </ReactMarkdown>

                                </div>

                            </div>
                            <div onClick={() => handleCopy(message)} className="p-1 cursor-pointer rounded-md w-max hover:bg-muted">
                                {copied ? <Check className="w-4 h-4 text-muted-foreground" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                            </div>
                        </div>
                    })}

                    <div className="flex flex-col space-y-4">

                        {!streamDone &&
                            <>
                                <div className="prose prose-sm dark:prose-invert max-w-none">
                                    <div className="flex items-center justify-end prose prose-sm dark:prose-invert max-w-none">
                                        <p className="flex items-end justify-end bg-muted p-2 rounded-md w-max ">
                                            <span>{question}</span>
                                        </p>
                                    </div>
                                    <div className="flex">Generating<StaggerText repeat={true} text="..." /></div>
                                </div>
                            </>
                        }


                        {streamMessage &&
                            <div className="prose prose-sm dark:prose-invert max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}

                                >
                                    {streamMessage}
                                </ReactMarkdown>
                            </div>
                        }
                    </div>
                </div>

                <form onSubmit={(e) => handleChat(e, question)}>
                    <div className={`absolute px-4 bottom-4 left-1/2 -translate-x-1/2 w-full transition-all duration-500 `}>
                        <div className='bg-background dark:bg-background'>
                            <Input disabled={!streamDone} value={question} onChange={(e) => setQuestion(e.target.value)} className="py-5 pl-4 pr-12" type="text" placeholder="Ask a question..." />
                        </div>

                        <div className={`absolute top-1/2 p-1 -translate-y-1/2 right-6 `}>
                            <Button disabled={!question.trim() || !streamDone} className={`w-7 h-7 cursor-pointer flex bg-foreground text-background rounded-full`}>
                                <ArrowUp />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>

}