import styled from "styled-components";
import BestBoard from "./BestBoard";

const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 100px;
    justify-content: center;
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

const Main = styled.div`
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    width: 70px;
    height: 30px;
`;

const Input = styled.input`
    width: 200px;
    height: 30px;
`;

export default function Community(){
    return(
        <Body>
            <Wrapper>
                <Header>
                    <SectionCategory>
                        <Button>인기</Button>
                        <Button>자유</Button>
                        <Button>사진</Button>
                        <Button>정보</Button>
                    </SectionCategory>
                    <SectionFunction>
                        <Input/>
                        <Button>글쓰기</Button>
                    </SectionFunction>
                </Header>
                <Main>
                    <BestBoard/>
                </Main>
            </Wrapper>
        </Body>
    );
}