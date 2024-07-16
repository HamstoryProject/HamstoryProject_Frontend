import styled from "styled-components"
import { ButtonProps } from "../../interfaces";

const StyledButton = styled.button`
    width: 24%;
    height: 45px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    background-color: #3182f6;
    font-weight: 900;
`;

export default function Button({ children, onClick } : ButtonProps){
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}