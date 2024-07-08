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
    background-color: white;
    box-shadow: 0 1px rgba(0,0,0,.1), 0 -1px rgba(0,0,0,.1);
    place-items: center;
`;

const LogoText = styled.p`
    display: flex;
    font-size: 40px;
    letter-spacing: 0.025em;
    font-weight: 900;
    color: black;
`;
export default function WikiNavBar(){
    const navigate = useNavigate();
    const navigateToHome = () => navigate("/");
    return(
        <Menu>
            <LogoText onClick={navigateToHome}>HAMSTORY</LogoText>
            <h1>이 사이트 내 검색</h1>
        </Menu>
    );
}