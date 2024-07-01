import styled from "styled-components";
import { IMAGE_COMMUNITY, IMAGE_WIKI } from "../../config";

export default function Main(){
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
        display: grid;
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
        <>
            <Main>
                <Picture src={IMAGE_COMMUNITY}/>
                <SectionMain style={{textAlign : "left"}}>
                    <SubTitle>커뮤니티</SubTitle>
                    <ContentsTitle><p>햄스터들의 다채로운 일상들을</p><p>커뮤니티에서 만나보세요</p></ContentsTitle>
                    <Contents><p>홈페이지 이용자분들이 공유해주신</p><p>사랑스러운 가족분들을 만나보실 수 있어요.</p></Contents>
                    <Button/>
                </SectionMain>
            </Main>
            <Main>
                <SectionMain style={{justifyContent : "end", textAlign : "right"}}>
                    <SubTitle>위키</SubTitle>
                    <ContentsTitle><p>클릭하는 순간,</p><p>당신도 햄스터 박사</p></ContentsTitle>
                    <Contents><p>다양한 종류의 햄스터를 알아가보세요.</p></Contents>
                    <Button/>
                </SectionMain>
                <Picture src={IMAGE_WIKI}/>
            </Main>
        </>
    );
}