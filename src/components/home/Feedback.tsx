import styled from "styled-components";

export default function Feedback(){
    const Wrapper = styled.div`
        width: 100%;
        height: 500px;
        display: grid;
        grid-template-columns: 20% 60% 20%;
        grid-template-areas:
            "m t m"
        ;
    `;

    const MomentSecion = styled.div`
        width: 100%;
        height: 100%;
        grid-area: "m";
    `;

    const TextSecion = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction : column;
        align-items: center;
        justify-content: center;
        row-gap: 30px;
        grid-area: "t";
        background-color: #f0f0f0;
    `;

    const Content = styled.h3`
        color: #333d4b;
    `;
    
    const Button = styled.button`
        width: 300px;
        height: 60px;
    `;

    return(
        <Wrapper>
            <MomentSecion/>
            <TextSecion>
                <h1>홈페이지는 계속 성장중</h1>
                <Content>여러분들의 소중한 조언을 항상 환영합니다.</Content>
                <Button/>
            </TextSecion>
            <MomentSecion/>
        </Wrapper>
    );
}