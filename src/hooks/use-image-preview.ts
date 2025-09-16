// hooks/useImagePreview.ts
import { useState } from "react";

export const useImagePreview = (defaultPreview: string = "") => {
    const [imagePreview, setImagePreview] = useState<string>(defaultPreview);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        callback: (file: File | undefined) => void
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    setImagePreview(reader.result);
                }
            };

            reader.readAsDataURL(file);
        }

        callback(file);
    };

    return { imagePreview, handleFileChange, setImagePreview };
};
