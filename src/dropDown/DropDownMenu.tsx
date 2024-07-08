import { Link } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const TextAlert = styled.li`
    padding: 5px;
    font-size: 13px;
`

const ButtonLi = styled.li`
`
const Button = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
    border: white;
    &:hover {
        background-color: #f0f0f0;
    }
    color:black;
`;

function PleaseLogin(){
    return(
        <Wrapper>
            <TextAlert>로그인 해주세요!</TextAlert>
            <ButtonLi><Button as={Link} to={"/login"}>로그인</Button></ButtonLi>
        </Wrapper>
    );
}

const Li = styled.li`
    width: 200px;
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 100px;
    background-color: white;
    border: 1px solid gray;
    
`;

const TextName = styled.li`
    font-size: 16px;
`

export default function DropDownMenu(props : any){
    return(
        <Li>
            <TextName>{props ? null : props.userdata.memberName}</TextName>
            {props ? <PleaseLogin/> : null}
        </Li>
    );
}