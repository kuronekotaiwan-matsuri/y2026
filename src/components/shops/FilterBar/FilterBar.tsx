'use client';

import { useState, useCallback } from 'react';
import type { ShopCategory, EventDate } from '@/data/shops';
import { ALL_CATEGORIES, ALL_DATES } from '@/data/shops';
import styles from './FilterBar.module.css';

// ==============================================
// フィルターバーコンポーネント
// カテゴリと日付のトグルフィルターを提供する
// ==============================================

/** フィルター状態の型定義 */
export interface FilterState {
  categories: ShopCategory[];
  dates: EventDate[];
}

/** FilterBar コンポーネントの props */
interface FilterBarProps {
  /** フィルター変更時のコールバック */
  onFilterChange: (filter: FilterState) => void;
}

/** 日付の表示用ラベルマッピング */
const DATE_LABELS: Record<EventDate, string> = {
  '5/30': '5/30（土）',
  '5/31': '5/31（日）',
};

/**
 * フィルターバーコンポーネント
 * - カテゴリ（販売・ワークショップ・ステージ）のトグルボタン
 * - 日付（5/30・5/31）のトグルボタン
 * - 初期状態は全て選択済み
 */
export default function FilterBar({ onFilterChange }: FilterBarProps) {
  // フィルター状態の管理（初期値: 全て選択）
  const [selectedCategories, setSelectedCategories] = useState<ShopCategory[]>([...ALL_CATEGORIES]);
  const [selectedDates, setSelectedDates] = useState<EventDate[]>([...ALL_DATES]);

  // カテゴリボタンのトグル処理
  const handleCategoryToggle = useCallback((category: ShopCategory) => {
    const isSelected = selectedCategories.includes(category);
    const next = isSelected
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    // state更新とコールバック通知を分離（レンダリング中のsetState回避）
    setSelectedCategories(next);
    onFilterChange({ categories: next, dates: selectedDates });
  }, [onFilterChange, selectedCategories, selectedDates]);

  // 日付ボタンのトグル処理
  const handleDateToggle = useCallback((date: EventDate) => {
    const isSelected = selectedDates.includes(date);
    const next = isSelected
      ? selectedDates.filter((d) => d !== date)
      : [...selectedDates, date];
    // state更新とコールバック通知を分離（レンダリング中のsetState回避）
    setSelectedDates(next);
    onFilterChange({ categories: selectedCategories, dates: next });
  }, [onFilterChange, selectedCategories, selectedDates]);

  return (
    <div className={styles.filterBar}>
      {/* カテゴリフィルターグループ */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>カテゴリ</span>
        <div className={styles.buttonGroup}>
          {ALL_CATEGORIES.map((category) => {
            const isActive = selectedCategories.includes(category);
            // カテゴリに応じたアクティブ時のスタイルクラスを決定
            const categoryClass = isActive
              ? styles[`active_${getCategoryKey(category)}`]
              : styles.inactive;
            return (
              <button
                key={category}
                type="button"
                className={`${styles.filterButton} ${categoryClass}`}
                onClick={() => handleCategoryToggle(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* 日付フィルターグループ */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>日付</span>
        <div className={styles.buttonGroup}>
          {ALL_DATES.map((date) => {
            const isActive = selectedDates.includes(date);
            return (
              <button
                key={date}
                type="button"
                className={`${styles.filterButton} ${isActive ? styles.activeDate : styles.inactive}`}
                onClick={() => handleDateToggle(date)}
                aria-pressed={isActive}
              >
                {DATE_LABELS[date]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** カテゴリ名からCSSクラス用キーに変換する */
function getCategoryKey(category: ShopCategory): string {
  switch (category) {
    case '販売':
      return 'sales';
    case 'ワークショップ':
      return 'workshop';
    case 'ステージ':
      return 'stage';
    case 'Podcast':
      return 'podcast';
    case 'トークショー':
      return 'talk';
    case '店舗':
      return 'shop';
  }
}
