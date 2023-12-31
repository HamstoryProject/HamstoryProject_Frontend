// module import
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

// component import
import AccessibleWindow from "./AccessibleWindow";
import MembersOnlyWindow from "./MembersOnlyWindow";

// css import
import styles from "./DisplayInfo.module.css";

export default function DisplayInfo({setInfoFunc}){
    const [getToken, setGetToken] = useState(false);

    useEffect(()=>{
        if(!Cookie.get("jwt")){
            return;
        }
        else{
            setGetToken(true);
        }
    }, []);

    return (
        <div className={styles.body}>
            <div/>
            <div/>
            <div/>
            <div/>
            <article className={styles.articleBody}>
                    {getToken ? <MembersOnlyWindow setGetToken = {setGetToken}/> : <AccessibleWindow setInfoFunc={setInfoFunc}/>}
            </article>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
}