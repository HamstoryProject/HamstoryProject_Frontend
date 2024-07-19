import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.span`
    font-size: 14px;
    color: #999;
`;

export default function Footer(){
    return(
        <Wrapper>
            <Text>© 2024 HamStory</Text>
        </Wrapper>
    );
}