import styled from "styled-components";
import { ICONS, IMAGES } from "../../config";

const Wrapper = styled.li`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #c5ccd2;
    border-left: 1px solid #c5ccd2;
    border-right: 1px solid #c5ccd2;
    background-color: white;
    column-gap: 10px;
`;

const SectionLike = styled.section`
    display: flex;
    width: 75px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #676767;
    margin-left: 10px;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
`;

const IconTxt = styled.span`
    font-size: 14px;
    font-weight: 900;
`;

const SectionImg = styled.section`
    display:flex;
    place-items: center;
    width: 100px;
    height: 100%;
`;

const Image = styled.img`
    display:flex;
    place-items: center;
    width: 100px;
    height: 80px;
`;

const SectionMethods = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
`;

const ArticleTitle = styled.article`
    display: flex;
    column-gap: 5px;
    color: #323232;
    font-size: 16px;
`;

const Title = styled.h4`
`;

const Comment = styled.h4`
    color: #3182f6;
    font-weight: 900;
`;

const ArticleDetails = styled.article`
    display: flex;
    column-gap: 5px;
    color: #676767;
    font-size: 14px;
`;

const DetailTxt = styled.span`
`;

export default function Contents(){
    return(
        <Wrapper>
            <SectionLike>
                <Icon src={ICONS.LIKE}/>
                <IconTxt>217</IconTxt>
            </SectionLike>
            <SectionImg>
                <Image src={IMAGES.COMMUNITY}/>
            </SectionImg>
            <SectionMethods>
                <ArticleTitle>
                    <Title>홈페이지 버그발견</Title>
                    <Comment>{"[112]"}</Comment>
                </ArticleTitle>
                <ArticleDetails>
                    <Icon src={ICONS.INFORMATION}/>
                    <DetailTxt>정보</DetailTxt>
                    <DetailTxt>&middot;</DetailTxt>
                    <DetailTxt>24분전</DetailTxt>
                    <DetailTxt>&middot;</DetailTxt>
                    <DetailTxt>가루멘탈</DetailTxt>
                </ArticleDetails>
            </SectionMethods>
        </Wrapper>
    );
}