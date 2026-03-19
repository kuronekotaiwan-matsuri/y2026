import type { Metadata } from 'next';

// ==============================================
// 出店情報ページのレイアウト
// metadata をServer Component側で定義する
// ==============================================

/** 出店情報ページのメタデータ */
export const metadata: Metadata = {
  title: '出店情報 | 黒猫台湾まつり2026',
  description: '黒猫台湾まつり2026の出店者一覧。販売、ワークショップ、ステージイベントの情報をカテゴリ・日付で絞り込みできます。',
  openGraph: {
    title: '出店情報 | 黒猫台湾まつり2026',
    description: '黒猫台湾まつり2026の出店者一覧。販売、ワークショップ、ステージイベントの情報をカテゴリ・日付で絞り込みできます。',
  },
};

export default function ShopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
