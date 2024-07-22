import styled from "styled-components";

const Wrapper = styled.ul`
    width: 100%;
    height: auto;
`;

const Contents = styled.li`
    width: 100%;
    height: 100px;
`;

export default function BestBoard(){
    return(
        <Wrapper>
            <Contents>123</Contents>
            <Contents>123</Contents>
            <Contents>123</Contents>
            <Contents>123</Contents>
            <Contents>123</Contents>
        </Wrapper>

    );
}