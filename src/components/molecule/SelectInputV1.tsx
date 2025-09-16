import * as React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Category } from "@/typedata/blog/category"

interface SelectInputProps {
    value: string
    onChange: (key: string, value: string) => void
    options: Category[] | undefined
    placeholder?: string
    className?: string
}

export const SelectInput: React.FC<SelectInputProps> = ({
    value,
    onChange,
    options,
    placeholder = "Select an option...",
    className,
}) => {
    console.log(value);
    return (
        <div className={className}>
            <Select value={value} onValueChange={(value) => {
                onChange("categoryId", value);
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options?.map((option, index) => (
                        <SelectItem key={index} value={option.id}>
                            {option.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
