import type { Metadata } from 'next';
import FaqSection from '@/components/contact/FaqSection/FaqSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection/ContactInfoSection';

/** ページメタデータ */
export const metadata: Metadata = {
  title: 'アクセス・FAQ | 黒猫台湾まつり2026（二子新地駅徒歩5分）',
  description:
    '黒猫台湾まつり2026のよくある質問（雨天時・駐車場・子連れ・ワークショップ予約等）と連絡先。東急田園都市線 二子新地駅から徒歩5分。Instagram・メールでのお問い合わせ情報もこちら。',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'アクセス・FAQ | 黒猫台湾まつり2026（二子新地駅徒歩5分）',
    description:
      '黒猫台湾まつり2026に関するよくある質問（FAQ）と連絡先情報。',
    type: 'website',
    url: '/contact-us',
  },
};

/**
 * お問い合わせページ (/contact-us)
 * FAQセクション・連絡先情報セクションの2セクションで構成
 */
export default function ContactUsPage() {
  return (
    <>
      {/* よくある質問セクション */}
      <FaqSection />

      {/* 連絡先情報セクション */}
      <ContactInfoSection />
    </>
  );
}
