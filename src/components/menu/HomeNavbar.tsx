import { Link } from "react-router-dom";
import styled from "styled-components";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { PATH_HOME, PATH_WIKI } from "../../config";
import { useEffect, useState } from "react";
import { ICON_INFO, URL_INFO } from "../../config";
import { useCookies } from "react-cookie";
import axios from "axios";

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

const ProfileNav = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`;

const SectionProfile = styled.div`
    width: auto;
    height: auto;   
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
    cursor: pointer;
`;

const Img = styled.img`
    width: 30px;
    height: 30px;
`;

const Text = styled.h3`
    font-size: 16px;
    font-weight: 900;
`;

export default function Navbar(){
    const menuItems = [
        { name: "햄스토리", path: PATH_HOME },
        { name: '커뮤니티', path: PATH_HOME },
        { name: '위키', path: PATH_WIKI },
        { name: '도움말', path: PATH_HOME },
    ];

    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    const [userName, setUserName] = useState(null);
    const [view, setView] = useState(false);

    const authCheck = () => {
        const token = cookies.id;
        axios.get(URL_INFO, {
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + token,
            }
        })
        .then((res) => {
            setUserName(res.data.memberName);
        })
        .catch(() => {
            removeCookie('id');
        })
    }

    useEffect(() => {
        authCheck();
    }, [])

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
            <ProfileNav>
                <SectionProfile onClick={() => {setView(!view)}}>
                    <Img src={ICON_INFO}/>
                    <Text>{userName}</Text>
                </SectionProfile>
                {view && <DropDownMenu userName={userName}/>}
            </ProfileNav>
        </Menu>
    );
}