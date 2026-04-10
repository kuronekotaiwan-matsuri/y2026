// ==============================================
// タイムテーブルデータ定義
// ワークショップ・ステージ・Podcast・トークショーの時間枠を管理する
// ==============================================

import type { EventDate } from './shops';

/** タイムスロットのインターフェース */
export interface TimeSlot {
  /** 紐付く出店者ID */
  shopId: string;
  /** 開催日 */
  date: EventDate;
  /** 開始時刻（HH:mm） */
  startTime: string;
  /** 終了時刻（HH:mm） */
  endTime: string;
  /** 予約が必要か */
  requiresReservation?: boolean;
}

/** タイムテーブルデータ */
export const timetable: TimeSlot[] = [
  // ワークショップ: WM workshop (shop-013) - 要予約
  // 5/30
  { shopId: 'shop-013', date: '5/30', startTime: '11:00', endTime: '11:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/30', startTime: '12:00', endTime: '12:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/30', startTime: '13:00', endTime: '13:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/30', startTime: '14:00', endTime: '14:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/30', startTime: '15:00', endTime: '15:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/30', startTime: '16:00', endTime: '16:45', requiresReservation: true },
  // 5/31
  { shopId: 'shop-013', date: '5/31', startTime: '11:00', endTime: '11:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/31', startTime: '12:00', endTime: '12:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/31', startTime: '13:00', endTime: '13:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/31', startTime: '14:00', endTime: '14:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/31', startTime: '15:00', endTime: '15:45', requiresReservation: true },
  { shopId: 'shop-013', date: '5/31', startTime: '16:00', endTime: '16:45', requiresReservation: true },

  // ワークショップ: 佐々木千絵ワークショップ (shop-014)
  { shopId: 'shop-014', date: '5/30', startTime: '11:00', endTime: '17:00' },
  { shopId: 'shop-014', date: '5/31', startTime: '11:00', endTime: '17:00' },

  // ワークショップ: 台湾華語茶會 (shop-015) - 要予約
  { shopId: 'shop-015', date: '5/30', startTime: '10:30', endTime: '12:30', requiresReservation: true },

  // ワークショップ: 快子好好 指吸快子 (shop-016)
  { shopId: 'shop-016', date: '5/30', startTime: '13:00', endTime: '17:00' },
  { shopId: 'shop-016', date: '5/31', startTime: '11:00', endTime: '17:00' },

  // Podcast: 你你好好 (shop-017)
  { shopId: 'shop-017', date: '5/31', startTime: '13:00', endTime: '13:45' },

  // Podcast: HowTo Taiwan (shop-018)
  { shopId: 'shop-018', date: '5/31', startTime: '14:30', endTime: '15:30' },

  // Podcast: 佐野いくみの喜々台湾 (shop-019)
  { shopId: 'shop-019', date: '5/31', startTime: '16:00', endTime: '16:45' },

  // トークショー: 門司&佐々木 (shop-020)
  { shopId: 'shop-020', date: '5/30', startTime: '11:00', endTime: '11:45' },

  // トークショー: 好玩電台 (shop-021)
  { shopId: 'shop-021', date: '5/30', startTime: '13:00', endTime: '13:45' },

  // ステージ: young donuts (shop-022)
  { shopId: 'shop-022', date: '5/31', startTime: '12:00', endTime: '12:30' },
  { shopId: 'shop-022', date: '5/31', startTime: '14:00', endTime: '14:30' },

  // ステージ: 洸美 (shop-023)
  { shopId: 'shop-023', date: '5/30', startTime: '14:30', endTime: '15:00' },
  { shopId: 'shop-023', date: '5/30', startTime: '16:00', endTime: '16:30' },
];
