'use client';

import { useState, useCallback } from 'react';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import FilterBar from '@/components/shops/FilterBar/FilterBar';
import type { FilterState } from '@/components/shops/FilterBar/FilterBar';
import ShopCardList from '@/components/shops/ShopCardList/ShopCardList';
import { shops, ALL_CATEGORIES, ALL_DATES } from '@/data/shops';
import type { Shop } from '@/data/shops';
import { timetable } from '@/data/timetable';
import type { TimeSlot } from '@/data/timetable';

// ==============================================
// 出店情報ページ（クライアント本体）
// フィルターバーと出店者カード一覧を統合する
// ==============================================

/**
 * フィルター条件に基づいて出店者を絞り込む
 * - カテゴリ AND 日付の両方に一致する出店者のみ返す
 */
function filterShops(allShops: Shop[], filter: FilterState): Shop[] {
  return allShops.filter((shop) => {
    // カテゴリフィルター: 選択中のカテゴリに含まれるか（配列対応）
    const shopCategories = Array.isArray(shop.category) ? shop.category : [shop.category];
    const categoryMatch = filter.categories.length === 0 || shopCategories.some((c) => filter.categories.includes(c));
    // 日付フィルター: 出店日のいずれかが選択中の日付に含まれるか
    const dateMatch = filter.dates.length === 0 || shop.dates.some((d) => filter.dates.includes(d));
    return categoryMatch && dateMatch;
  });
}

/** タイムスロットをshopIdごとにグループ化する */
function buildTimeSlotMap(slots: TimeSlot[]): Record<string, TimeSlot[]> {
  const map: Record<string, TimeSlot[]> = {};
  for (const slot of slots) {
    if (!map[slot.shopId]) map[slot.shopId] = [];
    map[slot.shopId].push(slot);
  }
  return map;
}

const timeSlotMap = buildTimeSlotMap(timetable);

export default function ShopsClient() {
  // フィルター状態の管理（初期値: 全て選択）
  const [filter, setFilter] = useState<FilterState>({
    categories: [...ALL_CATEGORIES],
    dates: [...ALL_DATES],
  });

  // フィルター変更ハンドラ
  const handleFilterChange = useCallback((newFilter: FilterState) => {
    setFilter(newFilter);
  }, []);

  // フィルタリングされた出店者一覧
  const filteredShops = filterShops(shops, filter);

  return (
    <SectionContainer>
      {/* ページタイトル */}
      <SectionTitle
        title="出店情報"
        subtitle="カテゴリや日付で絞り込みできます"
      />

      {/* フィルターバー */}
      <FilterBar onFilterChange={handleFilterChange} />

      {/* 出店者カード一覧 */}
      <ShopCardList shops={filteredShops} timeSlotMap={timeSlotMap} />
    </SectionContainer>
  );
}
