import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_SIGNUP } from "../config.ts";
import axios from "axios";
import { CreateAccountFormValue, StyledGridAreaProps, StyledIsCreateAccountErrorProps } from "../interfaces.ts";

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
    text-align: center;
    padding-bottom: 20px;
`;

const Button = styled.button<StyledGridAreaProps>`
    width: 100%;
    height: 42px;
    grid-area: ${props => props.gridarea};
`;

// lg: logo
// lb: login button, rb : register button
// ie: input email, ip: input password
// ner: nickname error message
// ier: email error message
// per: password error message
// er: error message
// fb: form button
const Form = styled.form<StyledIsCreateAccountErrorProps>`
    display: grid;
    width: 420px;
    font-size: 14px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    width: 500px;
    row-gap: 10px;
    padding: 50px;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    color: red;
    grid-template-areas:
        "lg lg"
        "lb rb"
        "in in"
        ${props => props.isNickNameError ? '"ner ner"' : null}
        "ie ie"
        ${props => props.isIdError ? '"ier ier"' : null}
        "ip ip"
        ${props => props.isPasswordError ? '"per per"' : null}
        ${props => props.isError ? '"er er"' : null}
        "fb fb"
    ;
`;

const Input = styled.input<StyledGridAreaProps>`
    width: 100%;
    height: 42px;
    grid-area: ${props => props.gridarea};
`;

const Error = styled.div<StyledGridAreaProps>`
    grid-area: ${props => props.gridarea};
`;

export default function CreateAccount(){
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<CreateAccountFormValue>();
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

    const onSubmit = async(data : CreateAccountFormValue) => {
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
            <Form 
                isNickNameError = {errors.nickName ? true : false} 
                isIdError = {errors.email ? true : false}
                isPasswordError = {errors.password ? true : false}
                isError = {resError !== "" ? true : false}
                onSubmit={handleSubmit(onSubmit)}>
                <Logo onClick={navigateToHome}>HAMSTORY</Logo>
                <Button gridarea={"lb"} onClick={navigateTologin}>로그인</Button>
                <Button gridarea={"rb"} onClick={navigateToCreateAccount}>회원가입</Button>
                <Input gridarea={"in"} id="nickName" type="text" placeholder="닉네임" {...register("nickName", {
                    required: "이름은 필수 입력입니다.",
                })}
                aria-invalid={isSubmitting ? (errors.nickName ? "true" : "false") : undefined}/>
                {errors.nickName && <Error gridarea={"ner"}>{errors.nickName.message?.toString()}</Error>}
                <Input gridarea={"ie"} id="email" type="email" placeholder="이메일" {...register("email", { 
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                        value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                        message: "이메일 형식에 맞지 않습니다."
                    },
                })}
                aria-invalid={isSubmitting ? (errors.email ? "true" : "false") : undefined}/>
                {errors.email && <Error gridarea={"ier"}>{errors.email.message?.toString()}</Error>}
                <Input gridarea={"ip"} id="password" type="password" placeholder="비밀번호" {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                        value: 8,
                        message: "8자리 이상 비밀번호를 사용하세요."
                    },
                })}
                aria-invalid={isSubmitting ? (errors.password ? "true" : "false") : undefined}/>
                {errors.password && <Error gridarea={"per"}>{errors.password.message?.toString()}</Error>}
                {resError !== "" ? <Error gridarea={"er"}>{resError}</Error> : null}
                <Button gridarea={"fb"} type="submit" disabled={isSubmitting}>회원가입</Button>
            </Form>
        </Body>
    );
}