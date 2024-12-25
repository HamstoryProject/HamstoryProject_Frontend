import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
    width: 100%;
    height:100px;
    display: grid;
    grid-template-columns: 1fr 2.571428fr 1fr;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: ${props => props.theme.color.white};
    border-bottom: 1px solid ${props => props.theme.color.gray300};
    place-items: center;
`;

const LogoText = styled.p`
    display: flex;
    font-size: 40px;
    letter-spacing: 0.025em;
    font-weight: 900;
    color: ${props => props.theme.color.black};
`;
export default function WikiHeader(){
    const navigate = useNavigate();
    const navigateToHome = () => navigate("/");
    return(
        <Menu>
            <LogoText onClick={navigateToHome}>HAMSTORY</LogoText>
            <h1>이 사이트 내 검색</h1>
        </Menu>
    );
}