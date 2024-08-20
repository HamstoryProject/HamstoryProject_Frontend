import styled from "styled-components";
import PostCard from "./PostCard";
import axios from "axios";
import { API_URLS, ROUTE_URLS } from "../../config";
import { useEffect, useState } from "react";
import CommunityFooter from "./CommunityFooter";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    background-color: ${props => props.theme.color.white};
`;

const Wrapper = styled.div`
    width: 66.67%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
`;

const Main = styled.ul`
    width: 100%;
    height: auto;
    display:grid;
    row-gap: 20px;
`;

const TextInput = styled.input`
    width: 70%;
    height: 50px;
    margin: 8px 0;
    border: 1px solid ${props => props.theme.color.gray200};
    border-radius: 15px;
    box-shadow: ${props => props.theme.shadow.inputShadow1};
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
`;

const SectionMainHeader = styled.section`
    display: flex;
    width: 100%;
    height: 35px;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    font-size: 18px;
`;

const Button = styled.button`
    width: 90px;
    height: 35px;
    border: 1px solid ${props => props.theme.color.gray300};
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.white};
    font-weight: 900;
`;

const Title = styled.h1`
    font-size: 34px;
`;

const Category = styled.h3`
    font-size: 18px;
`;

export default function FreeBoard(){
    const [boardList, setBoardList] = useState<any[]>([]);

    const categories = [
        { path: ROUTE_URLS.FREE, label: "자유" },
        { path: ROUTE_URLS.PICTURE, label: "사진" },
        { path: ROUTE_URLS.QUESTION, label: "정보" }
    ]

    const navigate = useNavigate();

    const getBoardList = async () => {
        try{
            const res = await axios.get(API_URLS.GET_BOARD);
            setBoardList(res.data);
        }
        catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        getBoardList();
    }, []);

    return(
        <Body>
            <Wrapper>
                <Title>자유게시판</Title>
                <Category>자유게시판 | Q&A | PICTURE</Category>
                <TextInput/>
                <Main>
                    <SectionMainHeader>
                        <Text>Showing: 1-10</Text>
                        <Button onClick={() => navigate(ROUTE_URLS.CREATE_POST)}>글쓰기</Button>
                    </SectionMainHeader>
                    {boardList && boardList.map(board => (
                        <PostCard 
                            key={board.id}
                            title={board.title}
                            writer={board.writer}
                            createdTime={board.createdTime}
                            likes={board.likes}
                        />
                    ))}
                </Main>
                <CommunityFooter/>
            </Wrapper>
        </Body>
    );
}