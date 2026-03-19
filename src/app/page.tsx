import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import EventInfoSection from '@/components/home/EventInfoSection/EventInfoSection';
import FeaturesSection from '@/components/home/FeaturesSection/FeaturesSection';
import ContactBriefSection from '@/components/home/ContactBriefSection/ContactBriefSection';

// ページ固有のメタデータ（SEO・OGP対応）
export const metadata: Metadata = {
  title: '黒猫台湾まつり2026 | 川崎市高津区で台湾文化を体験しよう',
  description:
    '2026年5月30日(土)・31日(日)開催。川崎市高津区の大山街道沿いで、台湾グルメ、ワークショップ、ステージイベントが楽しめるお祭りです。入場無料。',
  openGraph: {
    title: '黒猫台湾まつり2026 | 川崎市高津区で台湾文化を体験しよう',
    description:
      '2026年5月30日(土)・31日(日)開催。川崎市高津区の大山街道沿いで、台湾グルメ、ワークショップ、ステージイベントが楽しめるお祭りです。入場無料。',
    type: 'website',
    locale: 'ja_JP',
    siteName: '黒猫台湾まつり2026',
  },
};

/** JSON-LD 構造化データ（Event スキーマ） */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: '黒猫台湾まつり2026',
  description:
    '川崎市高津区の大山街道沿いで開催される台湾文化イベント。台湾グルメ、ワークショップ、ステージイベントが楽しめます。入場無料。',
  startDate: '2026-05-30T11:00:00+09:00',
  endDate: '2026-05-31T17:00:00+09:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: '駄菓子の木村屋（本部・総合案内）',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '二子2丁目8-8 ウッディモアル',
      addressLocality: '川崎市高津区',
      addressRegion: '神奈川県',
      addressCountry: 'JP',
    },
  },
  image: '/y2026/images/ogp.jpg',
  organizer: {
    '@type': 'Organization',
    name: '黒猫台湾まつり実行委員会',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'JPY',
    availability: 'https://schema.org/InStock',
  },
  isAccessibleForFree: true,
};

/**
 * トップページ
 * ヒーロー・開催情報・特色紹介・お問い合わせの各セクションを統合する。
 */
export default function Home() {
  return (
    <>
      {/* JSON-LD 構造化データの埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローセクション */}
      <HeroSection />

      {/* 開催情報セクション */}
      <EventInfoSection />

      {/* 特色紹介セクション */}
      <FeaturesSection />

      {/* お問い合わせ簡易セクション */}
      <ContactBriefSection />
    </>
  );
}
