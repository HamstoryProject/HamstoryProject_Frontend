import { InputHTMLAttributes } from "react";

interface InputProps {
    errors?: string[];
    name: string;
}

export default function Input({
    errors = [],
    name,
    ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-3">
            <input
                name={name}
                className="px-4 bg-transparent w-full h-14 focus:outline-none focus:ring-inset focus:ring-1 transition focus:ring-neutral-500 border-none placeholder:text-neutral-400 bg-neutral-700 rounded-sm"
                {...rest}
            />
            {errors.map((error, index) => (
                <span key={index} className="text-red-500 font-medium">
                    {error}
                </span>
            ))}
        </div>
    );
}
