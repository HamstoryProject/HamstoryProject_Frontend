// module import
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// component import
import MovePageButton from "../../button/movePage/MovePageButton";

// css import
import styles from "./SendToFeedback.module.css";

export default function SendToFeedback(){
    const { ref: blockRef, inView: blockIsVisible } = useInView();

    const [width, setWidth] = useState(0);

    const [position, setPosition] = useState(0); // 스크롤 위치를 저장할 state
    const [blockPosition, setBlockPosition] = useState(0); // 블럭 포지션을 저장할 변수
    const [blockSetting, setBlockSetting] = useState(true); // 블럭 포지션을 저장했는지 확인하는 변수

    const styleWidth ={
        width: width+'%'
    };

    const onScroll = () => {
        setPosition(window.scrollY);
    };

    // 스크롤 이벤트 등록
    useEffect(() => {
        if(blockIsVisible){
            window.addEventListener("scroll", onScroll);
            if(blockSetting ? setBlockPosition(window.scrollY) : null)
            setBlockSetting(false)
            return ()=>{
                window.removeEventListener("scroll", onScroll);
            }
        }
    }, [blockIsVisible, blockSetting]);

    useEffect(() => {
        setWidth((position - blockPosition) / 4)
    }, [position, blockPosition])
    
    return (
        <article className={styles.body}>
            <div/>
            <div ref={blockRef} className={styles.gridContainer}>
                <div className={styles.scrollBodyLeft}><div className={styles.scrollAnimation} style={styleWidth}/></div>
                <div className={styles.textContainer}>
                    <h1 className={styles.mainText}>홈페이지는 계속 성장중</h1>
                    <p className={styles.subText}>여러분들의 소중한 의견을 항상 환영합니다.</p>
                    <nav>
                        <MovePageButton url={"/feedback"} text={"피드백 보내기"}/>
                    </nav>
                </div>
                <div className={styles.scrollBodyRight}><div className={styles.scrollAnimation} style={styleWidth}/></div>
            </div>
            <div/>
        </article>
    );
}