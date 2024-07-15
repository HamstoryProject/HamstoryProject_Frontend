import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICON_GIT, ICON_INFO, ICON_MENU } from "../../config";
import { useState } from "react";
import DropDownMenu from "../dropDownMenu/DropDownMenu";

interface props{
    userName : string | null;
}

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
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
`;

const Img = styled.img`
    svg{
        width: 45%;
        height: 45%;
    };
`;

export default function Navbar(props : props){
    const menuItems = [
        { name: "햄스토리", path: "/" },
        { name: '커뮤니티', path: '/' },
        { name: '위키', path: '/wiki' },
        { name: '도움말', path: '/' },
    ];

    const [view, setView] = useState(false);

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
                <Link to={"https://github.com/HamstoryProject"}><img src={ICON_GIT}></img></Link>
                <Img onClick={() => {setView(!view)}} src={ICON_INFO}></Img>
                {view && <DropDownMenu userName = {props.userName}/>}
                <Img src={ICON_MENU}></Img>
            </IconNav>
        </Menu>
    );
}