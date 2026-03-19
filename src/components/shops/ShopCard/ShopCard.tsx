import type { Shop } from '@/data/shops';
import Badge from '@/components/common/Badge/Badge';
import styles from './ShopCard.module.css';

// ==============================================
// 出店者カードコンポーネント
// Cardコンポーネント風のデザインで出店者情報を表示する
// ==============================================

/** ShopCard の props */
interface ShopCardProps {
  /** 出店者データ */
  shop: Shop;
}

/** 出店日を表示用文字列に変換する */
function formatDates(dates: Shop['dates']): string {
  const dateLabels: Record<string, string> = {
    '5/30': '5/30(土)',
    '5/31': '5/31(日)',
  };
  return dates.map((d) => dateLabels[d]).join('・');
}

/**
 * 出店者カードコンポーネント
 * - 代表画像・カテゴリバッジ・出店者名・出店日・説明文を表示
 * - SNSリンク・Webサイトリンクは存在する場合のみ表示
 */
export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <div className={styles.card}>
      {/* 画像エリア */}
      <div className={styles.imageWrapper}>
        <img
          src={shop.image}
          alt={`${shop.name}の出店イメージ`}
          className={styles.image}
        />
      </div>

      {/* コンテンツエリア */}
      <div className={styles.body}>
        {/* カテゴリバッジと出店日 */}
        <div className={styles.meta}>
          {Array.isArray(shop.category) ? shop.category.map((category, i) => (
            <Badge key={category + i} category={category} />
          )) : (
            <Badge category={shop.category} />
          )}
          <span className={styles.dates}>{formatDates(shop.dates)}</span>
        </div>

        {/* 出店者名 */}
        <h3 className={styles.name}>{shop.name}</h3>

        {/* 説明文 */}
        <p className={styles.description}>{shop.description}</p>

        {/* 外部リンク（Instagram / Webサイト） */}
        {(shop.instagramUrl || shop.websiteUrl) && (
          <div className={styles.links}>
            {shop.instagramUrl && (
              <a
                href={shop.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${shop.name}のInstagram`}
              >
                Instagram
              </a>
            )}
            {shop.websiteUrl && (
              <a
                href={shop.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${shop.name}のWebサイト`}
              >
                Webサイト
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
