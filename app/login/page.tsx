"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { handleLogin } from "./action";

export default function Login() {
    const [state, dispatch] = useFormState(handleLogin, null);

    return (
        <div className="w-1/4 my-auto flex flex-col items-center justify-center gap-10">
            <Link href="/">
                <h1 className="text-3xl font-bold">HAMSTORY</h1>
            </Link>
            <form action={dispatch} className="flex flex-col w-full gap-3">
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
                <article className="flex gap-2 text-neutral-400">
                    <input id="maintainLogin" type="checkbox" />
                    <label htmlFor="maintainLogin">로그인 상태 유지</label>
                </article>
                <Button text="로그인" />
            </form>
            <article className="flex gap-3 text-sm">
                <span className="text-neutral-400">
                    아직 계정이 없으신가요?
                </span>
                <Link href="/join">회원가입</Link>
            </article>
        </div>
    );
}
