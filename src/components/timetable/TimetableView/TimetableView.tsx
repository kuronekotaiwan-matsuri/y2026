'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { EventDate, Shop } from '@/data/shops';
import { shops } from '@/data/shops';
import type { TimeSlot } from '@/data/timetable';
import { timetable } from '@/data/timetable';
import styles from './TimetableView.module.css';

// ==============================================
// タイムテーブル表示コンポーネント
// 日付タブ切り替え＋カテゴリ別のタイムライン表示
// ==============================================

/** カテゴリの表示順と表示ラベル */
const CATEGORY_ORDER = ['ステージ', 'トークショー', 'Podcast', 'ワークショップ'] as const;

/** 日付ラベル */
const DATE_LABELS: Record<EventDate, string> = {
  '5/30': '5/30（土）',
  '5/31': '5/31（日）',
};

/** shopIdからShopデータを引くマップ */
const shopMap = new Map<string, Shop>(shops.map((s) => [s.id, s]));

/** カテゴリ判定: shopのcategoryが対象カテゴリを含むか */
function shopHasCategory(shop: Shop, category: string): boolean {
  return Array.isArray(shop.category)
    ? shop.category.includes(category as never)
    : shop.category === category;
}

/** 指定日付・カテゴリのスロットを取得し開始時刻順にソート */
function getSlotsForDateAndCategory(date: EventDate, category: string): (TimeSlot & { shop: Shop })[] {
  return timetable
    .filter((slot) => {
      if (slot.date !== date) return false;
      const shop = shopMap.get(slot.shopId);
      return shop ? shopHasCategory(shop, category) : false;
    })
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .map((slot) => ({ ...slot, shop: shopMap.get(slot.shopId)! }));
}

export default function TimetableView() {
  const [activeDate, setActiveDate] = useState<EventDate>('5/30');

  return (
    <div>
      {/* 日付タブ */}
      <div className={styles.tabs}>
        {(['5/30', '5/31'] as EventDate[]).map((date) => (
          <button
            key={date}
            className={`${styles.tab} ${activeDate === date ? styles.tabActive : ''}`}
            onClick={() => setActiveDate(date)}
            type="button"
          >
            {DATE_LABELS[date]}
          </button>
        ))}
      </div>

      {/* カテゴリごとのタイムライン */}
      {CATEGORY_ORDER.map((category) => {
        const slots = getSlotsForDateAndCategory(activeDate, category);
        if (slots.length === 0) return null;

        return (
          <div key={category} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.timeline}>
              {slots.map((slot, i) => (
                <div key={`${slot.shopId}-${i}`} className={styles.slot}>
                  <div className={styles.time}>
                    <span className={styles.timeStart}>{slot.startTime}</span>
                    <span className={styles.timeSeparator}>〜</span>
                    <span className={styles.timeEnd}>{slot.endTime}</span>
                  </div>
                  <div className={styles.slotContent}>
                    <div className={styles.slotHeader}>
                      <span className={styles.slotName}>{slot.shop.name}</span>
                      {slot.requiresReservation && (
                        <span className={styles.reservationBadge}>要予約</span>
                      )}
                    </div>
                    <p className={styles.slotDescription}>{slot.shop.description}</p>
                    <div className={styles.slotLinks}>
                      {slot.requiresReservation && slot.shop.instagramUrl && (
                        <a
                          href={Array.isArray(slot.shop.instagramUrl) ? slot.shop.instagramUrl[0] : slot.shop.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.reservationLink}
                        >
                          InstagramのDMで予約
                        </a>
                      )}
                      <Link href="/shops" className={styles.detailLink}>
                        出店情報で詳しく見る
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
