"use client";

import Link from 'next/link';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './FaqTeaserSection.module.css';

/** トップに表示するFAQの代表項目（リンク先で詳細を読める） */
const TEASER_QUESTIONS = [
  '雨天の場合はどうなりますか？',
  '駐車場・駐輪場はありますか？',
  '子ども連れでも楽しめますか？',
  'ワークショップの予約方法は？',
  'ボランティアは募集していますか？',
] as const;

/**
 * FAQ誘導ブロック
 * トップページから/contact-usのFAQへ誘導し、来場前の障壁を先回り処理する。
 */
export default function FaqTeaserSection() {
  const { ref, className: fadeClassName } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="faq-teaser">
      <div ref={ref} className={fadeClassName}>
        <SectionTitle title="よくある質問" />

        <ul className={styles.list}>
          {TEASER_QUESTIONS.map((q) => (
            <li key={q} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                ❓
              </span>
              {q}
            </li>
          ))}
        </ul>

        <p className={styles.linkWrap}>
          <Link href="/contact-us" className={styles.link}>
            すべての質問を見る →
          </Link>
        </p>
      </div>
    </SectionContainer>
  );
}
