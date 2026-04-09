import type { Metadata } from 'next';
import ShopsClient from './ShopsClient';

/** ページメタデータ */
export const metadata: Metadata = {
  title: '出店情報 | 黒猫台湾まつり2026の30以上の台湾フード・雑貨・ステージ',
  description:
    '黒猫台湾まつり2026（5/30-31 川崎・二子新地）の出店者一覧。台湾フード、雑貨、ワークショップ、トークショー、ライブなど30以上のコンテンツをカテゴリ・日付で絞り込んで探せます。',
  alternates: {
    canonical: '/shops',
  },
  openGraph: {
    title: '出店情報 | 黒猫台湾まつり2026の30以上の台湾フード・雑貨・ステージ',
    description:
      '黒猫台湾まつり2026の出店者一覧。台湾フード・雑貨・ワークショップ・ステージなど30以上のコンテンツをカテゴリ・日付で絞り込めます。',
    type: 'website',
    url: '/shops',
  },
};

/**
 * 出店情報ページ (/shops)
 * metadataをexportするためサーバーコンポーネントとし、
 * クライアント本体は ShopsClient に分離。
 */
export default function ShopsPage() {
  return <ShopsClient />;
}
