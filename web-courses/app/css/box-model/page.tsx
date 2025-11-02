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

export default function CSSBoxModel() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={cssLessons} courseType="css" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>نموذج الصندوق (Box Model)</h1>
            
            <section className={styles.section}>
              <h2>ما هو Box Model؟</h2>
              <p>
                كل عنصر HTML يمكن اعتباره صندوقاً. نموذج الصندوق في CSS يصف المساحة 
                التي يشغلها العنصر. يتكون من:
              </p>
              <ul>
                <li><strong>Content:</strong> المحتوى الفعلي (نص، صورة، إلخ)</li>
                <li><strong>Padding:</strong> المساحة حول المحتوى داخل الحدود</li>
                <li><strong>Border:</strong> الحدود حول الـ padding والمحتوى</li>
                <li><strong>Margin:</strong> المساحة خارج الحدود</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>الحشو (Padding)</h2>
              <p>
                الـ padding هو المساحة بين المحتوى والحدود:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: Padding"
                initialCode={`.demo-box {
  background-color: #04AA6D;
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

.demo-text {
  background-color: #f0f0f0;
  padding-top: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
  margin: 15px 0;
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>الحدود (Border)</h2>
              <p>
                الحدود تحيط بالـ padding والمحتوى:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: Borders"
                initialCode={`.demo-box {
  background-color: #f0f0f0;
  padding: 20px;
  border: 3px solid #04AA6D;
  border-radius: 10px;
}

.demo-text {
  background-color: white;
  padding: 15px;
  border: 2px dashed #ff6b6b;
  border-radius: 5px;
  margin: 15px 0;
}

.demo-button {
  background-color: white;
  color: #04AA6D;
  padding: 12px 30px;
  border: 3px solid #04AA6D;
  border-radius: 8px;
  font-weight: bold;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>الهامش (Margin)</h2>
              <p>
                الـ margin هو المساحة خارج الحدود، بين العنصر والعناصر الأخرى:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: Margins"
                initialCode={`.demo-box {
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  text-align: center;
}

.demo-text {
  background-color: #ffe66d;
  padding: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 5px;
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 12px 30px;
  margin: 15px auto;
  border: none;
  border-radius: 5px;
  display: block;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>العرض والارتفاع (Width & Height)</h2>
              <p>
                يمكنك تحديد عرض وارتفاع العناصر:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: Width & Height"
                initialCode={`.demo-box {
  width: 300px;
  height: 150px;
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 0 auto;
}

.demo-text {
  width: 80%;
  background-color: #f0f0f0;
  padding: 15px;
  margin: 15px auto;
  border-radius: 5px;
  text-align: center;
}

.demo-button {
  width: 200px;
  background-color: #282A35;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 10px auto;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>box-sizing</h2>
              <p>
                خاصية <code>box-sizing</code> تتحكم في كيفية حساب العرض والارتفاع:
              </p>
              <ul>
                <li><code>content-box</code> (افتراضي): العرض والارتفاع للمحتوى فقط</li>
                <li><code>border-box</code>: العرض والارتفاع يشمل padding و border</li>
              </ul>
              
              <CodeEditor
                language="css"
                title="مثال: box-sizing"
                initialCode={`.demo-box {
  box-sizing: border-box;
  width: 300px;
  background-color: #04AA6D;
  color: white;
  padding: 30px;
  border: 5px solid #059862;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
}

.demo-text {
  box-sizing: border-box;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin: 10px 0;
  border: 2px solid white;
  border-radius: 5px;
}

.demo-button {
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  color: #04AA6D;
  padding: 12px;
  border: 2px solid white;
  border-radius: 5px;
  font-weight: bold;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>الظلال (Box Shadow)</h2>
              <p>
                يمكنك إضافة ظلال للعناصر باستخدام <code>box-shadow</code>:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: Box Shadow"
                initialCode={`.demo-box {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 20px;
  color: #333;
}

.demo-text {
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  margin: 15px 0;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(4, 170, 109, 0.3);
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
}

.demo-button:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/css/fonts" className={styles.prevButton}>
                → الدرس السابق: الخطوط والنصوص
              </a>
              <a href="/css/flexbox" className={styles.nextButton}>
                الدرس التالي: Flexbox ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
