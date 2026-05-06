import type { ReactNode } from 'react';

/** FAQの各項目の型定義 */
export interface FaqItem {
  /** 質問テキスト */
  question: string;
  /** 回答（テキストまたはJSX） */
  answer: ReactNode;
}

/** よくある質問データ */
export const faqItems: FaqItem[] = [
  {
    question: '子ども連れでも楽しめますか？',
    answer:
      'はい！お子さまも楽しめるワークショップや台湾スイーツなど、ご家族でお楽しみいただけます。',
  },
  {
    question: '雨天の場合はどうなりますか？',
    answer:
      '小雨決行です。荒天の場合は公式Instagramでお知らせいたします。',
  },
  {
    question: '駐車場・駐輪場はありますか？',
    answer:
      '専用の駐車場・駐輪場はございません。公共交通機関をご利用ください。',
  },
  {
    question: '飲食物の持ち込みはできますか？',
    answer:
      '持ち込みも可能ですが、せっかくの機会ですのでぜひ会場の出店者の料理やドリンクをお楽しみいただけると嬉しいです。',
  },
  {
    question: 'ペットを連れて行けますか？',
    answer:
      'リードをつけていただければペット同伴可能です。他のお客様へのご配慮をお願いします。',
  },
  {
    question: 'トイレはありますか？',
    answer: (
      <>
        イベントに参加しているお店や近隣の公共施設をご利用いただけます。詳しくは
        <a
          href="/y2026/flyer/flyer-2026-front.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          チラシ
        </a>
        をご覧ください。
      </>
    ),
  },
  {
    question: 'ワークショップの予約方法は？',
    answer:
      '一部のワークショップは事前予約制です。各出店者のインスタグラムからお申込みください。',
  },
  {
    question: 'ボランティアは募集していますか？',
    answer: (
      <>
        はい、当日の会場設営・受付・案内・出店者サポートなどを一緒に担ってくださる仲間を募集しています。
        台湾文化が好きな方や、地域のお祭りに関わってみたい方は、はじめての方も大歓迎です。
        詳細・ご応募は
        <a
          href="https://forms.gle/ppvScJQS9vJk3PiM8"
          target="_blank"
          rel="noopener noreferrer"
        >
          ボランティア募集フォーム
        </a>
        からお願いします。
      </>
    ),
  },
];
