/*
    설명: 
*/

// 모듈 import
import { useEffect, useState } from "react";
import AccessibleWindow from "./AccessibleWindow";
import MembersOnlyWindow from "./MembersOnlyWindow";

// CSS import
import styles from "./DisplayInfo.module.css";

export default function DisplayInfo({setInfoFunc}){
    const [getToken, setGetToken] = useState(false);

    useEffect(()=>{
        if(!localStorage.getItem("jwt")){
            return;
        }
        else{
            setGetToken(true);
            console.log(localStorage.getItem("jwt"));
        }
    }, []);

    return (
        <div className={styles.display}>
            {getToken ? <MembersOnlyWindow setGetToken = {setGetToken}/> : <AccessibleWindow setInfoFunc={setInfoFunc}/>}
        </div>
    );
}