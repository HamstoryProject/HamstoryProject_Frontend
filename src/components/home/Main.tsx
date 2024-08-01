import styled from "styled-components";
import { IMAGES } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { StyledMainSectionProps } from "../../interfaces";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: block;
`;

const Article = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
`;

const Section = styled.div<StyledMainSectionProps>`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction : column;
    justify-content: center;
    row-gap: 30px;
    align-items: ${props => props.alignitems};
    text-align: ${props => props.textalign};
`;

const Picture = styled.img`
    border-radius: 5%;
    width: 80%;
    aspect-ratio: 1/1;
`;

const SubTitle = styled.h2`
    color: #3182f6;
`;

const Content = styled.h3`
    color: #333d4b;
`;


export default function Main(){
    const navigate = useNavigate();
    const navigateToWiki = () => navigate("/wiki");

    return(
        <Wrapper>
            <Article>
                <Picture src={IMAGES.COMMUNITY}/>
                <Section alignitems = "flex-start" textalign = "left">
                    <SubTitle>커뮤니티</SubTitle>
                    <h1>햄스터들의 다채로운 일상들을<br/>커뮤니티에서 만나보세요</h1>
                    <Content>홈페이지 이용자분들이 공유해주신<br/>사랑스러운 가족분들을 만나보실 수 있어요.</Content>
                    <Button>홈페이지 바로가기</Button>
                </Section>
            </Article>
            <Article>
                <Section alignitems = "flex-end" textalign = "right">
                    <SubTitle>위키</SubTitle>
                    <h1>클릭하는 순간,<br/>당신도 햄스터 박사</h1>
                    <Content>다양한 종류의 햄스터를 알아가보세요.</Content>
                    <Button onClick={navigateToWiki}>홈페이지 바로가기</Button>
                </Section>
                <Picture src={IMAGES.WIKI}/>
            </Article>
        </Wrapper>
    );
}