import styled from "styled-components";

const Body = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Spinner = styled.div`
    border: 12px solid #f3f3f3;
    border-top: 12px solid #3498db;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default function LoadingScreen(){
    return(
        <Body>
            <Container><Spinner/></Container>
        </Body>
    );
}