import type { Metadata } from 'next';
import PurposeSection from '@/components/about/PurposeSection/PurposeSection';
import HighlightsSection from '@/components/about/HighlightsSection/HighlightsSection';
import GallerySection from '@/components/about/GallerySection/GallerySection';

/** ページメタデータ */
export const metadata: Metadata = {
  title: '黒猫台湾まつりとは | 二子新地・大山街道発の台湾カルチャーフェス',
  description:
    '川崎市高津区・二子新地の商店街が主催する台湾カルチャーフェスティバル「黒猫台湾まつり」。実店舗3軒（黒猫豆花・麺線屋formosa・佰老亭）を起点に、台湾文化の発信・地域活性化・世代交流を目指す第4回の開催趣旨・見どころ・過去の開催風景を紹介します。',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: '黒猫台湾まつりとは | 二子新地・大山街道発の台湾カルチャーフェス',
    description:
      '黒猫台湾まつり2026のイベント趣旨、見どころ、過去の開催風景をご紹介します。',
    type: 'website',
    url: '/about',
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
