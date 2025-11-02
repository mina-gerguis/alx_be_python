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

export default function CSSFlexbox() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={cssLessons} courseType="css" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>Flexbox في CSS</h1>
            
            <section className={styles.section}>
              <h2>ما هو Flexbox؟</h2>
              <p>
                Flexbox (Flexible Box Layout) هو نموذج تخطيط يوفر طريقة فعالة لترتيب 
                وتوزيع المساحة بين العناصر في حاوية، حتى عندما يكون حجمها غير معروف أو ديناميكي.
              </p>
              <p>
                لاستخدام Flexbox، قم بتعيين <code>display: flex</code> على العنصر الأب (الحاوية).
              </p>
            </section>

            <section className={styles.section}>
              <h2>البداية مع Flexbox</h2>
              <p>
                عند تعيين <code>display: flex</code>، تصبح العناصر الأبناء عناصر flex:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: Flexbox الأساسي"
                initialCode={`.demo-box {
  display: flex;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  gap: 15px;
}

.demo-text {
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 5px;
  flex: 1;
  text-align: center;
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>اتجاه Flex (flex-direction)</h2>
              <p>
                خاصية <code>flex-direction</code> تحدد اتجاه العناصر:
              </p>
              <ul>
                <li><code>row</code> - أفقي من اليسار لليمين (افتراضي)</li>
                <li><code>row-reverse</code> - أفقي من اليمين لليسار</li>
                <li><code>column</code> - عمودي من الأعلى للأسفل</li>
                <li><code>column-reverse</code> - عمودي من الأسفل للأعلى</li>
              </ul>
              
              <CodeEditor
                language="css"
                title="مثال: flex-direction"
                initialCode={`.demo-box {
  display: flex;
  flex-direction: column;
  background-color: #04AA6D;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
}

.demo-text {
  background-color: white;
  color: #333;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>المحاذاة الأفقية (justify-content)</h2>
              <p>
                خاصية <code>justify-content</code> تحاذي العناصر على المحور الرئيسي:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: justify-content"
                initialCode={`.demo-box {
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
}

.demo-text {
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 5px;
  min-width: 80px;
  text-align: center;
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
}`}
              />
              
              <p>القيم المتاحة:</p>
              <ul>
                <li><code>flex-start</code> - في البداية</li>
                <li><code>flex-end</code> - في النهاية</li>
                <li><code>center</code> - في المنتصف</li>
                <li><code>space-between</code> - مساحة متساوية بين العناصر</li>
                <li><code>space-around</code> - مساحة متساوية حول العناصر</li>
                <li><code>space-evenly</code> - مساحة متساوية تماماً</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>المحاذاة العمودية (align-items)</h2>
              <p>
                خاصية <code>align-items</code> تحاذي العناصر على المحور العرضي:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: align-items"
                initialCode={`.demo-box {
  display: flex;
  align-items: center;
  background-color: #04AA6D;
  padding: 30px;
  border-radius: 8px;
  gap: 15px;
  min-height: 150px;
}

.demo-text {
  background-color: white;
  color: #333;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}

.demo-button {
  background-color: #282A35;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>خاصية flex</h2>
              <p>
                خاصية <code>flex</code> تحدد كيف ينمو أو يتقلص العنصر:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: خاصية flex"
                initialCode={`.demo-box {
  display: flex;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
}

.demo-text {
  flex: 2;
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.demo-button {
  flex: 1;
  background-color: #282A35;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>مثال عملي: بطاقة</h2>
              <p>
                دعنا نستخدم Flexbox لإنشاء بطاقة جميلة:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: بطاقة باستخدام Flexbox"
                initialCode={`.demo-box {
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  margin: 0 auto;
}

.demo-text {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.demo-button {
  background-color: white;
  color: #667eea;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  align-self: center;
}

.demo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
}`}
              />
            </section>

            <section className={styles.section}>
              <h2>Flexbox للتخطيطات المتجاوبة</h2>
              <p>
                Flexbox مثالي لإنشاء تخطيطات متجاوبة:
              </p>
              
              <CodeEditor
                language="css"
                title="مثال: تخطيط متجاوب"
                initialCode={`.demo-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 30px;
  border-radius: 8px;
}

.demo-text {
  flex: 1 1 200px;
  background-color: #04AA6D;
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  min-width: 150px;
}

.demo-button {
  flex: 1 1 200px;
  background-color: #282A35;
  color: white;
  padding: 20px;
  border: none;
  border-radius: 10px;
  min-width: 150px;
}`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/css/box-model" className={styles.prevButton}>
                → الدرس السابق: Box Model
              </a>
              <a href="/" className={styles.nextButton}>
                العودة للصفحة الرئيسية ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
