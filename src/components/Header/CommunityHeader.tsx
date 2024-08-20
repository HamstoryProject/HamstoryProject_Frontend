import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_URLS } from "../../config";

const Header = styled.div`
    display: grid;
    width: 100%;
    height: 100px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
`;

const SectionCategory = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`;

const SectionFunction = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    column-gap: 7px;
`;

const Button = styled.button`
    width: 70px;
    height: 35px;
    border: 1px solid ${props => props.theme.color.gray300};
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
    font-weight: 900;
`;

const ButtonInput = styled.button`
    width: 90px;
    height: 35px;
    border: 1px solid ${props => props.theme.color.gray300};
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.white};
    font-weight: 900;
`;

const Text = styled.h2`
    font-weight: 900;
    letter-spacing: 1px;
`;

export default function CommunityHeader(){
    const categories = [
        { path: ROUTE_URLS.FREE, label: "자유" },
        { path: ROUTE_URLS.PICTURE, label: "사진" },
        { path: ROUTE_URLS.QUESTION, label: "정보" }
    ]

    const navigate = useNavigate();

    return(
        <Header>
            <SectionCategory>
                <Text>자유게시판</Text>
            </SectionCategory>
            <SectionFunction>
                {categories.map((category, index) => (
                    <Button key={index} onClick={() => navigate(category.path)}>
                        {category.label}
                    </Button>
                ))}
                <ButtonInput onClick={() => navigate(ROUTE_URLS.CREATE_POST)}>글쓰기</ButtonInput>
            </SectionFunction>
        </Header>
    );
}