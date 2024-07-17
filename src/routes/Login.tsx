import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_LOGIN } from "../config.ts";
import axios from "axios";
import { LoginFormValue, StyledGridAreaProps, StyledIsLoginErrorProps } from "../interfaces.ts";
import { useCookies } from 'react-cookie';

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
const Form = styled.form<StyledIsLoginErrorProps>`
    display: grid;
    width: 500px;
    row-gap: 10px;
    padding: 50px;
    font-size: 14px;
    color: red;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
        "lg lg"
        "lb rb"
        "ie ie"
        "ip ip"
        ${props => props.isError ? '"er er"' : null}
        "fb fb"
    ;
`;

const Logo = styled.h1`
    grid-area: lg;
    text-align: center;
    padding-bottom: 20px;
`;

const Input = styled.input<StyledGridAreaProps>`
    width: 100%;
    height: 42px;
    grid-area: ${props => props.gridarea};
`;

const Button = styled.button<StyledGridAreaProps>`
    width: 100%;
    height: 42px;
    border: none;
    grid-area: ${props => props.gridarea};
    background-color: #3182f6;
    color: white;
    font-weight: 900;
`;

const Error = styled.div`
    grid-area: er;

`;

export default function Login(){
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginFormValue>();
    const [cookies, setCookie] = useCookies(['id']);
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

    const onSubmit : SubmitHandler<LoginFormValue> = async(data) => {
        setError("");
        if(isSubmitting || data.email === "" || data.password === ""){
            return;
        }
        else{
            try{
                const res = await axios.post(URL_LOGIN, {
                    email : data.email,
                    pw : data.password,
                })
                .then((res) => {
                    if(res.data == ""){
                        setError("아이디 또는 비밀번호가 일치하지 않습니다.");
                        return;
                    }
                    else{
                        setCookie('id', res.data);
                        navigate("/");
                    }
                })
            }
            catch(err){
                setError("로그인 통신중 에러가 발생하였습니다. 잠시후 다시 시도해보시길 바랍니다.");
            }
        }
    };

    return(
        <Body>
            <Form isError = {error != ""} onSubmit={handleSubmit(onSubmit)}>
                <Logo onClick={navigateToHome}>HAMSTORY</Logo>
                <Button gridarea={"lb"} onClick={navigateTologin}>로그인</Button>
                <Button gridarea={"rb"} onClick={navigateToCreateAccount}>회원가입</Button>
                <Input gridarea={"ie"} id="dlapd" type="email" placeholder="이메일" {...register("email")}/>
                <Input gridarea={"ip"} id="password" type="password" placeholder="비밀번호" {...register("password")}/>
                {error !== "" ? <Error>{error}</Error> : null}
                <Button gridarea={"fb"} type="submit" disabled={isSubmitting}>로그인</Button>
            </Form>
            <p>아이디 찾기 | 비밀번호 찾기</p>
        </Body>
    );
}