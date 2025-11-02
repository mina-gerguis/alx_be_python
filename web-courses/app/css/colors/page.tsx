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

export default function CSSColors() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={cssLessons} courseType="css" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>الألوان والخلفيات في CSS</h1>
            
            <section className={styles.section}>
              <h2>الألوان في CSS</h2>
              <p>
                يمكن تحديد الألوان في CSS بعدة طرق:
              </p>
              <ul>
                <li><strong>أسماء الألوان:</strong> red, blue, green</li>
                <li><strong>RGB:</strong> rgb(255, 0, 0)</li>
                <li><strong>HEX:</strong> #ff0000</li>
                <li><strong>HSL:</strong> hsl(0, 100%, 50%)</li>
                <li><strong>RGBA:</strong> rgba(255, 0, 0, 0.5) - مع الشفافية</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>خاصية اللون (color)</h2>
              <p>
                خاصية <code>color</code> تحدد لون النص:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: ألوان النص"
                initialCode={`.demo-box {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

.demo-text {
  color: #04AA6D;
  font-size: 20px;
  font-weight: bold;
}

.demo-button {
  background-color: #ff6b6b;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>خاصية لون الخلفية (background-color)</h2>
              <p>
                خاصية <code>background-color</code> تحدد لون خلفية العنصر:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: ألوان الخلفية"
                initialCode={`.demo-box {
  background-color: #04AA6D;
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.demo-text {
  background-color: #ffe66d;
  color: #333;
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
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>الشفافية (Opacity)</h2>
              <p>
                يمكنك التحكم في شفافية العناصر باستخدام <code>opacity</code> أو <code>rgba</code>:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: الشفافية"
                initialCode={`.demo-box {
  background-color: rgba(4, 170, 109, 0.3);
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #04AA6D;
}

.demo-text {
  background-color: rgba(255, 107, 107, 0.5);
  color: #333;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.demo-button {
  background-color: #04AA6D;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  opacity: 0.8;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>التدرجات (Gradients)</h2>
              <p>
                CSS تدعم التدرجات الخطية والدائرية:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: التدرجات"
                initialCode={`.demo-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  font-size: 24px;
}

.demo-text {
  background: linear-gradient(to right, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
}

.demo-button {
  background: linear-gradient(45deg, #04AA6D 0%, #059862 100%);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>صور الخلفية</h2>
              <p>
                يمكنك استخدام صور كخلفيات باستخدام <code>background-image</code>:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: خلفيات متقدمة"
                initialCode={`.demo-box {
  background: linear-gradient(rgba(4, 170, 109, 0.8), rgba(4, 170, 109, 0.8)),
              url('https://via.placeholder.com/800x400/cccccc/666666?text=Background');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 50px;
  border-radius: 15px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
}

.demo-text {
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
}

.demo-button {
  background-color: white;
  color: #04AA6D;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: bold;
}`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/css" className={styles.prevButton}>
                → الدرس السابق: مقدمة إلى CSS
              </a>
              <a href="/css/fonts" className={styles.nextButton}>
                الدرس التالي: الخطوط والنصوص ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
