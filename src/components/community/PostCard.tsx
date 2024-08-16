import styled from "styled-components";
import { ICONS, IMAGES } from "../../config";
import { PostsProps } from "../../types/posts";

const Wrapper = styled.li`
    width: 100%;
    height: 130px;
    display: grid;
    box-shadow: ${props => props.theme.shadow.postShadow1}, ${props => props.theme.shadow.postShadow2};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 5px;
    background-color: white;
    grid-template-areas: "img methods info";
    grid-template-columns: 130px auto auto;

    &:hover{
        box-shadow: ${props => props.theme.shadowHover.postShadowHover1}, ${props => props.theme.shadowHover.postShadowHover2};
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
    color: ${props => props.theme.color.gray800};
`;

const Title = styled.p`
    font-size: 20px;
`;

const Comment = styled.p`
    font-size: 20px;
    color: ${props => props.theme.color.blue};
`;

const ArticleDetails = styled.article`
    display: flex;
    column-gap: 5px;
    color: ${props => props.theme.color.gray500};
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

export default function PostCard(props : PostsProps){
    return(
        <Wrapper>
            <Image src={IMAGES.COMMUNITY}/>
            <SectionMethods>
                <ArticleTitle>
                    <Title>{props.title}</Title>
                    <Comment>{"[112]"}</Comment>
                </ArticleTitle>
                <ArticleDetails>
                    <span>{props.writer}</span>
                    <span>&middot;</span>
                    <span>{props.createdTime}</span>
                </ArticleDetails>
            </SectionMethods>
            <SectionInfo>
                <Icon src={ICONS.LIKE}/>
                <IconTxt>{props.likes ? props.likes : 0}</IconTxt>
            </SectionInfo>
        </Wrapper>
    );
}