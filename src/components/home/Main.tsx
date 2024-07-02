import styled from "styled-components";
import { IMAGE_COMMUNITY, IMAGE_WIKI } from "../../config";

interface Props{
    alignItems : string;
}

export default function Main(){
    const Main = styled.div`
        width: 100%;
        height: 100%;
        display: block;
    `;

    const Article = styled.div`
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
    `;

    const Section = styled.div<Props>`
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction : column;
        justify-content: center;
        row-gap: 25px;
        align-items: ${props => props.alignItems};
    `;

    const Picture = styled.img`
        border-radius: 5%;
        width: 80%;
        aspect-ratio: 1/1;
    `;

    const SubTitle = styled.h2`
        color: #72b2c6;
    `;

    const Content = styled.h3`
        color: #333d4b;
    `;

    const Button = styled.button`
        width: 300px;
        height: 60px;
    `;

    return(
        <Main>
            <Article>
                <Picture src={IMAGE_COMMUNITY}/>
                <Section alignItems = "flex-start">
                    <SubTitle>커뮤니티</SubTitle>
                    <h1>햄스터들의 다채로운 일상들을</h1>
                    <h1>커뮤니티에서 만나보세요</h1>
                    <Content>홈페이지 이용자분들이 공유해주신</Content>
                    <Content>사랑스러운 가족분들을 만나보실 수 있어요.</Content>
                    <Button/>
                </Section>
            </Article>
            <Article>
                <Section alignItems = "flex-end">
                    <SubTitle>위키</SubTitle>
                    <h1>클릭하는 순간,</h1><h1>당신도 햄스터 박사</h1>
                    <Content>다양한 종류의 햄스터를 알아가보세요.</Content>
                    <Button/>
                </Section>
                <Picture src={IMAGE_WIKI}/>
            </Article>
        </Main>
    );
}