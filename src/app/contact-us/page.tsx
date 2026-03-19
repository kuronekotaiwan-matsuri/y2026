import type { Metadata } from 'next';
import FaqSection from '@/components/contact/FaqSection/FaqSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection/ContactInfoSection';

/** ページメタデータ */
export const metadata: Metadata = {
  title: 'お問い合わせ | 黒猫台湾まつり2026',
  description:
    '黒猫台湾まつり2026に関するよくある質問（FAQ）と連絡先情報。Instagram・メールでのお問い合わせや会場へのアクセス情報をご確認いただけます。',
  openGraph: {
    title: 'お問い合わせ | 黒猫台湾まつり2026',
    description:
      '黒猫台湾まつり2026に関するよくある質問（FAQ）と連絡先情報。',
    type: 'website',
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
