import styled from "styled-components";
import Title from "../components/home/Title";
import Main from "../components/home/Main";
import Feedback from "../components/home/Feedback";

export default function Home(){
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: block;
    `;

    return(
        <Wrapper>
            <Title/>
            <Main/>
            <Feedback/>
        </Wrapper>
    );
}