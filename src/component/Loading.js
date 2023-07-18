// css import
import styles from './Loading.module.css';

export default function Loading(){
    return(
        <div className={styles.body}>
            <div className={styles.loading}/>
        </div>
    );
}