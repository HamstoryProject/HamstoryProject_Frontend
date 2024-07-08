import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_LOGIN } from "../config.ts";
import axios from "axios";

interface FormValue{
  	email: string
  	password: string
};

interface Props{
    gridArea: string;
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// lg: logo
// lb: login button, rb : register button
// ie: input email, ip: input password
// er: error message
// fb: form button
const Form = styled.form`
    display: grid;
    width: 24%;
    height: 36%;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
        "lg lg"
        "lb rb"
        "ie ie"
        "ip ip"
        "er er"
        "fb fb"
    ;
`;

const Logo = styled.h1`
    grid-area: lg;
`;

const Input = styled.input<Props>`
    width: 100%;
    height: 42px;
    grid-area: ${props => props.gridArea};
`;

const Button = styled.button<Props>`
    width: 100%;
    height: 42px;
    grid-area: ${props => props.gridArea};
`;

const Error = styled.div`
    grid-area: er;
`;

export default function Login(){
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValue>();
    const [error, setError] = useState("");

    const navigateTologin = () => {
        navigate("/login");
    };

    const navigateToCreateAccount = () => {
        navigate("/create_account");
    };

    const navigateToHome = () => {
        navigate("/");
    }

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
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Logo onClick={navigateToHome}>HAMSTORY</Logo>
                <Button gridArea={"lb"} onClick={navigateTologin}>로그인</Button>
                <Button gridArea={"rb"} onClick={navigateToCreateAccount}>회원가입</Button>
                <Input gridArea={"ie"} id="dlapd" type="email" placeholder="이메일" {...register("email")}/>
                <Input gridArea={"ip"} id="password" type="password" placeholder="비밀번호" {...register("password")}/>
                {error !== "" ? <Error>{error}</Error> : null}
                <Button gridArea={"fb"} type="submit" disabled={isSubmitting}>로그인</Button>
            </Form>
        </Body>
    );
}