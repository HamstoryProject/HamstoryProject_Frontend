import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

interface MoveToSignUpProps {
    isOpen : boolean;
    onClose : () => void;
}

export default function MoveToSignUp({ isOpen, onClose }: MoveToSignUpProps) {
    const customModalStyle = {
        content: {
            width: 200,
            justifyContent: "center",
            display: "grid",
            alignItems: "center",
            height: 120,
            zIndex: 1000,
            top: 100,
            padding: 10,
            rowGap: 10,
        },
    };

    const Bold = styled.b`
        font-size: 16px;
        font-weight: 700;
    `;

    const Text = styled.p`
        font-size: 13px;
    `;

    const Container = styled.div`
        display: grid;
        height: auto;
        row-gap: 5px;
        text-align: right;
    `;
    const Hr = styled.hr`
        color: #e5e5e5;
        overflow: hidden;
        height: 1px;
        margin: 1px;
    `;

    const Button = styled.button`
        height: 30px;  
    `;

    const wrapRef = useRef(null);

    useEffect(() => {
        console.log(wrapRef);
    }, []);
    

    return (
        <Modal style={customModalStyle} isOpen={isOpen} onRequestClose={onClose}>
            <Container>
                <Bold>닉네임</Bold>
                <Text>로그인 해주세요!</Text>
            </Container>
            <Hr/>
            <Container>
                <Button>로그인</Button>
            </Container>
        </Modal>
    );
}