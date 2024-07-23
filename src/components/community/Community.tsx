import styled from "styled-components";
import Contents from "./Contents";

interface Props {
    backgroundcolor : string;
    color : string
}

const Body = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    background-color: #f5f6f7;
`;

const Wrapper = styled.div`
    width: 66.67%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: grid;
    width: 100%;
    height: 100px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
`;

const SectionCategory = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`;

const SectionFunction = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    column-gap: 10px;
`;

const Main = styled.ul`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #c5ccd2;
`;

const Button = styled.button<Props>`
    width: 80px;
    height: 35px;
    border: 1px solid #c5ccd2;
    background-color: ${props => props.backgroundcolor};
    color: ${props => props.color};
    font-weight: 900;
`;

const Input = styled.input`
    width: 220px;
    height: 35px;
`;

export default function Community(){
    return(
        <Body>
            <Wrapper>
                <Header>
                    <SectionCategory>
                        <Button backgroundcolor={"#3182f6"} color={"white"}>인기</Button>
                        <Button backgroundcolor={"white"} color={"black"}>자유</Button>
                        <Button backgroundcolor={"white"} color={"black"}>사진</Button>
                        <Button backgroundcolor={"white"} color={"black"}>정보</Button>
                    </SectionCategory>
                    <SectionFunction>
                        <Input/>
                        <Button backgroundcolor={"#17b75e"} color={"white"}>글쓰기</Button>
                    </SectionFunction>
                </Header>
                <Main>
                    <Contents/>
                    <Contents/>
                    <Contents/>
                    <Contents/>
                    <Contents/>
                    <Contents/>
                    <Contents/>
                    <Contents/>
                    <Contents/>
                </Main>
            </Wrapper>
        </Body>
    );
}