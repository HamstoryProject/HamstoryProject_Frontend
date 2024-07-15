import styled from "styled-components";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

interface Props{
    userName : string | null;
}

const Body = styled.ul`
    width: 220px;
    height: auto;
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 100px;
    background-color: white;
    border: 1px solid gray;
    text-align: left;
    font-size: 14px;
    word-break: break-word;
`;

export default function DropDownMenu(props : Props){
    return(
        <Body>
            {props.userName ? <LoggedInMenu userName = {props.userName}/> : <LoggedOutMenu/>}
        </Body>
    );
}