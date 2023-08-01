// module import
import CommentBox from '../analytics/CommentBox';

// css import
import styles from './Comment.module.css';

type propsType = {
    writer : string,
}

export default function Comment(props :propsType){
    return(
        <div className={styles.body}>
            <section><p>댓글 0</p></section>
            <CommentBox writer={props.writer}/>
        </div>
    );
}