import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { ICON_GIT, ICON_INFO, ICON_MENU } from "../config";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 100px 1fr;
`;

const Menu = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    grid-template-columns: 1fr 2.571428fr 1fr;
`;

const MenuItem = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    place-items: center;
`;

const LogoTxt = styled.div`
    font-size: 40px;
    letter-spacing: 0.025em;
    font-weight: 900;
    color: black;
`;

const TxtNav = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
`;

const TxtNavTxt = styled.div`
    font-size: 20px;
    letter-spacing: -0.1em;
    color: black;
`;

const IconNav = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    svg{
        width: 45%;
        height: 45%;
    }
`;

const Image = styled.img`
`;

export default function Layout(){
    const menuItems = [
        { name: "햄스토리", path: "/hamstory" },
        { name: '커뮤니티', path: '/community' },
        { name: '위키', path: '/wiki' },
        { name: '도움말', path: '/help' },
    ];
    
    return (
        <Wrapper>
            <Menu>
                <Link to="/">
                    <MenuItem>
                        <LogoTxt>HAMSTORY</LogoTxt>
                    </MenuItem>
                </Link>
                <TxtNav>
                    {menuItems.map((item, index) => (
                        <Link key={index} to={item.path}><MenuItem><TxtNavTxt>{item.name}</TxtNavTxt></MenuItem></Link>
                    ))}
                </TxtNav>
                <IconNav>
                    <MenuItem><Image src={ICON_GIT}/></MenuItem>
                    <MenuItem><Image src={ICON_INFO}/></MenuItem>
                    <MenuItem><Image src={ICON_MENU}/></MenuItem>
                </IconNav>
            </Menu>
            <Outlet/>
        </Wrapper>
    );
}