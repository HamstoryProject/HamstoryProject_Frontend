"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
    text: string;
    containerStyles?: string;
    textStyles?: string;
}

export default function Button({
    text,
    containerStyles,
    textStyles,
}: ButtonProps) {
    const { pending } = useFormStatus();
    return (
        <button className={containerStyles} disabled={pending}>
            <span className={textStyles}>{pending ? "로딩 중" : text}</span>
        </button>
    );
}
