import { Link } from "react-router-dom";
import styled from "styled-components";

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

export default function DropDownMenu(props : any){
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

    return(
        <Wrap>
            <Ul>
                <TextName>{props.userdata === null ? "UserName" : props.userdata.memberName}</TextName>
                {props.userdata === null ? <PleaseLogin/> : null}
            </Ul>
        </Wrap>
    );
}