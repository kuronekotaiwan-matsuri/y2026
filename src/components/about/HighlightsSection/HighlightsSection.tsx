'use client';

import { useFadeIn } from '@/hooks/useFadeIn';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Card from '@/components/common/Card/Card';
import styles from './HighlightsSection.module.css';

/** 見どころデータの型定義 */
interface HighlightItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

/** 見どころ一覧データ */
const highlights: HighlightItem[] = [
  {
    title: '物販ブース',
    description:
      '台湾雑貨やフードの販売。台湾から直接仕入れたアイテムや、本格的な台湾フードが楽しめます。',
    image: '/y2026/images/feature-culture.jpg',
    imageAlt: '台湾雑貨やフードの物販ブースの様子',
  },
  {
    title: 'ワークショップ',
    description:
      '台湾文化を体験できるハンズオンプログラム。台湾結び、花文字など、楽しい体験が盛りだくさん。',
    image: '/y2026/images/taiwan_musubi.png',
    imageAlt: '台湾文化ワークショップ体験の様子',
  },
  {
    title: 'ステージイベント',
    description:
      'トークショー、音楽ライブ、ポッドキャスト公開収録など、見て聴いて楽しめるステージプログラム。',
    image: '/y2026/images/talkshow.jpg',
    imageAlt: 'ステージイベントの様子',
  },
];

/**
 * 見どころセクション
 * SectionContainer(alt)内に3つのカードを配置する
 */
export default function HighlightsSection() {
  const { ref, className: fadeInClass } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer alt id="highlights">
      <div ref={ref} className={fadeInClass}>
        {/* セクションタイトル */}
        <SectionTitle title="楽しみ方いろいろ！黒猫台湾まつりの見どころ" />

        {/* カードグリッド */}
        <div className={styles.grid}>
          {highlights.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
