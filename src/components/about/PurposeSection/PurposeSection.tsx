'use client';

import { useFadeIn } from '@/hooks/useFadeIn';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import styles from './PurposeSection.module.css';

/** テーマデータの型定義 */
interface ThemeItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

/** イベント趣旨セクションで紹介する3つのテーマ */
const themes: ThemeItem[] = [
  {
    title: '町おこしの一環として',
    description:
      '川崎市高津区の大山街道沿いの地域活性化。商店街と連携し、地元経済の発展を目指しています。',
    image: '/images/purpose-town.jpg',
    imageAlt: '町おこし・地域活性化のイメージ',
  },
  {
    title: '台湾文化の発信',
    description:
      '台湾の食文化、工芸、音楽などを通じて、日本と台湾の交流を深めます。伝統食文化、工芸、言語、音楽の体験を提供します。',
    image: '/images/purpose-taiwan.jpg',
    imageAlt: '台湾文化の発信イメージ',
  },
  {
    title: '地域交流の場',
    description:
      '世代や国籍を超えた交流を生み出します。ワークショップやライブパフォーマンスを通じた相互理解の深化を目指します。',
    image: '/images/purpose-community.jpg',
    imageAlt: '地域交流の場のイメージ',
  },
];

/**
 * イベント趣旨セクション
 * リード文と3つのテーマを画像付き（左右交互レイアウト）で紹介する
 */
export default function PurposeSection() {
  const { ref, className: fadeInClass } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="purpose">
      <div ref={ref} className={fadeInClass}>
        {/* セクションタイトル */}
        <SectionTitle title="黒猫台湾まつりとは" />

        {/* リード文 */}
        <p className={styles.lead}>
          黒猫台湾まつりは、地元の経済発展とともに、台湾の文化や美味しい料理を楽しむための貴重な機会を提供します
        </p>

        {/* テーマ一覧: 画像と説明の左右交互レイアウト */}
        <div className={styles.themes}>
          {themes.map((theme, index) => (
            <div
              key={theme.title}
              className={`${styles.themeItem} ${index % 2 !== 0 ? styles.reverse : ''}`}
            >
              {/* 画像エリア */}
              <div className={styles.imageWrapper}>
                <img
                  src={theme.image}
                  alt={theme.imageAlt}
                  className={styles.image}
                />
              </div>

              {/* テキストエリア */}
              <div className={styles.textWrapper}>
                <h3 className={styles.themeTitle}>{theme.title}</h3>
                <p className={styles.themeDescription}>{theme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
