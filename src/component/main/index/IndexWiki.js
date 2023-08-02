// module import
import { useInView } from "react-intersection-observer"

// component import
import MovePageButton from "../../button/movePage/MovePageButton";

// config import
import { SRC_PICTURE_WIKI } from "../../../config/config";

// css import
import styles from "./IndexWiki.module.css";

export default function IndexWiki(props){
    const { ref: pictureRef, inView: pictureIsVisible } = useInView();
    const { ref: textRef, inView: textVisible } = useInView();

    return (
        <div className={styles.body}> 
            <section ref={textRef} className={`${styles.textSection} ${textVisible ? styles.textAnimation : ''}`}>
                <article className={styles.titleArticle}>
                    <h3 className={styles.titleText}>위키</h3>
                </article>
                <article className={styles.mainText}>
                    <h1>클릭하는 순간,</h1>
                    <h1>당신도 햄스터 박사</h1>
                </article>
                <article className={styles.subText}>
                    <p>다양한 종류의 햄스터를 알아가보세요.</p>
                </article>
                <nav>
                    <MovePageButton url={"/wiki"} text={"위키로 이동"}/>
                </nav>
            </section>
            <section ref={pictureRef} className={`${styles.indexPicture} ${pictureIsVisible ? styles.pictureAnimation : ''}`}>
                <img className={styles.mainPicture} src={SRC_PICTURE_WIKI} alt="PictureWiki"/>
            </section>
        </div>
    );
}