"use client";

import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './ContactBriefSection.module.css';

/** Instagram アカウントURL */
const INSTAGRAM_URL = 'https://www.instagram.com/kuronekotw_fes';

/** メールアドレス */
const EMAIL = 'kuronekotaiwan.matsuri@gmail.com';

/**
 * お問い合わせ簡易セクション
 * Instagram とメールへのリンクを中央揃えで表示する。
 */
export default function ContactBriefSection() {
  // フェードインアニメーション用フック
  const { ref, className: fadeClassName } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="contact">
      <div ref={ref} className={fadeClassName}>
        <SectionTitle title="最新情報・お問い合わせ" />

        {/* フォロー動機 */}
        <p className={styles.motive}>
          出演者発表・タイムテーブル・当日の雨天判断は
          <br />
          <strong>公式Instagramで随時お知らせ</strong>します。
          <br />
          フォローしてお見逃しなく。
        </p>

        {/* 連絡先リンク一覧 */}
        <div className={styles.links}>
          {/* Instagram リンク */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <span className={styles.icon} aria-hidden="true">
              {/* Instagram アイコン（SVGインライン） */}
              <svg
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
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </span>
            <span>@kuronekotw_fes</span>
          </a>

          {/* メールリンク */}
          <a
            href={`mailto:${EMAIL}`}
            className={styles.linkItem}
          >
            <span className={styles.icon} aria-hidden="true">
              {/* メールアイコン（SVGインライン） */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
            </span>
            <span>{EMAIL}</span>
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
