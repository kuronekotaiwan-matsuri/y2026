import { render, screen } from '@testing-library/react';
import FeaturesSection from '@/components/home/FeaturesSection/FeaturesSection';

describe('FeaturesSection コンポーネント', () => {
  beforeEach(() => {
    render(<FeaturesSection />);
  });

  // --- セクションタイトル ---
  test('「黒猫台湾まつりの魅力」セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', { name: '黒猫台湾まつりの魅力' })
    ).toBeInTheDocument();
  });

  // --- 3つのカードがレンダリングされる ---
  test('3つのカードが表示される', () => {
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3);
  });

  // --- 食文化カード ---
  test('「台湾グルメを味わう」カードが正しく表示される', () => {
    expect(screen.getByText('台湾グルメを味わう')).toBeInTheDocument();
    expect(
      screen.getByText(/小籠包、魯肉飯、タピオカミルクティー/)
    ).toBeInTheDocument();
  });

  // --- 文化交流カード ---
  test('「台湾文化を体験する」カードが正しく表示される', () => {
    expect(screen.getByText('台湾文化を体験する')).toBeInTheDocument();
    expect(
      screen.getByText(/台湾結びや花文字/)
    ).toBeInTheDocument();
  });

  // --- 地域活性化カード ---
  test('「まちを元気にする」カードが正しく表示される', () => {
    expect(screen.getByText('まちを元気にする')).toBeInTheDocument();
    expect(
      screen.getByText(/大山街道の商店街と連携/)
    ).toBeInTheDocument();
  });

  // --- 画像の alt 属性 ---
  test('各カードの画像に適切な alt テキストが設定されている', () => {
    expect(
      screen.getByAltText('台湾グルメの飲食ブースの様子')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('台湾文化のワークショップ体験の様子')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('地域交流イベントの様子')
    ).toBeInTheDocument();
  });
});
