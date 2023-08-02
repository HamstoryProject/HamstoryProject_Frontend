// css import
import styles from './CommentBox.module.css';

type propsType = {
    writer : string,
}

export default function CommentBox(props :propsType){
    return(
        <div className={styles.body}>
            <article className={styles.container}>
                <div className={styles.inputPlaceBody}>
                    <p className={styles.name}>{props.writer}</p>
                    <input></input>
                    <button></button>
                </div>
            </article>
        </div>
    );
}