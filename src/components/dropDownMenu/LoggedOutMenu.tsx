import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Contents = styled.li`
    margin: 4px 4px;
    padding: 6px 12px;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export default function LoggedOutMenu(){
    const navigate = useNavigate();

    const goToLogin = () => { navigate("/login"); };

    return(
        <>
            <Contents>비로그인 상태입니다.</Contents>
            <Contents onClick={goToLogin}>로그인</Contents>
        </>
    );
}