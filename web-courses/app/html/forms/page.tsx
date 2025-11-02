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

export default function HTMLForms() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={htmlLessons} courseType="html" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>النماذج في HTML</h1>
            
            <section className={styles.section}>
              <h2>ما هي النماذج؟</h2>
              <p>
                نموذج HTML يستخدم لجمع مدخلات المستخدم. يتم تعريف النموذج بوسم <code>&lt;form&gt;</code>.
                يمكن أن يحتوي النموذج على عناصر إدخال مختلفة مثل حقول النص، مربعات الاختيار، أزرار الراديو، أزرار الإرسال، وغيرها.
              </p>
            </section>

            <section className={styles.section}>
              <h2>عنصر الإدخال</h2>
              <p>
                عنصر <code>&lt;input&gt;</code> هو أهم عنصر في النموذج. 
                يمكن عرضه بعدة طرق حسب سمة <code>type</code>.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: أنواع مختلفة من الإدخال"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>أنواع حقول الإدخال</h2>
    <form>
        <label>النص:</label><br>
        <input type="text" placeholder="أدخل اسمك"><br><br>
        
        <label>البريد الإلكتروني:</label><br>
        <input type="email" placeholder="email@example.com"><br><br>
        
        <label>كلمة المرور:</label><br>
        <input type="password" placeholder="كلمة المرور"><br><br>
        
        <label>الرقم:</label><br>
        <input type="number" min="1" max="100"><br><br>
        
        <label>التاريخ:</label><br>
        <input type="date"><br><br>
    </form>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>مربعات الاختيار وأزرار الراديو</h2>
              <p>
                مربعات الاختيار تسمح للمستخدم باختيار خيار واحد أو أكثر.
                أزرار الراديو تسمح للمستخدم باختيار خيار واحد فقط.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: مربعات الاختيار وأزرار الراديو"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>الاختيارات</h2>
    <form>
        <h3>اختر لغات البرمجة المفضلة:</h3>
        <input type="checkbox" id="html" name="html">
        <label for="html">HTML</label><br>
        
        <input type="checkbox" id="css" name="css">
        <label for="css">CSS</label><br>
        
        <input type="checkbox" id="js" name="js">
        <label for="js">JavaScript</label><br><br>
        
        <h3>اختر مستواك:</h3>
        <input type="radio" id="beginner" name="level">
        <label for="beginner">مبتدئ</label><br>
        
        <input type="radio" id="intermediate" name="level">
        <label for="intermediate">متوسط</label><br>
        
        <input type="radio" id="advanced" name="level">
        <label for="advanced">متقدم</label>
    </form>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>القوائم المنسدلة ومناطق النص</h2>
              <p>
                القوائم المنسدلة تستخدم عنصر <code>&lt;select&gt;</code>، 
                ومناطق النص تستخدم عنصر <code>&lt;textarea&gt;</code>.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: قوائم منسدلة ومناطق نص"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>عناصر النموذج المتقدمة</h2>
    <form>
        <label for="city">اختر مدينتك:</label><br>
        <select id="city" name="city">
            <option value="">-- اختر مدينة --</option>
            <option value="riyadh">الرياض</option>
            <option value="jeddah">جدة</option>
            <option value="dammam">الدمام</option>
            <option value="makkah">مكة</option>
        </select><br><br>
        
        <label for="message">رسالتك:</label><br>
        <textarea id="message" name="message" 
                  rows="5" cols="40"
                  placeholder="اكتب رسالتك هنا..."></textarea>
    </form>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>نموذج كامل</h2>
              <p>
                دعنا نجمع كل ما تعلمناه في نموذج تسجيل كامل:
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: نموذج تسجيل كامل"
                initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        form { max-width: 500px; padding: 20px; }
        label { display: block; margin-top: 10px; font-weight: bold; }
        input, select, textarea { 
            width: 100%; padding: 8px; margin-top: 5px; 
            border: 1px solid #ddd; border-radius: 4px;
        }
        button { 
            background-color: #04AA6D; color: white; 
            padding: 12px 30px; border: none; 
            border-radius: 4px; margin-top: 20px; 
            cursor: pointer; font-size: 16px;
        }
        button:hover { background-color: #059862; }
    </style>
</head>
<body>
    <h2>نموذج التسجيل</h2>
    <form>
        <label for="name">الاسم الكامل:</label>
        <input type="text" id="name" required>
        
        <label for="email">البريد الإلكتروني:</label>
        <input type="email" id="email" required>
        
        <label for="password">كلمة المرور:</label>
        <input type="password" id="password" required>
        
        <label for="country">الدولة:</label>
        <select id="country">
            <option>السعودية</option>
            <option>الإمارات</option>
            <option>مصر</option>
        </select>
        
        <label for="bio">نبذة عنك:</label>
        <textarea id="bio" rows="4"></textarea>
        
        <button type="submit">تسجيل</button>
    </form>
</body>
</html>`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/html/lists-tables" className={styles.prevButton}>
                → الدرس السابق: القوائم والجداول
              </a>
              <a href="/css" className={styles.nextButton}>
                انتقل إلى دروس CSS ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
