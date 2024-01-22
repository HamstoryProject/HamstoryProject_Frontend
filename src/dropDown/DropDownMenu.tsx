import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_INFO } from "../config";

interface UserData {
    "memberEmail": string,
    "memberPassword": string,
    "memberName": string,
	"imageUrl": string,
};

function PleaseLogin(){
    const TextAlert = styled.li`
        padding: 5px;
        font-size: 13px;
    `

    const ButtonLi = styled.li`
    `
    const Button = styled.button`
        display: flex;
        width: 100%;
        height: 100%;
        background-color: white;
        border: white;
        &:hover {
            background-color: #f0f0f0;
        }
        color:black;
    `;

    const Hr = styled.hr`
        width: 100%;
        border-top: 1px solid #8c8c8c;
    `

    return(
        <>
            <TextAlert>로그인 해주세요!</TextAlert>
            <Hr/>
            <ButtonLi><Button as={Link} to={"/login"}>로그인</Button></ButtonLi>
        </>
    );
}

export default function DropDownMenu(){
    const Wrap = styled.div`
        padding: 5px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100px;
        right: 8rem;
        width: 160px;
        background-color: white;
        border: 1px solid gray;
    `;

    const Ul = styled.ul`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;
    
    const TextName = styled.li`
        padding: 5px;
        font-size: 16px;
    `

    const [cookies, setCookie, removeCookie] = useCookies(["id"]);
    const [userdata, setUserData] = useState<UserData | null>(null);

    const init = async() => {
        const res = await axios.get(URL_INFO, {
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + cookies.id,
            }
        })
        setUserData(res.data);
    }

    useEffect(() => {
        init();
    }, [])

    return(
        <Wrap>
            <Ul>
                <TextName>{userdata === null ? "UserName" : userdata.memberName}</TextName>
                {userdata === null ? <PleaseLogin/> : null}
            </Ul>
        </Wrap>
    );
}