import { shops, ALL_CATEGORIES, ALL_DATES } from '@/data/shops';
import type { ShopCategory, EventDate, Shop } from '@/data/shops';

// ==============================================
// 出店者データのテスト
// 型合致・カテゴリ・日付パターンの網羅を検証する
// ==============================================

/** カテゴリ判定ヘルパー: 配列・単一値の両方に対応 */
function hasCategory(shop: Shop, category: ShopCategory): boolean {
  return Array.isArray(shop.category)
    ? shop.category.includes(category)
    : shop.category === category;
}

describe('出店者データ (shops.ts)', () => {
  // --- データの基本構造 ---
  describe('データの基本構造', () => {
    test('出店者データが1件以上存在する', () => {
      expect(shops.length).toBeGreaterThan(0);
    });

    test('全ての出店者が必須フィールドを持つ', () => {
      shops.forEach((shop) => {
        expect(shop.id).toBeTruthy();
        expect(shop.name).toBeTruthy();
        expect(shop.category).toBeTruthy();
        expect(shop.dates.length).toBeGreaterThan(0);
        expect(shop.image).toBeTruthy();
        expect(shop.description).toBeTruthy();
      });
    });

    test('全ての出店者IDが一意である', () => {
      const ids = shops.map((shop) => shop.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    test('categoryは有効なShopCategoryの値（単一または配列）である', () => {
      shops.forEach((shop) => {
        const categories = Array.isArray(shop.category) ? shop.category : [shop.category];
        categories.forEach((cat) => {
          expect(ALL_CATEGORIES).toContain(cat);
        });
      });
    });
  });

  // --- カテゴリの網羅 ---
  describe('カテゴリの網羅', () => {
    test('「販売」カテゴリの出店者が存在する', () => {
      const filtered = shops.filter((s) => hasCategory(s, '販売'));
      expect(filtered.length).toBeGreaterThan(0);
    });

    test('「ワークショップ」カテゴリの出店者が存在する', () => {
      const filtered = shops.filter((s) => hasCategory(s, 'ワークショップ'));
      expect(filtered.length).toBeGreaterThan(0);
    });

    test('「Podcast」カテゴリの出店者が存在する', () => {
      const filtered = shops.filter((s) => hasCategory(s, 'Podcast'));
      expect(filtered.length).toBeGreaterThan(0);
    });

    test('ALL_CATEGORIES に全カテゴリが含まれる', () => {
      expect(ALL_CATEGORIES).toContain('販売');
      expect(ALL_CATEGORIES).toContain('ワークショップ');
      expect(ALL_CATEGORIES).toContain('ステージ');
      expect(ALL_CATEGORIES).toContain('Podcast');
      expect(ALL_CATEGORIES).toContain('トークショー');
      expect(ALL_CATEGORIES).toContain('店舗');
      expect(ALL_CATEGORIES).toHaveLength(6);
    });

    test('複数カテゴリを持つ出店者が存在する', () => {
      const multiCategory = shops.filter((s) => Array.isArray(s.category));
      expect(multiCategory.length).toBeGreaterThan(0);
    });
  });

  // --- 日付パターンの網羅 ---
  describe('日付パターンの網羅', () => {
    test('両日出店の出店者が存在する', () => {
      const bothDays = shops.filter(
        (s) => s.dates.includes('5/30') && s.dates.includes('5/31')
      );
      expect(bothDays.length).toBeGreaterThan(0);
    });

    test('5/30のみ出店の出店者が存在する', () => {
      const day30Only = shops.filter(
        (s) => s.dates.includes('5/30') && !s.dates.includes('5/31')
      );
      expect(day30Only.length).toBeGreaterThan(0);
    });

    test('5/31のみ出店の出店者が存在する', () => {
      const day31Only = shops.filter(
        (s) => !s.dates.includes('5/30') && s.dates.includes('5/31')
      );
      expect(day31Only.length).toBeGreaterThan(0);
    });

    test('ALL_DATES に全日付が含まれる', () => {
      expect(ALL_DATES).toContain('5/30');
      expect(ALL_DATES).toContain('5/31');
      expect(ALL_DATES).toHaveLength(2);
    });
  });

  // --- オプショナルフィールド ---
  describe('オプショナルフィールド', () => {
    test('instagramUrl を持つ出店者が存在する', () => {
      const withInstagram = shops.filter((s) => s.instagramUrl);
      expect(withInstagram.length).toBeGreaterThan(0);
    });

    test('websiteUrl を持つ出店者が存在する', () => {
      const withWebsite = shops.filter((s) => s.websiteUrl);
      expect(withWebsite.length).toBeGreaterThan(0);
    });
  });
});
