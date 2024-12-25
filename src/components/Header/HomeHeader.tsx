import { Link } from "react-router-dom";
import styled from "styled-components";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { ICONS, IMAGES, ROUTE_URLS, API_URLS } from "../../config";
import { useEffect, useState } from "react";
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
    background-color: ${props => props.theme.color.white};
    border-bottom: 1px solid ${props => props.theme.color.gray300};
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
    color: ${props => props.theme.color.black};
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
    color: ${props => props.theme.color.black};
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
    border-radius: 100%;
    width: 30px;
    height: 30px;
`;

const Text = styled.h3`
    font-size: 16px;
    font-weight: 900;
`;

export default function HomeHeader(){
    const menuItems = [
        { name: "햄스토리", path: ROUTE_URLS.HOME },
        { name: '커뮤니티', path: ROUTE_URLS.COMMUNITY },
        { name: '위키', path: ROUTE_URLS.WIKI },
        { name: '도움말', path: ROUTE_URLS.HOME },
    ];

    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    const [userName, setUserName] = useState(null);
    const [view, setView] = useState(false);

    const authCheck = () => {
        const token = cookies.id;
        axios.get(API_URLS.INFO, {
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
                    {userName ? <><Img src={IMAGES.COMMUNITY}/><Text>{userName}</Text></> : <><Img src={ICONS.PROFILE}/><Text>Guest</Text></>}
                </SectionProfile>
                {view && <DropDownMenu userName={userName}/>}
            </ProfileNav>
        </Menu>
    );
}