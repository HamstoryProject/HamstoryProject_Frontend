import styled from "styled-components";

const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    place-content: center;
`;

const Wrapper = styled.div`
    width: 80%;
    height: 100vh;
    display: grid;
    padding-top: 100px;
`;

export default function Wiki(){
    return(
        <Body>
            <Wrapper>
                <h1>HAMSTORY 위키 대문</h1>
            </Wrapper>
        </Body>
    );
}