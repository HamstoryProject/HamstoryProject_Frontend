import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_LOGIN } from "../config.ts";
import axios from "axios";
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

    const onSubmit : SubmitHandler<FormValue> = async(data) => {
        setError("");
        if(isSubmitting || data.email === "" || data.password === ""){
            return;
        }
        else{
            try{
                const res = await axios.post(URL_LOGIN, {
                    email : data.email,
                    pw : data.password,
                }, 
                {
                    withCredentials: true
                });

                if(res.data === ''){
                    setError("아이디 또는 비밀번호가 일치하지 않습니다.")
                    return;
                }
                navigate("/");
            }
            catch(err){
                setError("로그인 통신중 에러가 발생하였습니다. 잠시후 다시 시도해보시길 바랍니다.");
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