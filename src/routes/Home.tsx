import styled from "styled-components";
import { ICON_TO_UNDER, IMAGE_COMMUNITY } from "../config";

export default function Home(){
    const Wrapper = styled.div`
        width: 100%;
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
        display:grid;
        grid-template-rows: 1fr 1fr;
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

    const TitleText = styled.h1`
        color: #333d4b;
    `

    const SectionToUnder = styled.div`
        display: grid;
        grid-template-rows: 1fr 1fr;
        place-items: center;
        grid-row-gap: 20%;
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
        color: #6b7684;
    `;

    const Image = styled.img``;

    const Main = styled.div`
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
    `;

    const Picture = styled.img`
        border-radius: 5%;
        width: 80%;
        aspect-ratio: 1/1;
    `;

    const SectionMain = styled.div`
        width: 80%;
        height: 50%;
        display: grid;
        grid-template-rows: 0.5fr 1.25fr 0.75fr 1fr;
        align-items: center;
    `;

    const SubTitle = styled.h2`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: #72b2c6;
    `;

    const ContentsTitle = styled.h1`
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        align-items: center;
    `;

    const Contents = styled.h3`
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        grid-template-rows: 1fr 1fr;
        color: #333d4b;
    `;

    const Button = styled.button`
        width: 300px;
        height: 60px;
    `;

    return(
        <Wrapper>
            <Title>
                <SectionTitle>
                    <TitleText>햄스터의 모든 것</TitleText>
                    <TitleText><b>HAMSTORY</b>에서 만나보세요</TitleText>
                </SectionTitle>
                <SectionToUnder>
                    <TxtToUnder>아래로 스크롤 해 자세히 알아보기</TxtToUnder>
                    <Image src={ICON_TO_UNDER}/>
                </SectionToUnder>
            </Title>
            <Main>
                <Picture src={IMAGE_COMMUNITY}/>
                <SectionMain>
                    <SubTitle>커뮤니티</SubTitle>
                    <ContentsTitle><p>햄스터들의 다채로운 일상들을</p><p>커뮤니티에서 만나보세요</p></ContentsTitle>
                    <Contents><p>홈페이지 이용자분들이 공유해주신</p><p>사랑스러운 가족분들을 만나보실 수 있어요.</p></Contents>
                    <Button/>
                </SectionMain>
            </Main>
            <Main>
                <SectionMain style={{alignItems : "right"}}>
                    <SubTitle>커뮤니티</SubTitle>
                    <ContentsTitle><p>햄스터들의 다채로운 일상들을</p><p>커뮤니티에서 만나보세요</p></ContentsTitle>
                    <Contents><p>홈페이지 이용자분들이 공유해주신</p><p>사랑스러운 가족분들을 만나보실 수 있어요.</p></Contents>
                    <Button/>
                </SectionMain>
                <Picture src={IMAGE_COMMUNITY}/>
            </Main>
            <h3>피드백</h3>
        </Wrapper>
    );
}