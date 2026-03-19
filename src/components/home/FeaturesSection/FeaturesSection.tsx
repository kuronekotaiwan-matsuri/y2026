"use client";

import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Card from '@/components/common/Card/Card';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './FeaturesSection.module.css';

/** 特色紹介データ */
const FEATURES = [
  {
    title: '台湾グルメを味わう',
    description:
      '台湾の本格的な味を楽しめる飲食ブース。小籠包、魯肉飯、タピオカミルクティーなど、本場の味をお届けします。',
    image: '/images/feature-food.jpg',
    imageAlt: '台湾グルメの飲食ブースの様子',
  },
  {
    title: '台湾文化を体験する',
    description:
      'ワークショップやステージで台湾文化を体験。台湾結びや花文字など、楽しいハンズオンプログラムが盛りだくさん。',
    image: '/images/feature-culture.jpg',
    imageAlt: '台湾文化のワークショップ体験の様子',
  },
  {
    title: 'まちを元気にする',
    description:
      '大山街道の商店街と連携した地域のお祭り。世代や国籍を超えた交流を生み出します。',
    image: '/images/feature-community.png',
    imageAlt: '地域交流イベントの様子',
  },
] as const;

/**
 * 特色紹介セクション
 * 3つのカードで食文化・文化交流・地域活性化の魅力を紹介する。
 */
export default function FeaturesSection() {
  // フェードインアニメーション用フック
  const { ref, className: fadeClassName } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="features" alt>
      <div ref={ref} className={fadeClassName}>
        <SectionTitle title="黒猫台湾まつりの魅力" />

        {/* 3列グリッドのカード一覧 */}
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              image={feature.image}
              imageAlt={feature.imageAlt}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
