"use client";

import { FileUp, Eye, Trash2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useEffect, useState } from "react";

interface EditorActionsProps {
    status: string;
    onStatusChange: (key:string, value: string) => void;
    onSave?: ((e: React.MouseEvent<HTMLButtonElement>) => void);
    onPreview?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | null;
    onDelete?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | null,
}

export function FloatEditorActions({
    status,
    onStatusChange,
    onSave,
    onPreview,
    onDelete,
}: EditorActionsProps) {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    return (
        <div className={`w-full flex justify-center items-center fixed z-20 left-0 bottom-0 transition-transform ${hidden ? "translate-y-full" : "-translate-y-4"}`}>
            <ScrollArea className="w-72 sm:w-max whitespace-nowrap">
                <div className="w-max m-1 flex flex-row items-center gap-2 p-2 bg-background shadow-sm rounded-md">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1 text-sm capitalize cursor-pointer"
                            >
                                {status}
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-28">
                            <DropdownMenuItem
                                onClick={() => onStatusChange("status", "draft")}
                                className={status === "draft" ? "font-semibold" : ""}
                            >
                                Draft
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => onStatusChange("status", "publish")}
                                className={status === "publish" ? "font-semibold" : ""}
                            >
                                Publish
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="h-8 px-3 text-sm cursor-pointer"
                        onClick={onSave}
                    >
                        <FileUp className="h-4 w-4 mr-2" />
                        Save
                    </Button>

                    {onPreview &&
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-3 text-sm cursor-pointer"
                            onClick={onPreview}
                        >
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                        </Button>
                    }

                    {onDelete &&
                        <Button
                            variant="destructive"
                            size="sm"
                            className="h-8 px-3 text-sm cursor-pointer"
                            onClick={onDelete}
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>
                    }
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}
