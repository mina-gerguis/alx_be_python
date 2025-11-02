import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CodeEditor from '@/components/CodeEditor';
import styles from '../lesson.module.css';

const cssLessons = [
  { id: '1', title: 'مقدمة إلى CSS', path: '/css' },
  { id: '2', title: 'الألوان والخلفيات', path: '/css/colors' },
  { id: '3', title: 'الخطوط والنصوص', path: '/css/fonts' },
  { id: '4', title: 'Box Model', path: '/css/box-model' },
  { id: '5', title: 'Flexbox', path: '/css/flexbox' },
];

export default function CSSFonts() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={cssLessons} courseType="css" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>الخطوط والنصوص في CSS</h1>
            
            <section className={styles.section}>
              <h2>عائلة الخط (font-family)</h2>
              <p>
                خاصية <code>font-family</code> تحدد نوع الخط للنص:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: عائلات الخطوط"
                initialCode={`.demo-box {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

.demo-text {
  font-family: 'Courier New', monospace;
  background-color: #04AA6D;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.demo-button {
  font-family: 'Georgia', serif;
  background-color: #282A35;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>حجم الخط (font-size)</h2>
              <p>
                خاصية <code>font-size</code> تحدد حجم النص. يمكن تحديدها بوحدات مختلفة:
              </p>
              <ul>
                <li><strong>px:</strong> بكسل (ثابت)</li>
                <li><strong>em:</strong> نسبة من حجم الخط الأب</li>
                <li><strong>rem:</strong> نسبة من حجم الخط الجذر</li>
                <li><strong>%:</strong> نسبة مئوية</li>
              </ul>
              
              <CodeEditor
                language="css"
                title="مثال: أحجام الخطوط"
                initialCode={`.demo-box {
  font-size: 24px;
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.demo-text {
  font-size: 18px;
  color: #333;
  padding: 15px;
  margin: 10px 0;
}

.demo-button {
  font-size: 16px;
  background-color: #282A35;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>وزن الخط (font-weight)</h2>
              <p>
                خاصية <code>font-weight</code> تحدد سمك الخط:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: أوزان الخطوط"
                initialCode={`.demo-box {
  font-weight: 300;
  font-size: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

.demo-text {
  font-weight: 700;
  font-size: 22px;
  color: #04AA6D;
  padding: 15px;
  margin: 10px 0;
}

.demo-button {
  font-weight: 900;
  font-size: 18px;
  background-color: #04AA6D;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>محاذاة النص (text-align)</h2>
              <p>
                خاصية <code>text-align</code> تحدد المحاذاة الأفقية للنص:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: محاذاة النص"
                initialCode={`.demo-box {
  text-align: center;
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 20px;
}

.demo-text {
  text-align: right;
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 10px auto;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>تزيين النص (text-decoration)</h2>
              <p>
                خاصية <code>text-decoration</code> تضيف خطوط للنص:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: تزيين النص"
                initialCode={`.demo-box {
  text-decoration: underline;
  text-decoration-color: #04AA6D;
  text-decoration-thickness: 3px;
  font-size: 24px;
  padding: 20px;
  text-align: center;
}

.demo-text {
  text-decoration: line-through;
  color: #999;
  padding: 15px;
  margin: 10px 0;
}

.demo-button {
  text-decoration: none;
  background-color: #04AA6D;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  display: inline-block;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>تحويل النص (text-transform)</h2>
              <p>
                خاصية <code>text-transform</code> تتحكم في حالة الأحرف:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: تحويل النص"
                initialCode={`.demo-box {
  text-transform: uppercase;
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
}

.demo-text {
  text-transform: capitalize;
  font-size: 18px;
  padding: 15px;
  margin: 10px 0;
}

.demo-button {
  text-transform: lowercase;
  background-color: #282A35;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>تباعد الأحرف والأسطر</h2>
              <p>
                يمكنك التحكم في المسافات بين الأحرف والأسطر:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: التباعد"
                initialCode={`.demo-box {
  letter-spacing: 3px;
  line-height: 2;
  background-color: #f0f0f0;
  padding: 25px;
  border-radius: 8px;
  font-size: 18px;
}

.demo-text {
  word-spacing: 10px;
  line-height: 1.8;
  padding: 15px;
  margin: 10px 0;
  background-color: #ffe66d;
}

.demo-button {
  letter-spacing: 1px;
  background-color: #04AA6D;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/css/colors" className={styles.prevButton}>
                → الدرس السابق: الألوان والخلفيات
              </a>
              <a href="/css/box-model" className={styles.nextButton}>
                الدرس التالي: Box Model ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
