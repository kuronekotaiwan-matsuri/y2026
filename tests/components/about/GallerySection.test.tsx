import { render, screen } from '@testing-library/react';
import GallerySection from '@/components/about/GallerySection/GallerySection';

describe('GallerySection コンポーネント', () => {
  beforeEach(() => {
    render(<GallerySection />);
  });

  // --- セクションタイトル ---
  test('「過去の開催風景」セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', { name: '過去の開催風景' })
    ).toBeInTheDocument();
  });

  // --- 6枚の画像がレンダリングされる ---
  test('6枚の画像が表示される', () => {
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(6);
  });

  // --- 各画像に適切な alt 属性が設定されている ---
  test('各画像に適切な alt テキストが設定されている', () => {
    expect(
      screen.getByAltText('2025年黒猫台湾まつりの会場風景')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('台湾グルメブースの様子')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('ワークショップ体験の風景')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('ステージイベントの様子')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('来場者で賑わう会場の風景')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('台湾雑貨の物販ブースの様子')
    ).toBeInTheDocument();
  });

  // --- 画像の src 属性 ---
  test('各画像に正しい src が設定されている', () => {
    const images = screen.getAllByRole('img');
    images.forEach((img, index) => {
      expect(img).toHaveAttribute(
        'src',
        expect.stringContaining(`gallery-${index + 1}`)
      );
    });
  });
});
