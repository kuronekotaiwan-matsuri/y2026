import { render, screen } from '@testing-library/react';
import ShopCard from '@/components/shops/ShopCard/ShopCard';
import type { Shop } from '@/data/shops';

// ==============================================
// ShopCard コンポーネントのテスト
// カード情報表示・SNSリンク有無を検証する
// ==============================================

// テスト用の出店者データ（全フィールドあり）
const shopWithAllLinks: Shop = {
  id: 'test-001',
  name: 'テスト台湾茶房',
  category: '販売',
  dates: ['5/30', '5/31'],
  image: 'https://placehold.co/600x338',
  description: 'テスト用の説明文です。',
  instagramUrl: 'https://www.instagram.com/test',
  websiteUrl: 'https://example.com/test',
};

// テスト用の出店者データ（SNSリンクなし）
const shopWithoutLinks: Shop = {
  id: 'test-002',
  name: 'テスト花文字教室',
  category: 'ワークショップ',
  dates: ['5/30'],
  image: 'https://placehold.co/600x338',
  description: 'リンクなしの出店者です。',
};

// テスト用の出店者データ（Instagramのみ）
const shopWithInstagramOnly: Shop = {
  id: 'test-003',
  name: 'テストステージ',
  category: 'ステージ',
  dates: ['5/31'],
  image: 'https://placehold.co/600x338',
  description: 'Instagramのみの出店者です。',
  instagramUrl: 'https://www.instagram.com/stage_test',
};

describe('ShopCard コンポーネント', () => {
  // --- カード情報の表示 ---
  describe('カード情報の表示', () => {
    test('出店者名が表示される', () => {
      render(<ShopCard shop={shopWithAllLinks} />);
      expect(screen.getByText('テスト台湾茶房')).toBeInTheDocument();
    });

    test('カテゴリバッジが表示される', () => {
      render(<ShopCard shop={shopWithAllLinks} />);
      expect(screen.getByText('販売')).toBeInTheDocument();
    });

    test('説明文が表示される', () => {
      render(<ShopCard shop={shopWithAllLinks} />);
      expect(screen.getByText('テスト用の説明文です。')).toBeInTheDocument();
    });

    test('画像が表示される', () => {
      render(<ShopCard shop={shopWithAllLinks} />);
      const img = screen.getByAltText('テスト台湾茶房の出店イメージ');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://placehold.co/600x338');
    });

    test('両日出店の日付が正しく表示される', () => {
      render(<ShopCard shop={shopWithAllLinks} />);
      expect(screen.getByText('5/30(土)・5/31(日)')).toBeInTheDocument();
    });

    test('1日のみ出店の日付が正しく表示される', () => {
      render(<ShopCard shop={shopWithoutLinks} />);
      expect(screen.getByText('5/30(土)')).toBeInTheDocument();
    });
  });

  // --- SNSリンクの有無 ---
  describe('SNSリンクの有無', () => {
    test('Instagram と Webサイトのリンクが表示される', () => {
      render(<ShopCard shop={shopWithAllLinks} />);

      const instagramLink = screen.getByLabelText('テスト台湾茶房のInstagram');
      expect(instagramLink).toBeInTheDocument();
      expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/test');
      expect(instagramLink).toHaveAttribute('target', '_blank');
      expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');

      const websiteLink = screen.getByLabelText('テスト台湾茶房のWebサイト');
      expect(websiteLink).toBeInTheDocument();
      expect(websiteLink).toHaveAttribute('href', 'https://example.com/test');
      expect(websiteLink).toHaveAttribute('target', '_blank');
      expect(websiteLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('SNSリンクがない場合はリンクエリアが表示されない', () => {
      render(<ShopCard shop={shopWithoutLinks} />);

      expect(screen.queryByText('Instagram')).not.toBeInTheDocument();
      expect(screen.queryByText('Webサイト')).not.toBeInTheDocument();
    });

    test('Instagramのみの場合はInstagramのみ表示される', () => {
      render(<ShopCard shop={shopWithInstagramOnly} />);

      expect(screen.getByLabelText('テストステージのInstagram')).toBeInTheDocument();
      expect(screen.queryByText('Webサイト')).not.toBeInTheDocument();
    });
  });
});
