import styled from "styled-components";
import Contents from "./Contents";
import CommunityHeader from "../Header/CommunityHeader";

const Body = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    background-color: white;
`;

const Wrapper = styled.div`
    width: 66.67%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.ul`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #c5ccd2;
`;

export default function Best(){
    return(
        <Body>
            <Wrapper>
                <CommunityHeader/>
                <Main>
                    <Contents/>
                </Main>
            </Wrapper>
        </Body>
    );
}