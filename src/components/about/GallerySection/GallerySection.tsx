'use client';

import { useFadeIn } from '@/hooks/useFadeIn';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import styles from './GallerySection.module.css';

/** ギャラリー画像データの型定義 */
interface GalleryImage {
  src: string;
  alt: string;
}

/** ギャラリー画像一覧: 過去の開催風景のプレースホルダー */
const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery-1.jpg',
    alt: '2025年黒猫台湾まつりの会場風景',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: '台湾グルメブースの様子',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'ワークショップ体験の風景',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'ステージイベントの様子',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: '来場者で賑わう会場の風景',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: '台湾雑貨の物販ブースの様子',
  },
];

/**
 * 過去の開催風景セクション
 * グリッドレイアウトで写真を一覧表示する
 */
export default function GallerySection() {
  const { ref, className: fadeInClass } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="gallery">
      <div ref={ref} className={fadeInClass}>
        {/* セクションタイトル */}
        <SectionTitle title="過去の開催風景" />

        {/* 画像グリッド */}
        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <div key={image.src} className={styles.imageWrapper}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
