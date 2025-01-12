"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
    text: string;
}

export default function Button({ text }: ButtonProps) {
    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            className="w-full h-14 rounded-sm bg-neutral-500 disabled:bg-neutral-700 disabled:text-neutral-500 disabled:cursor-not-allowed"
        >
            {pending ? "로딩 중" : text}
        </button>
    );
}
