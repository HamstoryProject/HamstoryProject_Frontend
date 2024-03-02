import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_SIGNUP } from "../config.ts";
import axios from "axios";
import { Link } from "react-router-dom";

interface FormValue {
    nickName: string;
    email: string;
    password: string;
};

export default function CreateAccount(){
    const Body = styled.div`
        width: 100%;
        height: 100%;
        display: grid;
    `;

    const Button = styled.button``;

    const Form = styled.form``;

    const Input = styled.input``;

    const Error = styled.div``;

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormValue>();
    const [resError, setResError] = useState("");

    const onSubmit = async(data : FormValue) => {
        setResError("");
        if(isSubmitting || data.nickName === "" || data.email === "" || data.password === ""){
            return;
        }
        else{
            try{
                const formData = new FormData();
                formData.append('data', new Blob([JSON.stringify({
                    nickName: data.nickName,
                    email: data.email,
                    pw: data.password,
                })], {
                    type: "application/json"
                }));
                await axios.post(URL_SIGNUP, formData);
                navigate("/");
            }
            catch(err){
                setResError("회원가입 통신중 에러가 발생하였습니다. 잠시후 다시 시도해보시길 바랍니다.");
            }
        }
    };

    return(
        <Body>
            <Link to={"/"}><h1>HAMSTORY</h1></Link>
            <Link to={"/login"}><Button>로그인</Button></Link><Link to={"/create_account"}><Button>회원가입</Button></Link>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nickName">닉네임</label>
                <Input id="nickName" type="text" placeholder="hamstory" {...register("nickName", {
                    required: "이름은 필수 입력입니다.",
                })}
                aria-invalid={isSubmitting ? (errors.nickName ? "true" : "false") : undefined}/>
                {errors.nickName && <Error>{errors.nickName.message?.toString()}</Error>}
                <label htmlFor="email">이메일</label>
                <Input id="email" type="email" placeholder="hamstory@email.com" {...register("email", { 
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                        value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                        message: "이메일 형식에 맞지 않습니다."
                    },
                })}
                aria-invalid={isSubmitting ? (errors.email ? "true" : "false") : undefined}/>
                {errors.email && <Error>{errors.email.message?.toString()}</Error>}
                <label htmlFor="password">비밀번호</label>
                <Input id="password" type="password" placeholder="************" {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                        value: 8,
                        message: "8자리 이상 비밀번호를 사용하세요."
                    },
                })}
                aria-invalid={isSubmitting ? (errors.password ? "true" : "false") : undefined}/>
                {errors.password && <Error>{errors.password.message?.toString()}</Error>}
                {resError !== "" ? <Error>{resError}</Error> : null}
                <button type="submit" disabled={isSubmitting}>회원가입</button>
            </Form>
        </Body>
    );
}