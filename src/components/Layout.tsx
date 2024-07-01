import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./menu/Navbar";
import Footer from "./Footer";

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
`;

export default function Layout(){
    return (
        <Wrapper>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </Wrapper>
    );
}