import type { Metadata } from 'next';
import PurposeSection from '@/components/about/PurposeSection/PurposeSection';
import HighlightsSection from '@/components/about/HighlightsSection/HighlightsSection';
import GallerySection from '@/components/about/GallerySection/GallerySection';

/** ページメタデータ */
export const metadata: Metadata = {
  title: 'イベントについて | 黒猫台湾まつり2026',
  description:
    '黒猫台湾まつり2026のイベント趣旨、見どころ、過去の開催風景をご紹介します。台湾文化の発信・地域活性化・交流の場として開催されるお祭りです。',
  openGraph: {
    title: 'イベントについて | 黒猫台湾まつり2026',
    description:
      '黒猫台湾まつり2026のイベント趣旨、見どころ、過去の開催風景をご紹介します。',
    type: 'website',
  },
};

/**
 * イベントについてページ (/about)
 * イベント趣旨・見どころ・過去の開催風景の3セクションで構成
 */
export default function AboutPage() {
  return (
    <>
      {/* イベント趣旨セクション */}
      <PurposeSection />

      {/* 見どころセクション */}
      <HighlightsSection />

      {/* 過去の開催風景セクション */}
      <GallerySection />
    </>
  );
}
