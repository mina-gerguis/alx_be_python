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

export default function HTMLListsTables() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={htmlLessons} courseType="html" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>القوائم والجداول في HTML</h1>
            
            <section className={styles.section}>
              <h2>القوائم غير المرتبة</h2>
              <p>
                القائمة غير المرتبة تبدأ بوسم <code>&lt;ul&gt;</code>. 
                كل عنصر في القائمة يبدأ بوسم <code>&lt;li&gt;</code>.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: قائمة غير مرتبة"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>قائمة التسوق</h2>
    <ul>
        <li>حليب</li>
        <li>خبز</li>
        <li>بيض</li>
        <li>جبن</li>
    </ul>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>القوائم المرتبة</h2>
              <p>
                القائمة المرتبة تبدأ بوسم <code>&lt;ol&gt;</code>. 
                عناصر القائمة ستكون مرقمة.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: قائمة مرتبة"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>خطوات تحضير الشاي</h2>
    <ol>
        <li>غلي الماء</li>
        <li>وضع كيس الشاي في الكوب</li>
        <li>صب الماء المغلي</li>
        <li>الانتظار 3 دقائق</li>
        <li>إزالة كيس الشاي</li>
    </ol>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>القوائم المتداخلة</h2>
              <p>
                يمكن أن تحتوي القوائم على قوائم أخرى بداخلها:
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: قوائم متداخلة"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>دورات البرمجة</h2>
    <ul>
        <li>تطوير الويب
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>تطوير التطبيقات
            <ul>
                <li>React Native</li>
                <li>Flutter</li>
            </ul>
        </li>
    </ul>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>الجداول في HTML</h2>
              <p>
                يتم تعريف جدول HTML بوسم <code>&lt;table&gt;</code>. 
                كل صف في الجدول يعرف بوسم <code>&lt;tr&gt;</code>، 
                وكل خلية بوسم <code>&lt;td&gt;</code>.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: جدول بسيط"
                initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: right; }
        th { background-color: #04AA6D; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>جدول الطلاب</h2>
    <table>
        <tr>
            <th>الاسم</th>
            <th>العمر</th>
            <th>المدينة</th>
        </tr>
        <tr>
            <td>أحمد</td>
            <td>25</td>
            <td>الرياض</td>
        </tr>
        <tr>
            <td>فاطمة</td>
            <td>23</td>
            <td>جدة</td>
        </tr>
        <tr>
            <td>محمد</td>
            <td>27</td>
            <td>الدمام</td>
        </tr>
    </table>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>عناصر الجدول</h2>
              <ul>
                <li><code>&lt;table&gt;</code> - يعرف الجدول</li>
                <li><code>&lt;tr&gt;</code> - يعرف صف الجدول</li>
                <li><code>&lt;th&gt;</code> - يعرف خلية رأس الجدول</li>
                <li><code>&lt;td&gt;</code> - يعرف خلية بيانات الجدول</li>
                <li><code>&lt;thead&gt;</code> - يجمع محتوى الرأس</li>
                <li><code>&lt;tbody&gt;</code> - يجمع محتوى الجسم</li>
                <li><code>&lt;tfoot&gt;</code> - يجمع محتوى التذييل</li>
              </ul>
            </section>

            <div className={styles.navigation}>
              <a href="/html/links-images" className={styles.prevButton}>
                → الدرس السابق: الروابط والصور
              </a>
              <a href="/html/forms" className={styles.nextButton}>
                الدرس التالي: النماذج ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
