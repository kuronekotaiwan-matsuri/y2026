import styles from './Badge.module.css';

/** Badge コンポーネントの props 定義 */
interface BadgeProps {
  /** 表示するカテゴリ名 */
  category: string;
}

/**
 * カテゴリに応じた色分けのバッジを取得する
 * - "販売": ゴールド背景・白テキスト
 * - "ワークショップ": セカンダリ背景・ダークテキスト
 * - "ステージ": プライマリ背景・白テキスト
 * - その他: ボーダー色背景・ダークテキスト
 */
function getCategoryClass(category: string): string {
  switch (category) {
    case '販売':
      return styles.sales;
    case 'ワークショップ':
      return styles.workshop;
    case 'ステージ':
      return styles.stage;
    case 'Podcast':
      return styles.podcast;
    case 'トークショー':
      return styles.talk;
    case '店舗':
      return styles.shop;
    default:
      return styles.other;
  }
}

/**
 * 共通バッジコンポーネント
 * - カテゴリに応じて自動的に色分けされる
 */
export default function Badge({ category }: BadgeProps) {
  // カテゴリに応じたスタイルクラスを取得
  const categoryClass = getCategoryClass(category);

  return (
    <span className={`${styles.badge} ${categoryClass}`}>
      {category}
    </span>
  );
}
