import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_SIGNUP } from "../config.ts";
import axios from "axios";

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

    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const [error, setError] = useState("");

    const onSubmit = async(data : any) => {
        setError("");
        if(isSubmitting || data.name === "" || data.email === "" || data.password === ""){
            return;
        }
        else{
            try{
                const [name, email, password] = [data.name, data.email, data.password];
                const res = await axios.post(URL_SIGNUP, {
                    name,
                    email,
                    password,
                })
                navigate("/");
            }
            catch(err){
                setError("error");
            }
        }
    };

    return(
        <Body>
            <h1>HAMSTORY</h1>
            <Button>로그인 화원가입</Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">닉네임</label>
                <Input id="name" type="text" placeholder="hamstory" {...register("name")}/>
                <label htmlFor="email">이메일</label>
                <Input id="email" type="email" placeholder="hamstory@email.com" {...register("email")}/>
                <label htmlFor="password">비밀번호</label>
                <Input id="password" type="password" placeholder="************" {...register("password")}/>
                {error !== "" ? <Error>{error}</Error> : null}
                <button type="submit" disabled={isSubmitting}>회원가입</button>
            </Form>
        </Body>
    );
}