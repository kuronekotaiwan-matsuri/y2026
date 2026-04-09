'use client';

import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './ContactInfoSection.module.css';

/**
 * 連絡先情報セクションコンポーネント
 * Instagram・メール・住所の3つの連絡先をアイコン付きで表示する
 */
export default function ContactInfoSection() {
  // フェードインアニメーション用フック
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="contact-info" alt>
      {/* セクションタイトル */}
      <SectionTitle title="お問い合わせ" />

      {/* 連絡先リスト */}
      <div ref={fadeIn.ref} className={fadeIn.className}>
        <ul className={styles.contactList}>
          {/* Instagram */}
          <li className={styles.contactItem}>
            <span className={styles.icon} aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </span>
            <div className={styles.contactContent}>
              <span className={styles.contactLabel}>Instagram</span>
              <a
                href="https://www.instagram.com/kuronekotw_fes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @kuronekotw_fes
              </a>
            </div>
          </li>

          {/* メール */}
          <li className={styles.contactItem}>
            <span className={styles.icon} aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <div className={styles.contactContent}>
              <span className={styles.contactLabel}>メール</span>
              <a
                href="mailto:kuronekotaiwan.matsuri@gmail.com"
                className={styles.contactLink}
              >
                kuronekotaiwan.matsuri@gmail.com
              </a>
            </div>
          </li>

          {/* 住所 */}
          <li className={styles.contactItem}>
            <span className={styles.icon} aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div className={styles.contactContent}>
              <span className={styles.contactLabel}>住所</span>
              <span className={styles.contactText}>
                神奈川県川崎市高津区二子2丁目8-8 ウッディモアル 駄菓子の木村屋
              </span>
            </div>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
}
