import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ICON_INFO } from "../../config";

const Container = styled.div`
    grid-area: pic;
    width: 100%;
    height: auto;
    margin-top: 30px;
    display: grid;
    place-items: center;
`;

const Image = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
`;

const Name = styled.h3`
    grid-area: nm;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 18px;
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 0px 0px 5px 5px;
    border-top: 1px solid #c5ccd2;
    font-weight: 900;
    grid-area: btn;
    font-size: 14px;
    background-color: #3182f6;
    color: white;
`;

export default function LoggedOutMenu(){
    const navigate = useNavigate();

    const goToLogin = () => { navigate("/login"); };

    return(
        <>  
            <Container>
                <Image src={ICON_INFO}></Image>
            </Container>
            <Name>Guest</Name>
            <Button onClick={goToLogin}>로그인</Button>
        </>
    );
}