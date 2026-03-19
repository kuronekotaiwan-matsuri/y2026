import { render, screen } from '@testing-library/react';
import ShopCardList from '@/components/shops/ShopCardList/ShopCardList';
import type { Shop } from '@/data/shops';

// ==============================================
// ShopCardList コンポーネントのテスト
// フィルタリング動作（カテゴリ・日付・複合・0件）を検証する
// ==============================================

// テスト用の出店者データセット
const testShops: Shop[] = [
  {
    id: 'test-a',
    name: '販売ショップA',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: 'https://placehold.co/600x338',
    description: '販売ショップAの説明',
  },
  {
    id: 'test-b',
    name: 'ワークショップB',
    category: 'ワークショップ',
    dates: ['5/30'],
    image: 'https://placehold.co/600x338',
    description: 'ワークショップBの説明',
  },
  {
    id: 'test-c',
    name: 'ステージC',
    category: 'ステージ',
    dates: ['5/31'],
    image: 'https://placehold.co/600x338',
    description: 'ステージCの説明',
  },
];

describe('ShopCardList コンポーネント', () => {
  // --- カード一覧の表示 ---
  describe('カード一覧の表示', () => {
    test('渡された出店者が全て表示される', () => {
      render(<ShopCardList shops={testShops} />);

      expect(screen.getByText('販売ショップA')).toBeInTheDocument();
      expect(screen.getByText('ワークショップB')).toBeInTheDocument();
      expect(screen.getByText('ステージC')).toBeInTheDocument();
    });

    test('1件のみ渡した場合に1件だけ表示される', () => {
      render(<ShopCardList shops={[testShops[0]]} />);

      expect(screen.getByText('販売ショップA')).toBeInTheDocument();
      expect(screen.queryByText('ワークショップB')).not.toBeInTheDocument();
      expect(screen.queryByText('ステージC')).not.toBeInTheDocument();
    });
  });

  // --- フィルタリング結果の表示（親から絞り込み済みデータを受け取る） ---
  describe('フィルタリング結果の表示', () => {
    test('カテゴリで絞り込んだ結果が正しく表示される', () => {
      // 販売カテゴリのみ
      const salesOnly = testShops.filter((s) => s.category === '販売');
      render(<ShopCardList shops={salesOnly} />);

      expect(screen.getByText('販売ショップA')).toBeInTheDocument();
      expect(screen.queryByText('ワークショップB')).not.toBeInTheDocument();
      expect(screen.queryByText('ステージC')).not.toBeInTheDocument();
    });

    test('日付で絞り込んだ結果が正しく表示される', () => {
      // 5/30の出店者のみ
      const day30Only = testShops.filter((s) => s.dates.includes('5/30'));
      render(<ShopCardList shops={day30Only} />);

      expect(screen.getByText('販売ショップA')).toBeInTheDocument();
      expect(screen.getByText('ワークショップB')).toBeInTheDocument();
      expect(screen.queryByText('ステージC')).not.toBeInTheDocument();
    });

    test('カテゴリと日付の複合フィルタリング結果が正しく表示される', () => {
      // ステージ かつ 5/31
      const filtered = testShops.filter(
        (s) => s.category === 'ステージ' && s.dates.includes('5/31')
      );
      render(<ShopCardList shops={filtered} />);

      expect(screen.getByText('ステージC')).toBeInTheDocument();
      expect(screen.queryByText('販売ショップA')).not.toBeInTheDocument();
      expect(screen.queryByText('ワークショップB')).not.toBeInTheDocument();
    });
  });

  // --- 0件メッセージ ---
  describe('0件メッセージ', () => {
    test('空配列を渡すと「該当する出店者がありません」が表示される', () => {
      render(<ShopCardList shops={[]} />);

      expect(screen.getByText('該当する出店者がありません')).toBeInTheDocument();
    });

    test('空配列のとき出店者カードは表示されない', () => {
      render(<ShopCardList shops={[]} />);

      expect(screen.queryByText('販売ショップA')).not.toBeInTheDocument();
    });
  });
});
