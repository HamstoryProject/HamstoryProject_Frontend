import styled from "styled-components";

export default function Feedback(){
    const Wrapper = styled.div`
        width: 100%;
        height: 500px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    `;

    return(
        <Wrapper>
            
            <h1>테스트</h1>
        </Wrapper>
    );
}