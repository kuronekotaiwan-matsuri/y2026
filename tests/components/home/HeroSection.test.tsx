import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/home/HeroSection/HeroSection';

describe('HeroSection コンポーネント', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  // --- イベント名の表示 ---
  test('イベント名「黒猫台湾まつり2026」が h1 で表示される', () => {
    const heading = screen.getByRole('heading', {
      level: 1,
      name: '黒猫台湾まつり2026',
    });
    expect(heading).toBeInTheDocument();
  });

  // --- キャッチコピーの表示 ---
  test('キャッチコピーが表示される', () => {
    expect(
      screen.getByText('台湾の街角が、川崎にやってくる。')
    ).toBeInTheDocument();
  });

  // --- 開催日時の表示 ---
  test('開催日時が表示される', () => {
    expect(
      screen.getByText(/2026年5月30日\(土\)・31日\(日\)/)
    ).toBeInTheDocument();
    expect(screen.getByText(/11:00〜17:00/)).toBeInTheDocument();
  });

  // --- CTAボタンの表示とリンク先 ---
  test('CTAボタン「出店情報をみる」が /shops へのリンクとして表示される', () => {
    const ctaLink = screen.getByRole('link', { name: '出店情報をみる' });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute('href', '/shops');
  });
});
