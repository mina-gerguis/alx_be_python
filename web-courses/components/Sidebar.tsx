'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

interface SidebarProps {
  lessons: {
    id: string;
    title: string;
    path: string;
  }[];
  courseType: 'html' | 'css';
}

export default function Sidebar({ lessons, courseType }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>{courseType === 'html' ? 'دروس HTML' : 'دروس CSS'}</h2>
      </div>
      <nav className={styles.sidebarNav}>
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={lesson.path}
            className={`${styles.sidebarLink} ${
              pathname === lesson.path ? styles.active : ''
            }`}
          >
            {lesson.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
