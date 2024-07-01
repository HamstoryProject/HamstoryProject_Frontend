import styled from "styled-components";
import Title from "../components/home/Title";
import Main from "../components/home/Main";

export default function Home(){
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: grid;
    `;

    return(
        <Wrapper>
            <Title/>
            <Main/>
            <h3>피드백</h3>
        </Wrapper>
    );
}