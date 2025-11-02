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

export default function HTMLLinksImages() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar lessons={htmlLessons} courseType="html" />
        <main className={styles.content}>
          <article className={styles.lesson}>
            <h1>الروابط والصور في HTML</h1>
            
            <section className={styles.section}>
              <h2>الروابط في HTML</h2>
              <p>
                الروابط موجودة في جميع صفحات الويب تقريباً. تسمح الروابط للمستخدمين 
                بالنقر من صفحة إلى أخرى. يتم تعريف روابط HTML بوسم <code>&lt;a&gt;</code>:
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: الروابط الأساسية"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>روابط HTML</h2>
    <a href="https://www.google.com">زيارة جوجل</a>
    <br><br>
    <a href="https://www.youtube.com" target="_blank">
        فتح يوتيوب في نافذة جديدة
    </a>
</body>
</html>`}
              />
              
              <p>
                السمة <code>href</code> تحدد عنوان الوجهة للرابط.
                السمة <code>target="_blank"</code> تفتح الرابط في نافذة جديدة.
              </p>
            </section>

            <section className={styles.section}>
              <h2>أنواع الروابط</h2>
              <ul>
                <li><strong>روابط خارجية:</strong> تشير إلى مواقع أخرى</li>
                <li><strong>روابط داخلية:</strong> تشير إلى صفحات في نفس الموقع</li>
                <li><strong>روابط البريد الإلكتروني:</strong> تفتح برنامج البريد</li>
                <li><strong>روابط الهاتف:</strong> تتيح الاتصال مباشرة</li>
              </ul>
              
              <CodeEditor
                language="html"
                title="مثال: أنواع مختلفة من الروابط"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>أنواع الروابط</h2>
    
    <p><a href="/about.html">صفحة من نفس الموقع</a></p>
    
    <p><a href="mailto:info@example.com">
        إرسال بريد إلكتروني
    </a></p>
    
    <p><a href="tel:+966501234567">
        الاتصال بنا
    </a></p>
    
    <p><a href="#section1">الانتقال إلى قسم في الصفحة</a></p>
</body>
</html>`}
              />
            </section>

            <section className={styles.section}>
              <h2>الصور في HTML</h2>
              <p>
                يتم تعريف الصور في HTML بوسم <code>&lt;img&gt;</code>. 
                وسم <code>&lt;img&gt;</code> فارغ، يحتوي على سمات فقط، وليس له وسم إغلاق.
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: إضافة الصور"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>صور HTML</h2>
    
    <img src="https://via.placeholder.com/300x200/04AA6D/ffffff?text=صورة+تجريبية" 
         alt="صورة تجريبية" 
         width="300" 
         height="200">
    
    <p>السمة alt توفر نصاً بديلاً للصورة</p>
</body>
</html>`}
              />
              
              <p>السمات المهمة لوسم الصورة:</p>
              <ul>
                <li><code>src</code> - مسار الصورة (مطلوب)</li>
                <li><code>alt</code> - نص بديل للصورة (مطلوب)</li>
                <li><code>width</code> - عرض الصورة</li>
                <li><code>height</code> - ارتفاع الصورة</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>صورة كرابط</h2>
              <p>
                يمكنك وضع صورة داخل رابط لجعلها قابلة للنقر:
              </p>
              
              <CodeEditor
                language="html"
                title="مثال: صورة كرابط"
                initialCode={`<!DOCTYPE html>
<html>
<body>
    <h2>صورة قابلة للنقر</h2>
    
    <a href="https://www.google.com" target="_blank">
        <img src="https://via.placeholder.com/200x100/04AA6D/ffffff?text=انقر+هنا" 
             alt="انقر للذهاب إلى جوجل"
             width="200"
             height="100">
    </a>
    
    <p>انقر على الصورة للانتقال إلى جوجل</p>
</body>
</html>`}
              />
            </section>

            <div className={styles.navigation}>
              <a href="/html/elements" className={styles.prevButton}>
                → الدرس السابق: العناصر والوسوم
              </a>
              <a href="/html/lists-tables" className={styles.nextButton}>
                الدرس التالي: القوائم والجداول ←
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
