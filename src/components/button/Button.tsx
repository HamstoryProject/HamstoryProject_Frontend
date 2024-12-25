import styled from "styled-components"
import { ButtonProps } from "../../types/button";

const StyledButton = styled.button`
    width: 24%;
    height: 45px;
    border: none;
    border-radius: 10px;
    color: ${props => props.theme.color.white};
    font-size: 15px;
    background-color: ${props => props.theme.color.blue};
    font-weight: 900;
`;

export default function Button({ children, onClick } : ButtonProps){
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}