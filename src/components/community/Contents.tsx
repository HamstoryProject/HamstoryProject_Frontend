import styled from "styled-components";
import { ICONS, IMAGES } from "../../config";

const Wrapper = styled.li`
    width: 100%;
    height: 130px;
    display: grid;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.10);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 5px;
    background-color: white;
    grid-template-areas: "img methods info";
    grid-template-columns: 130px auto auto;

    &:hover{
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 4px 5px rgba(0, 0, 0, 0.08);
    }
`;

const Image = styled.img`
    display: grid;
    grid-area: img;
    margin: 15px;
    width: 100px;
    height: 100px;
    border-radius: 5px;
`;

const SectionMethods = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
`;

const ArticleTitle = styled.article`
    display: flex;
    column-gap: 5px;
    color: #323232;
`;

const Title = styled.p`
    font-size: 20px;
`;

const Comment = styled.p`
    font-size: 20px;
    color: #3182f6;
`;

const ArticleDetails = styled.article`
    display: flex;
    column-gap: 5px;
    color: #676767;
    font-size: 14px;
`;

const SectionInfo = styled.section`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 25px;
    gap: 5px;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
`;

const IconTxt = styled.span`
    font-size: 14px;
    font-weight: 900;
`;

export default function Contents({title, writer, createdTime, likes}){
    return(
        <Wrapper>
            <Image src={IMAGES.COMMUNITY}/>
            <SectionMethods>
                <ArticleTitle>
                    <Title>{title}</Title>
                    <Comment>{"[112]"}</Comment>
                </ArticleTitle>
                <ArticleDetails>
                    <span>{writer}</span>
                    <span>&middot;</span>
                    <span>{createdTime}</span>
                </ArticleDetails>
            </SectionMethods>
            <SectionInfo>
                <Icon src={ICONS.LIKE}/>
                <IconTxt>{likes ? likes : 0}</IconTxt>
            </SectionInfo>
        </Wrapper>
    );
}