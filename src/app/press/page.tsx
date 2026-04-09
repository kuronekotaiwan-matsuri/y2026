import type { Metadata } from 'next';
import PressRelease from '@/components/press/PressRelease/PressRelease';

/** ページメタデータ */
export const metadata: Metadata = {
  title: 'プレスリリース | 黒猫台湾まつり2026',
  description:
    '報道関係者向け「黒猫台湾まつり2026」のプレスリリース。イベント概要、見どころ、お問い合わせ先などの情報を掲載しています。',
  alternates: {
    canonical: '/press',
  },
  openGraph: {
    title: 'プレスリリース | 黒猫台湾まつり2026',
    description:
      '報道関係者向け「黒猫台湾まつり2026」のプレスリリース。',
    type: 'website',
    url: '/press',
  },
};

/**
 * プレスリリースページ (/press)
 * 報道関係者向けのイベント詳細情報を掲載
 */
export default function PressPage() {
  return (
    <>
      {/* プレスリリース本文 */}
      <PressRelease />
    </>
  );
}
