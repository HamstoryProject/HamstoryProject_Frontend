"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { handleCreateAccount } from "./action";

export default function Join() {
    const [state, dispatch] = useFormState(handleCreateAccount, null);

    return (
        <main className="pt-20 w-screen h-screen max-w-md mx-auto flex flex-col items-center justify-center gap-10">
            <Link href="/">
                <h1 className="text-3xl font-bold">HAMSTORY</h1>
            </Link>
            <form action={dispatch} className="flex flex-col w-full gap-3">
                <Input
                    name="username"
                    type="text"
                    placeholder="닉네임"
                    required
                    errors={state?.fieldErrors.username}
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="이메일"
                    required
                    errors={state?.fieldErrors.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                    errors={state?.fieldErrors.password}
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="비밀번호 재입력"
                    required
                    errors={state?.fieldErrors.confirmPassword}
                />
                <Button text="회원가입" />
            </form>
            <article className="flex gap-3 text-sm">
                <span className="text-neutral-400">
                    계정이 이미 있으신가요?
                </span>
                <Link href="/login">로그인</Link>
            </article>
        </main>
    );
}
