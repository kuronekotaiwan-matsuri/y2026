import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import AboutBriefSection from '@/components/home/AboutBriefSection/AboutBriefSection';
import EventInfoSection from '@/components/home/EventInfoSection/EventInfoSection';
import FeaturesSection from '@/components/home/FeaturesSection/FeaturesSection';
import ContactBriefSection from '@/components/home/ContactBriefSection/ContactBriefSection';

// ページ固有のメタデータ（SEO・OGP対応）
export const metadata: Metadata = {
  title: '黒猫台湾まつり2026 | 5/30-31 二子新地・高津の台湾フェス【入場無料】',
  description:
    '2026年5月30日(土)・31日(日)、神奈川県川崎市高津区の大山街道沿い（二子新地駅徒歩5分）で開催する第4回黒猫台湾まつり。台湾フード・雑貨・ワークショップ・トークショー・ライブなど30以上のコンテンツ。入場無料、雨天決行。',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '黒猫台湾まつり2026 | 5/30-31 二子新地・高津の台湾フェス【入場無料】',
    description:
      '2026年5月30日(土)・31日(日)、神奈川県川崎市高津区の大山街道沿い（二子新地駅徒歩5分）で開催する第4回黒猫台湾まつり。台湾フード・雑貨・ワークショップ・トークショー・ライブなど30以上のコンテンツ。入場無料、雨天決行。',
    type: 'website',
    locale: 'ja_JP',
    siteName: '黒猫台湾まつり2026',
    url: '/',
  },
};

/** サイトのベースURL */
const SITE_URL = 'https://kuronekotaiwan-matsuri.github.io/y2026';

/** JSON-LD 構造化データ（Festival スキーマ） */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Festival',
  '@id': `${SITE_URL}/#event`,
  name: '黒猫台湾まつり2026',
  alternateName: 'Kuroneko Taiwan Matsuri 2026',
  description:
    '川崎市高津区の大山街道沿い（二子新地駅〜高津駅）で開催される第4回目の台湾カルチャーフェスティバル。台湾フード・雑貨・ワークショップ・トークショー・ライブなど30以上のコンテンツが集結。入場無料。',
  startDate: '2026-05-30T11:00:00+09:00',
  endDate: '2026-05-31T17:00:00+09:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  url: `${SITE_URL}/`,
  image: [`${SITE_URL}/images/ogp.jpg`],
  inLanguage: ['ja', 'zh-TW'],
  isAccessibleForFree: true,
  location: {
    '@type': 'Place',
    name: '大山街道（二子大通り商和会）',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '二子2丁目8-8 ウッディモアル 駄菓子の木村屋',
      addressLocality: '川崎市高津区',
      addressRegion: '神奈川県',
      postalCode: '213-0002',
      addressCountry: 'JP',
    },
    // TODO(27w.20): 正確な緯度経度を実測して反映
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6049,
      longitude: 139.6175,
    },
  },
  organizer: [
    { '@id': `${SITE_URL}/#organization` },
    {
      '@type': 'Organization',
      name: '二子大通り商和会',
    },
  ],
  sponsor: {
    '@type': 'GovernmentOrganization',
    name: '川崎市高津区役所',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'JPY',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/`,
    validFrom: '2025-12-01T00:00:00+09:00',
  },
  // TODO(27w.23): 出演者確定後にperformerプロパティを追加
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

      {/* 概要定義ブロック（AI抽出最適化） */}
      <AboutBriefSection />

      {/* 開催情報セクション */}
      <EventInfoSection />

      {/* 特色紹介セクション */}
      <FeaturesSection />

      {/* お問い合わせ簡易セクション */}
      <ContactBriefSection />
    </>
  );
}
