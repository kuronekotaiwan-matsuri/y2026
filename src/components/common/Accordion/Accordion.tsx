'use client';

import { useState, type ReactNode } from 'react';
import styles from './Accordion.module.css';

/** アコーディオンの各項目の型定義 */
interface AccordionItem {
  /** 質問テキスト */
  question: string;
  /** 回答（テキストまたはJSX） */
  answer: ReactNode;
}

/** Accordion コンポーネントの props 定義 */
interface AccordionProps {
  /** アコーディオンの質問・回答リスト */
  items: AccordionItem[];
}

/**
 * 共通アコーディオンコンポーネント
 * - 各項目は独立して開閉できる（複数同時展開可能）
 * - スムーズなスライドアニメーション付き
 * - アクセシビリティ: button要素、aria-expanded、aria-controls を設定
 */
export default function Accordion({ items }: AccordionProps) {
  // 各項目の開閉状態を管理（indexのセットで保持）
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  // 指定indexの開閉をトグルする
  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div key={index} className={styles.item}>
            {/* 質問部分: クリックで開閉 */}
            <button
              id={buttonId}
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
            >
              {/* 展開アイコン: SVGシェブロン、開閉で90度回転 */}
              <span
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <span className={styles.question}>{item.question}</span>
            </button>

            {/* 回答部分: max-height アニメーションでスライド表示 */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
            >
              <div className={styles.answer}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
