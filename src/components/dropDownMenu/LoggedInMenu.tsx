import styled from "styled-components";
import { userNameProps } from "../../interfaces";

const Contents = styled.li`
    margin: 4px 4px;
    padding: 6px 12px;
    &:hover{
        background-color: #f0f0f0;
    }
`;

export default function LoggedInMenu(props : userNameProps){
    return(
        <>
            <Contents>{props.userName}님 환영합니다.</Contents>
            <Contents>마이페이지</Contents>
            <Contents>로그아웃</Contents>
        </>
    );
}