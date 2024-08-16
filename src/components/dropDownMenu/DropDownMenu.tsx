import styled from "styled-components";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import { userNameProps } from "../../interfaces";

// pic: picture
// nm: name
// btn: button
const Wrapper = styled.ul`
    width: 280px;
    height: auto;
    display: grid;
    position: absolute;
    place-items: center;
    top: 80px;
    background-color: ${props => props.theme.color.white};
    border: 1px solid ${props => props.theme.color.gray300};
    border-radius: 5px;
    font-size: 14px;
    word-break: break-word;
    z-index: 1000;
    grid-template-areas:
        "pic"
        "nm"
        "btn";
`;

export default function DropDownMenu(props : userNameProps){
    return(
        <Wrapper>
            {props.userName ? <LoggedInMenu userName = {props.userName}/> : <LoggedOutMenu/>}
        </Wrapper>
    );
}