import { useState } from "react";

export const useChat = () => {
    const [streamMessage, setStreamMessage] = useState<string>("");
    const [messages, setMessages] = useState<Chat[]>([]);
    const [streamDone, setStreamDone] = useState<boolean>(true);

    const handleChat = async (e: React.FormEvent<HTMLFormElement>, question: string, onFinish:() => void) => {
        e.preventDefault();

        setStreamDone(false); // <-- tandai mulai streaming

        const res = await fetch('/api/chat', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question })
        })
        const reader = res.body?.getReader();
        const decoder = new TextDecoder();

        let answer = "";

        while (true) {
            const { done, value } = reader ? await reader?.read() : {};
            if (done) break;
            answer += decoder.decode(value);

            setStreamMessage(answer); // update UI secara real-time
        }

        setMessages([...messages, { question: question, message: answer }]);
        setStreamMessage("");
        setStreamDone(true);

        onFinish();
    }

    const clearChat = () => {
        setMessages([]);
    }
    return { handleChat, clearChat, streamMessage, messages, streamDone };
}