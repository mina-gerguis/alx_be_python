import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>{'</>'}</span>
          <span className={styles.logoText}>أكاديمية البرمجة</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/html" className={styles.navLink}>دروس HTML</Link>
          <Link href="/css" className={styles.navLink}>دروس CSS</Link>
          <Link href="/" className={styles.navLink}>الرئيسية</Link>
        </nav>
      </div>
    </header>
  );
}
