'use client';

import { useState } from 'react';
import styles from './CodeEditor.module.css';

interface CodeEditorProps {
  initialCode: string;
  language: 'html' | 'css';
  title?: string;
}

export default function CodeEditor({ initialCode, language, title }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [showPreview, setShowPreview] = useState(true);

  const getPreviewContent = () => {
    if (language === 'html') {
      return code;
    } else {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            ${code}
          </style>
        </head>
        <body>
          <div class="demo-box">عنصر تجريبي</div>
          <p class="demo-text">نص تجريبي للتطبيق</p>
          <button class="demo-button">زر تجريبي</button>
        </body>
        </html>
      `;
    }
  };

  return (
    <div className={styles.editorContainer}>
      {title && <h3 className={styles.editorTitle}>{title}</h3>}
      <div className={styles.editorTabs}>
        <button
          className={`${styles.tab} ${!showPreview ? styles.activeTab : ''}`}
          onClick={() => setShowPreview(false)}
        >
          الكود
        </button>
        <button
          className={`${styles.tab} ${showPreview ? styles.activeTab : ''}`}
          onClick={() => setShowPreview(true)}
        >
          النتيجة
        </button>
      </div>
      
      {!showPreview ? (
        <div className={styles.codeSection}>
          <textarea
            className={styles.codeInput}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
          />
        </div>
      ) : (
        <div className={styles.previewSection}>
          <iframe
            className={styles.preview}
            srcDoc={getPreviewContent()}
            title="preview"
            sandbox="allow-scripts"
          />
        </div>
      )}
      
      <div className={styles.editorActions}>
        <button
          className={styles.resetButton}
          onClick={() => setCode(initialCode)}
        >
          إعادة تعيين
        </button>
      </div>
    </div>
  );
}
