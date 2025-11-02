import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CodeEditor from '@/components/CodeEditor';
import styles from './lesson.module.css';

const cssLessons = [
  { id: '1', title: 'مقدمة إلى CSS', path: '/css' },
  { id: '2', title: 'الألوان والخلفيات', path: '/css/colors' },
  { id: '3', title: 'الخطوط والنصوص', path: '/css/fonts' },
  { id: '4', title: 'Box Model', path: '/css/box-model' },
  { id: '5', title: 'Flexbox', path: '/css/flexbox' },
];

export default function CSSIntro() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={cssLessons} courseType="css" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>مقدمة إلى CSS</h1>
            
            <section className={styles.section}>
              <h2>ما هي CSS؟</h2>
              <p>
                CSS تعني <strong>Cascading Style Sheets</strong> (أوراق الأنماط المتتالية). 
                CSS تصف كيف يتم عرض عناصر HTML على الشاشة أو في وسائط أخرى.
              </p>
              <ul>
                <li>CSS توفر الكثير من العمل - يمكنها التحكم في تخطيط عدة صفحات ويب دفعة واحدة</li>
                <li>يتم تخزين أوراق الأنماط الخارجية في ملفات CSS</li>
                <li>CSS تفصل المحتوى عن التصميم</li>
                <li>تجعل صفحات الويب أكثر جاذبية وسهولة في الاستخدام</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>بناء جملة CSS</h2>
              <p>
                قاعدة CSS تتكون من محدد وكتلة إعلان:
              </p>
              <pre><code>{`selector {
  property: value;
  property: value;
}`}</code></pre>
              <ul>
                <li><strong>المحدد (Selector):</strong> يشير إلى عنصر HTML الذي تريد تنسيقه</li>
                <li><strong>الخاصية (Property):</strong> سمة تريد تغييرها</li>
                <li><strong>القيمة (Value):</strong> القيمة التي تريد تعيينها للخاصية</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>مثال بسيط على CSS</h2>
              <p>دعنا نرى كيف يمكن لـ CSS تغيير مظهر عناصر HTML:</p>
              
              <CodeEditor
                language="css"
                title="مثال: تنسيق بسيط"
                initialCode={`.demo-box {
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
}

.demo-text {
  color: #282A35;
  font-size: 18px;
  font-weight: bold;
}

.demo-button {
  background-color: #04AA6D;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>طرق إضافة CSS</h2>
              <p>هناك ثلاث طرق لإدراج ورقة أنماط:</p>
              
              <h3>1. CSS خارجية (External)</h3>
              <pre><code>{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}</code></pre>
              
              <h3>2. CSS داخلية (Internal)</h3>
              <pre><code>{`<head>
  <style>
    body { background-color: lightblue; }
  </style>
</head>`}</code></pre>
              
              <h3>3. CSS مضمنة (Inline)</h3>
              <pre><code>{`<p style="color: red;">نص أحمر</p>`}</code></pre>
            </section>

            <section className={styles.section}>
              <h2>المحددات الأساسية</h2>
              <p>CSS توفر عدة أنواع من المحددات:</p>
              
              <CodeEditor
                language="css"
                title="مثال: أنواع المحددات"
                initialCode={`/* محدد العنصر */
.demo-box {
  background-color: #f0f0f0;
  padding: 15px;
}

/* محدد الفئة */
.demo-text {
  color: #04AA6D;
  font-weight: bold;
}

/* محدد المعرف */
.demo-button {
  background-color: #282A35;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}`}
              />
              
              <ul>
                <li><strong>محدد العنصر:</strong> <code>p { }</code> - يحدد جميع عناصر &lt;p&gt;</li>
                <li><strong>محدد الفئة:</strong> <code>.classname { }</code> - يحدد العناصر بفئة معينة</li>
                <li><strong>محدد المعرف:</strong> <code>#idname { }</code> - يحدد عنصر بمعرف معين</li>
                <li><strong>المحدد الشامل:</strong> <code>* { }</code> - يحدد جميع العناصر</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>جرب بنفسك!</h2>
              <p>قم بتعديل الأنماط أدناه وشاهد التغييرات:</p>
              
              <CodeEditor
                language="css"
                title="محرر تفاعلي"
                initialCode={`.demo-box {
  background-color: #04AA6D;
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  font-size: 24px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.demo-text {
  color: #282A35;
  font-size: 20px;
  margin: 20px 0;
}

.demo-button {
  background-color: #ff6b6b;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.demo-button:hover {
  background-color: #ff5252;
  transform: scale(1.05);
}`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/css/colors" className={styles.nextButton}>
                الدرس التالي: الألوان والخلفيات ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
