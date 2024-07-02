import styled from "styled-components";
import { ICON_TO_UNDER } from "../../config";

export default function Title(){
    const Title = styled.div`
        width: 100%;
        height: 100vh;
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

    return(
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
    );
}