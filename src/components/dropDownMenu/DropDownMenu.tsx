import styled from "styled-components";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import { userNameProps } from "../../interfaces";

const Wrapper = styled.ul`
    width: 220px;
    height: auto;
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 80px;
    background-color: white;
    border: 1px solid gray;
    text-align: left;
    font-size: 14px;
    word-break: break-word;
`;

export default function DropDownMenu(props : userNameProps){
    return(
        <Wrapper>
            {props.userName ? <LoggedInMenu userName = {props.userName}/> : <LoggedOutMenu/>}
        </Wrapper>
    );
}