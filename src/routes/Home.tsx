import styled from "styled-components";
import Title from "../components/home/Title";
import Main from "../components/home/Main";
import Feedback from "../components/home/Feedback";

const Body = styled.div`
    width: 100%;
    height: 100%;
    display: block;
`;

export default function Home(){
    return(
        <Body>
            <Title/>
            <Main/>
            <Feedback/>
        </Body>
    );
}