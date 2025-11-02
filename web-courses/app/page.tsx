import Link from 'next/link';
import Header from '@/components/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>تعلم تطوير الويب من الصفر</h1>
          <p className={styles.heroSubtitle}>
            ابدأ رحلتك في عالم البرمجة مع دروس تفاعلية وشروحات مفصلة
          </p>
        </section>

        <section className={styles.courses}>
          <div className={styles.courseCard}>
            <div className={styles.courseIcon}>HTML</div>
            <h2 className={styles.courseTitle}>دورة HTML</h2>
            <p className={styles.courseDescription}>
              تعلم لغة HTML من الأساسيات إلى المستوى المتقدم. HTML هي لغة الترميز الأساسية لبناء صفحات الويب.
            </p>
            <ul className={styles.courseFeatures}>
              <li>أساسيات HTML والعناصر</li>
              <li>النماذج والجداول</li>
              <li>HTML5 الحديثة</li>
              <li>أمثلة تفاعلية</li>
            </ul>
            <Link href="/html" className={styles.courseButton}>
              ابدأ التعلم
            </Link>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseIcon}>CSS</div>
            <h2 className={styles.courseTitle}>دورة CSS</h2>
            <p className={styles.courseDescription}>
              تعلم تنسيق وتصميم صفحات الويب باستخدام CSS. اجعل مواقعك جميلة وجذابة.
            </p>
            <ul className={styles.courseFeatures}>
              <li>أساسيات CSS والألوان</li>
              <li>التخطيط والتموضع</li>
              <li>Flexbox و Grid</li>
              <li>الرسوم المتحركة</li>
            </ul>
            <Link href="/css" className={styles.courseButton}>
              ابدأ التعلم
            </Link>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>لماذا تختار أكاديميتنا؟</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📚</div>
              <h3>محتوى شامل</h3>
              <p>دروس مفصلة تغطي جميع الجوانب من الأساسيات إلى المستوى المتقدم</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>💻</div>
              <h3>أمثلة تفاعلية</h3>
              <p>جرب الأكواد مباشرة في المتصفح وشاهد النتائج فوراً</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>سهل الفهم</h3>
              <p>شروحات واضحة ومبسطة مناسبة للمبتدئين</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>تعلم سريع</h3>
              <p>ابدأ من الصفر وصل إلى الاحتراف في وقت قصير</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 أكاديمية البرمجة - جميع الحقوق محفوظة</p>
      </footer>
    </>
  );
}
