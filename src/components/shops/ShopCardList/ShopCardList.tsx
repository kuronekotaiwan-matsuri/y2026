import type { Shop } from '@/data/shops';
import ShopCard from '@/components/shops/ShopCard/ShopCard';
import styles from './ShopCardList.module.css';

// ==============================================
// 出店者カード一覧コンポーネント
// フィルタリング済みの出店者をグリッド表示する
// ==============================================

/** ShopCardList の props */
interface ShopCardListProps {
  /** 表示する出店者の配列 */
  shops: Shop[];
}

/**
 * 出店者カード一覧コンポーネント
 * - デスクトップ3列、タブレット2列、モバイル1列のグリッドレイアウト
 * - 該当なしの場合はメッセージを表示
 */
export default function ShopCardList({ shops }: ShopCardListProps) {
  // 該当する出店者がない場合のメッセージ表示
  if (shops.length === 0) {
    return (
      <div className={styles.empty}>
        <p>該当する出店者がありません</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {shops.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
    </div>
  );
}
