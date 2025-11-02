import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CodeEditor from '@/components/CodeEditor';
import styles from '../lesson.module.css';

const htmlLessons = [
  { id: '1', title: 'مقدمة إلى HTML', path: '/html' },
  { id: '2', title: 'العناصر والوسوم', path: '/html/elements' },
  { id: '3', title: 'الروابط والصور', path: '/html/links-images' },
  { id: '4', title: 'القوائم والجداول', path: '/html/lists-tables' },
  { id: '5', title: 'النماذج', path: '/html/forms' },
];

export default function HTMLElements() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={htmlLessons} courseType="html" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>العناصر والوسوم في HTML</h1>
            
            <section className={styles.section}>
              <h2>عناصر HTML</h2>
              <p>
                عنصر HTML يتكون عادة من وسم بداية ووسم نهاية، مع المحتوى بينهما:
              </p>
              <pre><code>&lt;tagname&gt;المحتوى&lt;/tagname&gt;</code></pre>
              <p>
                عنصر HTML هو كل شيء من وسم البداية إلى وسم النهاية.
              </p>
            </section>

            <section className={styles.section}>
              <h2>العناصر المتداخلة</h2>
              <p>
                يمكن أن تكون عناصر HTML متداخلة (يمكن أن تحتوي العناصر على عناصر أخرى).
                جميع مستندات HTML تتكون من عناصر HTML متداخلة.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: العناصر المتداخلة"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <div>
        <h1>عنوان داخل div</h1>
        <p>فقرة داخل <strong>div</strong> أيضاً</p>
    </div>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>العناصر الفارغة</h2>
              <p>
                بعض عناصر HTML ليس لها محتوى (مثل عنصر <code>&lt;br&gt;</code>). 
                تسمى هذه العناصر بالعناصر الفارغة. العناصر الفارغة ليس لها وسم نهاية!
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: العناصر الفارغة"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <p>هذه فقرة<br>مع فاصل سطر</p>
    <hr>
    <p>خط أفقي في الأعلى</p>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>عناصر العناوين</h2>
              <p>
                HTML يوفر 6 مستويات من العناوين من <code>&lt;h1&gt;</code> إلى <code>&lt;h6&gt;</code>:
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: العناوين"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h1>عنوان من المستوى 1</h1>
    <h2>عنوان من المستوى 2</h2>
    <h3>عنوان من المستوى 3</h3>
    <h4>عنوان من المستوى 4</h4>
    <h5>عنوان من المستوى 5</h5>
    <h6>عنوان من المستوى 6</h6>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>عناصر تنسيق النص</h2>
              <p>
                HTML توفر عناصر خاصة لتعريف النص بمعنى خاص:
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: تنسيق النص"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <p><b>نص عريض</b></p>
    <p><strong>نص مهم</strong></p>
    <p><i>نص مائل</i></p>
    <p><em>نص مؤكد</em></p>
    <p><mark>نص مميز</mark></p>
    <p><small>نص صغير</small></p>
    <p><del>نص محذوف</del></p>
    <p><ins>نص مدرج</ins></p>
    <p><sub>نص منخفض</sub></p>
    <p><sup>نص مرتفع</sup></p>
</body>
</html>`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/html" className={styles.prevButton}>
                → الدرس السابق: مقدمة إلى HTML
              </a>
              <a href="/html/links-images" className={styles.nextButton}>
                الدرس التالي: الروابط والصور ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
