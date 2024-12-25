import styled from "styled-components";
import { useCookies } from "react-cookie";
import { IMAGES } from "../../config";
import { StyledBorderRadiusProps } from "../../types/styles";
import { UserNameProps } from "../../types/auth";

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

const SectionButton = styled.div`
    display: flex;
    width: 100%;
    grid-area: btn;
`;

const Button = styled.button<StyledBorderRadiusProps>`
    width: 100%;
    height: 40px;
    border: none;
    border: 1px solid ${props => props.theme.color.gray300};
    border-top: 1px solid ${props => props.theme.color.gray300};
    font-weight: 900;
    grid-area: btn;
    font-size: 14px;
    background-color: ${props => props.theme.color.blue};
    border-radius: ${props => props.borderradius};
    color: ${props => props.theme.color.white};
`;

export default function LoggedInMenu(props : UserNameProps){
    const [cookies, setCookie, removeCookie] = useCookies(['id']);

    const logout = () => {
        removeCookie('id');
        window.location.reload();
    };

    return(
        <>
            <Container>
                <Image src={IMAGES.COMMUNITY}></Image>
            </Container>
            <Name>{props.userName}</Name>
            <SectionButton>
                <Button borderradius={"0 0 0 5px"}>마이페이지</Button>
                <Button borderradius={"0 0 5px 0"} onClick={logout}>로그아웃</Button>
            </SectionButton>
            
        </>
    );
}