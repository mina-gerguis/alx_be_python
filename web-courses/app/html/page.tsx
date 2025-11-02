import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CodeEditor from '@/components/CodeEditor';
import styles from './lesson.module.css';

const htmlLessons = [
  { id: '1', title: 'مقدمة إلى HTML', path: '/html' },
  { id: '2', title: 'العناصر والوسوم', path: '/html/elements' },
  { id: '3', title: 'الروابط والصور', path: '/html/links-images' },
  { id: '4', title: 'القوائم والجداول', path: '/html/lists-tables' },
  { id: '5', title: 'النماذج', path: '/html/forms' },
];

export default function HTMLIntro() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={htmlLessons} courseType="html" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>مقدمة إلى HTML</h1>
            
            <section className={styles.section}>
              <h2>ما هي HTML؟</h2>
              <p>
                HTML تعني <strong>HyperText Markup Language</strong> (لغة ترميز النص التشعبي). 
                وهي اللغة القياسية لإنشاء صفحات الويب. HTML ليست لغة برمجة، بل هي لغة ترميز 
                تستخدم لوصف بنية صفحة الويب.
              </p>
              <ul>
                <li>HTML تصف بنية صفحة الويب</li>
                <li>تتكون HTML من سلسلة من العناصر</li>
                <li>عناصر HTML تخبر المتصفح كيف يعرض المحتوى</li>
                <li>عناصر HTML تصف أجزاء من المحتوى مثل "هذا عنوان"، "هذه فقرة"، "هذا رابط"</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>مثال بسيط على HTML</h2>
              <p>دعنا نلقي نظرة على مثال بسيط لصفحة HTML:</p>
              
              <CodeEditor
                language="html"
                title="مثال: صفحة HTML بسيطة"
                initialCode={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>صفحتي الأولى</title>
</head>
<body>
    <h1>مرحباً بك في HTML!</h1>
    <p>هذه أول صفحة ويب لي.</p>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>شرح المثال</h2>
              <ul>
                <li><code>&lt;!DOCTYPE html&gt;</code> - يعرّف هذا المستند على أنه HTML5</li>
                <li><code>&lt;html&gt;</code> - العنصر الجذر لصفحة HTML</li>
                <li><code>&lt;head&gt;</code> - يحتوي على معلومات وصفية عن المستند</li>
                <li><code>&lt;title&gt;</code> - يحدد عنوان المستند</li>
                <li><code>&lt;body&gt;</code> - يحتوي على محتوى الصفحة المرئي</li>
                <li><code>&lt;h1&gt;</code> - يعرّف عنواناً كبيراً</li>
                <li><code>&lt;p&gt;</code> - يعرّف فقرة</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>ما هو عنصر HTML؟</h2>
              <p>
                عنصر HTML يتكون من وسم البداية، المحتوى، ووسم النهاية:
              </p>
              <pre><code>&lt;tagname&gt;المحتوى هنا...&lt;/tagname&gt;</code></pre>
              <p>
                عنصر HTML هو كل شيء من وسم البداية إلى وسم النهاية.
              </p>
            </section>

            <section className={styles.section}>
              <h2>جرب بنفسك!</h2>
              <p>قم بتعديل الكود أدناه وشاهد النتيجة:</p>
              
              <CodeEditor
                language="html"
                title="محرر تفاعلي"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h1>عنوان رئيسي</h1>
    <h2>عنوان فرعي</h2>
    <p>هذه فقرة نصية.</p>
    <p>يمكنك تعديل هذا النص!</p>
</body>
</html>`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/html/elements" className={styles.nextButton}>
                الدرس التالي: العناصر والوسوم ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
