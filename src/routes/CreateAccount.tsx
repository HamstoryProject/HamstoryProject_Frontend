import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_SIGNUP } from "../config.ts";
import axios from "axios";

interface FormValue {
    nickName: string;
    email: string;
    password: string;
};

interface Props{
    gridarea: string;
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`
    grid-area: lg;
`;

const Button = styled.button<Props>`
    width: 100%;
    height: 42px;
    grid-area: ${props => props.gridarea};
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
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas:
        "lg lg"
        "lb rb"
        "in in"
        "ie ie"
        "ip ip"
        "er er"
        "fb fb"
    ;
`;

const Input = styled.input<Props>`
    width: 100%;
    height: 42px;
    grid-area: ${props => props.gridarea};
`;

const Error = styled.div`
    grid-area: er;
`;

export default function CreateAccount(){
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormValue>();
    const [resError, setResError] = useState("");

    const navigateTologin = () => {
        navigate("/login");
    };

    const navigateToCreateAccount = () => {
        navigate("/create_account");
    };

    const navigateToHome = () => {
        navigate("/");
    }

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
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Logo onClick={navigateToHome}>HAMSTORY</Logo>
                <Button gridarea={"lb"} onClick={navigateTologin}>로그인</Button>
                <Button gridarea={"rb"} onClick={navigateToCreateAccount}>회원가입</Button>
                <Input gridarea={"in"} id="nickName" type="text" placeholder="닉네임" {...register("nickName", {
                    required: "이름은 필수 입력입니다.",
                })}
                aria-invalid={isSubmitting ? (errors.nickName ? "true" : "false") : undefined}/>
                {errors.nickName && <Error>{errors.nickName.message?.toString()}</Error>}
                <Input gridarea={"ie"} id="email" type="email" placeholder="이메일" {...register("email", { 
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                        value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                        message: "이메일 형식에 맞지 않습니다."
                    },
                })}
                aria-invalid={isSubmitting ? (errors.email ? "true" : "false") : undefined}/>
                {errors.email && <Error>{errors.email.message?.toString()}</Error>}
                <Input gridarea={"ip"} id="password" type="password" placeholder="비밀번호" {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                        value: 8,
                        message: "8자리 이상 비밀번호를 사용하세요."
                    },
                })}
                aria-invalid={isSubmitting ? (errors.password ? "true" : "false") : undefined}/>
                {errors.password && <Error>{errors.password.message?.toString()}</Error>}
                {resError !== "" ? <Error>{resError}</Error> : null}
                <Button gridarea={"fb"} type="submit" disabled={isSubmitting}>회원가입</Button>
            </Form>
        </Body>
    );
}