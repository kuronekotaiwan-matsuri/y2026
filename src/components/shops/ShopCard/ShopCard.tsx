import type { Shop } from '@/data/shops';
import type { TimeSlot } from '@/data/timetable';
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
  /** タイムスロット（該当する場合） */
  timeSlots?: TimeSlot[];
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
/** 日付ラベルのマッピング */
const DATE_LABELS: Record<string, string> = {
  '5/30': '5/30(土)',
  '5/31': '5/31(日)',
};

/** タイムスロットを日付ごとにグループ化する */
function groupSlotsByDate(slots: TimeSlot[]): Record<string, TimeSlot[]> {
  const grouped: Record<string, TimeSlot[]> = {};
  for (const slot of slots) {
    if (!grouped[slot.date]) grouped[slot.date] = [];
    grouped[slot.date].push(slot);
  }
  for (const date of Object.keys(grouped)) {
    grouped[date].sort((a, b) => a.startTime.localeCompare(b.startTime));
  }
  return grouped;
}

/** 日付ごとのスロットを表示用テキストにフォーマットする */
function formatSlots(slots: TimeSlot[]): string {
  if (slots.length === 1) {
    return `${slots[0].startTime}〜${slots[0].endTime}`;
  }
  // 2枠: 個別に並べる
  if (slots.length === 2) {
    return slots.map((s) => `${s.startTime}〜${s.endTime}`).join(' / ');
  }
  // 3枠以上: 集約表示 "11:00〜16:45（各回45分・全6回）"
  const first = slots[0];
  const last = slots[slots.length - 1];
  const startMin = Number(first.startTime.split(':')[0]) * 60 + Number(first.startTime.split(':')[1]);
  const endMin = Number(first.endTime.split(':')[0]) * 60 + Number(first.endTime.split(':')[1]);
  const duration = endMin - startMin;
  return `${first.startTime}〜${last.endTime}（各回${duration}分・全${slots.length}回）`;
}

/** instagramUrlを配列に正規化する */
function getInstagramUrls(url?: string | string[]): string[] {
  if (!url) return [];
  return Array.isArray(url) ? url : [url];
}

/** InstagramのURLからユーザー名を抽出する */
function extractUsername(url: string): string {
  const match = url.match(/instagram\.com\/([^/?]+)/);
  return match ? `@${match[1]}` : 'Instagram';
}

export default function ShopCard({ shop, timeSlots }: ShopCardProps) {
  const hasTimeSlots = timeSlots && timeSlots.length > 0;
  const hasReservation = timeSlots?.some((s) => s.requiresReservation);
  const instagramUrls = getInstagramUrls(shop.instagramUrl);

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

        {/* タイムスロット表示 */}
        {hasTimeSlots && (
          <div className={styles.schedule}>
            {hasReservation && (
              <div className={styles.reservationNotice}>
                <span className={styles.reservationBadge}>要予約</span>
                {instagramUrls.length > 0 && (
                  <a
                    href={instagramUrls[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.reservationLink}
                  >
                    InstagramのDMで予約
                  </a>
                )}
              </div>
            )}
            {Object.entries(groupSlotsByDate(timeSlots!)).map(([date, slots]) => (
              <div key={date} className={styles.daySchedule}>
                <span className={styles.dayLabel}>{DATE_LABELS[date] || date}</span>
                <span className={styles.timeText}>{formatSlots(slots)}</span>
              </div>
            ))}
          </div>
        )}

        {/* 外部リンク（Instagram / Webサイト） */}
        {(instagramUrls.length > 0 || shop.websiteUrl) && (
          <div className={styles.links}>
            {instagramUrls.map((url) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${shop.name}のInstagram (${extractUsername(url)})`}
              >
                {instagramUrls.length > 1 ? extractUsername(url) : 'Instagram'}
              </a>
            ))}
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
