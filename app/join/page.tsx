"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { handleCreateAccount } from "./action";

export default function Join() {
    const [state, dispatch] = useFormState(handleCreateAccount, null);

    return (
        <section className="pt-24 h-screen flex flex-col items-center justify-center gap">
            <Link href="/">
                <h1>HAMSTORY</h1>
            </Link>
            <article className="flex w-full">
                <Link
                    href="/login"
                    className="bg-neutral-100 w-1/2 py-2 text-center "
                >
                    로그인
                </Link>
                <Link
                    href="/join"
                    className="bg-neutral-200 w-1/2 py-2 text-center"
                >
                    회원가입
                </Link>
            </article>
            <form action={dispatch} className="flex flex-col w-full">
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    errors={state?.fieldErrors.username}
                />
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
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    errors={state?.fieldErrors.confirmPassword}
                />
                <Button text="회원가입" />
            </form>
        </section>
    );
}
