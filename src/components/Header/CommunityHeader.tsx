import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_URLS } from "../../config";

interface Props {
    backgroundcolor : string;
    color : string
}

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
    column-gap: 10px;
`;

const Button = styled.button<Props>`
    width: 80px;
    height: 35px;
    border: 1px solid #c5ccd2;
    background-color: ${props => props.backgroundcolor};
    color: ${props => props.color};
    font-weight: 900;
`;

const Input = styled.input`
    width: 220px;
    height: 35px;
`;

export default function CommunityHeader(){
    const categories = [
        { path: ROUTE_URLS.BEST, label: "인기" },
        { path: ROUTE_URLS.FREE, label: "자유" },
        { path: ROUTE_URLS.PICTURE, label: "사진" },
        { path: ROUTE_URLS.INFO, label: "정보" }
    ]

    const location = useLocation();
    const navigate = useNavigate();

    return(
        <Header>
            <SectionCategory>
                {categories.map((category, index) => (
                    <Button 
                        key={index} onClick={() => navigate(category.path)} 
                        backgroundcolor={location.pathname === category.path ? "#3182f6" : "white"} 
                        color={location.pathname === category.path ? "white" : "black"}
                    >
                        {category.label}
                    </Button>
                ))}
            </SectionCategory>
            <SectionFunction>
                <Input/>
                <Button onClick={() => navigate("/community/write")} backgroundcolor={"#17b75e"} color={"white"}>글쓰기</Button>
            </SectionFunction>
        </Header>
    );
}