// hook import
import useScrollTop from "../../hooks/useScrollTop";

// component import
import Header from "../header/Header";
import MainTitle from "./MainTitle";
import IndexCommunity from "./IndexCommunity";
import IndexWiki from "./IndexWiki";
import SendToFeedback from "./SendToFeedback";
import Footer from "../footer/Footer";

// css import
import styles from "./Main.module.css";

export default function Main(){
    useScrollTop(); // 스크롤을 최상단으로 이동

    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <Header/>
                <section className={styles.mainTitle}>
                    <MainTitle/>
                </section>
            </header>
            <main className={styles.main}>
                <section className={styles.mainSection}><IndexCommunity isVisible={false}/></section>
                <section className={styles.mainSection}><IndexWiki isVisible={false}/></section>
                <aside className={styles.mainAside}><SendToFeedback/></aside>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    );
}