"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { handleLogin } from "./action";

export default function Login() {
    const [state, dispatch] = useFormState(handleLogin, null);

    return (
        <section className="pt-24 h-screen flex flex-col items-center justify-center gap">
            <Link href="/">
                <h1>HAMSTORY</h1>
            </Link>
            <article className="flex w-full">
                <Link
                    href="/login"
                    className="bg-neutral-200 w-1/2 py-2 text-center "
                >
                    로그인
                </Link>
                <Link
                    href="/join"
                    className="bg-neutral-100 w-1/2 py-2 text-center"
                >
                    회원가입
                </Link>
            </article>
            <form action={dispatch} className="flex flex-col w-full">
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    errors={state?.fieldErrors.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    errors={state?.fieldErrors.password}
                />
                <Button text="로그인" />
            </form>
        </section>
    );
}
