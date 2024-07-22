import styled from "styled-components";
import { Outlet } from "react-router-dom";
import HomeNavbar from "../headers/HomeNavbar";
import Footer from "./Footer";
import WikiNavBar from "../headers/WikiNavBar";

interface Props{
    path : string;
}

const Wrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
`;

export default function Layout(props : Props){
    return (
        <Wrapper>
            {props.path === "home" || props.path === "community" ? <HomeNavbar/> : <WikiNavBar/>}
            <Outlet/>
            <Footer/>
        </Wrapper>
    );
}