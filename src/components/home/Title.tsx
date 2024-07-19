import styled from "styled-components";
import { ICON_TO_UNDER } from "../../config";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 86% 14%;
    align-items: center;
`;

const SectionTitle = styled.h1`
    display: block;
    text-align:center;
    color: #333d4b;
    padding-top: 100px;
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

const SectionToUnder = styled.div`
    display: flex;
    flex-direction : column;
    place-items: center;
    row-gap: 15px;
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

export default function Title(){
    return(
        <Wrapper>
            <SectionTitle>햄스터의 모든 것<br/><b>HAMSTORY</b>에서 만나보세요</SectionTitle>
            <SectionToUnder>
                <TxtToUnder>아래로 스크롤 해 자세히 알아보기</TxtToUnder>
                <Image src={ICON_TO_UNDER}/>
            </SectionToUnder>
        </Wrapper>
    );
}