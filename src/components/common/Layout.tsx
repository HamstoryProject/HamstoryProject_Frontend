import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HomeHeader from "../Header/HomeHeader";
import WikiHeader from "../Header/WikiHeader";

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
            {props.path === "home" ? <HomeHeader/> : <WikiHeader/>}
            <Outlet/>
            <Footer/>
        </Wrapper>
    );
}