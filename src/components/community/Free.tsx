import styled from "styled-components";
import Contents from "./Contents";
import CommunityHeader from "../Header/CommunityHeader";
import axios from "axios";
import { API_URLS } from "../../config";
import { useEffect, useState } from "react";
import CommunityFooter from "./CommunityFooter";

const Body = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    background-color: white;
`;

const Wrapper = styled.div`
    width: 66.67%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.ul`
    width: 100%;
    height: auto;
    display:grid;
    row-gap: 20px;
`;

export default function Free(){
    const [boardList, setBoardList] = useState<any[]>([]);

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

    console.log(boardList)

    return(
        <Body>
            <Wrapper>
                <CommunityHeader/>
                <Main>
                    {boardList && boardList.map(board => (
                        <Contents 
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