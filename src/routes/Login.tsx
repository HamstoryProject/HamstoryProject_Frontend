import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_LOGIN } from "../config.ts";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

interface FormValue {
  	email: string
  	password: string
};

export default function Login(){
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

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValue>();
    const [error, setError] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies(["loggedIn"]);

    const TIME = 3600;

    const onSubmit : SubmitHandler<FormValue> = async(data) => {
        setError("");
        if(isSubmitting || data.email === "" || data.password === ""){
            return;
        }
        else{
            try{
                const [email, password] = [data.email, data.password]
                const res = await axios.post(URL_LOGIN, {
                    email,
                    password,
                })
                const expiration = new Date(Date.now() + TIME * 1000);
                setCookie("loggedIn", res.data, { path: "/", expires: expiration });
                navigate("/");
            }
            catch(err){
                setError("로그인 중 에러가 발생하였습니다.");
            }
        }
    };

    return(
        <Body>
            <Link to={"/"}><h1>HAMSTORY</h1></Link>
            <Link to={"/login"}><Button>로그인</Button></Link><Link to={"/create_account"}><Button>회원가입</Button></Link>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">이메일</label>
                <Input id="email" type="email" placeholder="hamstory@email.com" {...register("email")}/>
                <label htmlFor="password">비밀번호</label>
                <Input id="password" type="password" placeholder="************" {...register("password")}/>
                {error !== "" ? <Error>{error}</Error> : null}
                <button type="submit" disabled={isSubmitting}>로그인</button>
            </Form>
        </Body>
    );
}