// module import
import { Link } from 'react-router-dom';

// css import
import styles from './TextNav.module.css';

export default function TextNav() {
    const menuItems = [
        { name: '햄스토리', path: '/hamstory' },
        { name: '커뮤니티', path: '/community' },
        { name: '위키', path: '/wiki' },
        { name: '도움말', path: '/help' },
    ];

  return (
    <nav className={styles.body}>
      {menuItems.map((item, index) => (
        item.path ? (
          <Link key={index} to={item.path} className={styles.link}>
            <div className={styles.container}>
              <p className={styles.title}>{item.name}</p>
            </div>
          </Link>
        ) : (
          <div key={index} className={styles.container}>
            <p className={styles.title}>{item.name}</p>
          </div>
        )
      ))}
    </nav>
  );
}