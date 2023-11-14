import styled from "styled-components";
import { ICON_TO_UNDER, IMAGE_COMMUNITY } from "../config";

export default function Home(){
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: block;
    `;

    const Title = styled.div`
        width: 100%;
        height: 90vh;
        display: grid;
        grid-template-rows: 86% 14%;
        align-items: center;
        text-align: center;
    `;

    const SectionTitle = styled.div`
        letter-spacing: -3.5px;
        animation-name: titleTextAnimation;
        animation-duration: 1s;
        animation-iteration-count: 1;

        @keyframes titleTextAnimation{
            from{
                opacity: 0;
                transform: translateY(-2vh);
            }

            to{
                opacity: 3;
                transform: none;
            }
        }
    `;

    const TxtTitle = styled.span`
        font-size: 52pt;
        color: #333d4b;
    `;

    const TxtTitleBold = styled.span`
        font-size: 66pt;
        color: #191f28;
    `;

    const titleText = {
        txt1 : "햄스터의 모든것",
        bold : "HAMSTORY",
        txt2 : "에서 만나보세요"
    }

    const SectionToUnder = styled.div`
        letter-spacing: -1px;
        animation-name: toUnderAnimation;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        @keyframes toUnderAnimation{
            from{
                margin-bottom: 4vh;
            }

            to{
                margin-bottom: 0px;
            }
        }
    `;

    const TxtToUnder = styled.p`
        font-size: 14pt;
        color: #6b7684;
    `;

    const Image = styled.img``;

    const Main = styled.div`
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5%;
        place-items: center;
    `;

    const Picture = styled.img` 
        border-radius: 5%;
    `;

    const Section = styled.div`
        width: 100%;
        height: 85%;
        display: flex;
        align-items: center;
    `;

    const Box = styled.div`
        width: 85%;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    `;

    const SubTitle = styled.h2`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
    `;

    const ContentsTitle = styled.h1`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    `;

    const Contents = styled.h3`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-top;
    `;

    const Button = styled.button`
        width: 300px;
        height: 60px;
    `;

    return(
        <Wrapper>
            <Title>
                <SectionTitle><TxtTitle><p>{titleText.txt1}</p> <TxtTitleBold>{titleText.bold}</TxtTitleBold>{titleText.txt2}</TxtTitle></SectionTitle>
                <SectionToUnder>
                    <TxtToUnder>아래로 이동</TxtToUnder>
                    <Image src={ICON_TO_UNDER}/>
                </SectionToUnder>
            </Title>
            <Main>
                <Picture src={IMAGE_COMMUNITY}/>
                <Section>
                    <Box>
                        <SubTitle>커뮤니티</SubTitle>
                        <ContentsTitle>햄스터들의 다채로운 일상들을 커뮤니티에서 만나보세요</ContentsTitle>
                        <Contents>홈페이지 이용자분들이 공유해주신 사랑스러운 가족분들을 만나보실 수 있어요.</Contents>
                        <Button/>
                    </Box>
                </Section>
            </Main>
            <Main>메인 2</Main>
            <h3>피드백</h3>
            <h4>footer</h4>
        </Wrapper>
    );
}