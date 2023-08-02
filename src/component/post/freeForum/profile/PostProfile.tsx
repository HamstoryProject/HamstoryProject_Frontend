// css import
import styles from './PostProfile.module.css';

type propsType = {
    writer :string,
    createdTime :string
    hits :string
}

export default function PostProfile(props :propsType){
    return(
        <div className={styles.body}>
            <section className={styles.sectionProfilePicture}>
                <div className={styles.picture}/>
            </section>
            <section className={styles.sectionContents}>
                <p className={styles.writer}>{props.writer}</p>
                <article className={styles.articleGrid}>
                    <time className={styles.createdTime}>{props.createdTime}</time>
                    <p className={styles.hits}>조회 {props.hits}</p>
                </article>
            </section>
        </div>
    );
}