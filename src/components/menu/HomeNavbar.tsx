import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICON_GIT, ICON_INFO, ICON_MENU } from "../../config";
import { useState } from "react";
import DropDownMenu from "../../dropDown/DropDownMenu";

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
`;

const MenuItem = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    place-items: center;
`;

const LogoText = styled.p`
    font-size: 40px;
    letter-spacing: 0.025em;
    font-weight: 900;
    color: black;
`;

const TextNav = styled.div`
    width: 100%;
    height:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
`;

const ItemText = styled.div`
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
export default function Navbar(){
    const menuItems = [
        { name: "햄스토리", path: "/" },
        { name: '커뮤니티', path: '/' },
        { name: '위키', path: '/wiki' },
        { name: '도움말', path: '/' },
    ];

    const iconItems = [
        { src: ICON_GIT },
        { src: ICON_INFO },
        { src: ICON_MENU },
    ];

    const [openMenu, setOpenMenu] = useState(false);

    return(
        <Menu>
            <Link to="/">
                <MenuItem>
                    <LogoText>HAMSTORY</LogoText>
                </MenuItem>
            </Link>
            <TextNav>
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}><MenuItem>
                        <ItemText>{item.name}</ItemText>
                    </MenuItem></Link>
                ))}
            </TextNav>
            <IconNav>
                {iconItems.map((item, index) => (
                    <MenuItem key={index}><img src={item.src} onClick={() => setOpenMenu(prev => !prev)}/>{openMenu && <DropDownMenu/>}</MenuItem>
                ))}
            </IconNav>
        </Menu>
    );
}