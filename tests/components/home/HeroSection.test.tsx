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

  // --- 開催終了の表示 ---
  test('開催終了のバッジが表示される', () => {
    expect(
      screen.getByText('2026年の開催は終了しました')
    ).toBeInTheDocument();
  });

  // --- お礼の表示 ---
  test('ご来場へのお礼が表示される', () => {
    expect(
      screen.getByText('ご来場ありがとうございました。')
    ).toBeInTheDocument();
  });

  // --- 開催日の記録 ---
  test('開催日が表示される', () => {
    expect(
      screen.getByText(/2026年5月30日\(土\)・31日\(日\)/)
    ).toBeInTheDocument();
  });

  // --- 2027年サイトへの誘導 ---
  test('CTAボタンが2027年公式サイトへの外部リンクとして表示される', () => {
    const ctaLink = screen.getByRole('link', {
      name: /黒猫台湾まつり2027 公式サイトをみる/,
    });
    expect(ctaLink).toHaveAttribute(
      'href',
      'https://kuronekotaiwan-matsuri.github.io/y2027/'
    );
    expect(ctaLink).toHaveAttribute('target', '_blank');
    expect(ctaLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // --- 開催前向けCTAの撤去 ---
  test('開催終了のため「予定に入れる」ボタンは表示されない', () => {
    expect(
      screen.queryByRole('link', { name: /予定に入れる/ })
    ).not.toBeInTheDocument();
  });
});
