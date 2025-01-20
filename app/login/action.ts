"use server";

import db from "@/lib/db";
import { default as getSession } from "@/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const checkEmailExists = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
        },
    });
    return Boolean(user);
};

const formSchema = z.object({
    email: z
        .string()
        .email("이메일 형식이 올바르지 않습니다.")
        .toLowerCase()
        .refine(
            checkEmailExists,
            "이 이메일을 사용하는 계정이 존재하지 않습니다."
        ),
    password: z.string({ required_error: "비밀번호는 필수입니다." }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleLogin(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };
    const result = await formSchema.spa(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        const user = await db.user.findUnique({
            where: {
                email: result.data.email,
            },
            select: {
                id: true,
                password: true,
            },
        });
        const ok = await bcrypt.compare(
            result.data.password,
            user!.password ?? "xxxx"
        );
        if (ok) {
            const session = await getSession();
            session.id = user!.id;
            await session.save();
            redirect("/");
        } else {
            return {
                fieldErrors: {
                    password: ["비밀번호가 일치하지 않습니다."],
                    email: [],
                },
            };
        }
    }
}
