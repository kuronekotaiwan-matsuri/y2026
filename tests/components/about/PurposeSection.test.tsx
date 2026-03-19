import { render, screen } from '@testing-library/react';
import PurposeSection from '@/components/about/PurposeSection/PurposeSection';

describe('PurposeSection コンポーネント', () => {
  beforeEach(() => {
    render(<PurposeSection />);
  });

  // --- セクションタイトルの表示 ---
  test('「黒猫台湾まつりとは」セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', { name: '黒猫台湾まつりとは' })
    ).toBeInTheDocument();
  });

  // --- リード文の表示 ---
  test('リード文が表示される', () => {
    expect(
      screen.getByText(/黒猫台湾まつりは、地元の経済発展とともに/)
    ).toBeInTheDocument();
  });

  // --- 3つのテーマがレンダリングされる ---
  test('3つのテーマが表示される', () => {
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3);
  });

  // --- 「町おこしの一環として」テーマ ---
  test('「町おこしの一環として」テーマが正しく表示される', () => {
    expect(screen.getByText('町おこしの一環として')).toBeInTheDocument();
    expect(
      screen.getByText(/川崎市高津区の大山街道沿いの地域活性化/)
    ).toBeInTheDocument();
  });

  // --- 「台湾文化の発信」テーマ ---
  test('「台湾文化の発信」テーマが正しく表示される', () => {
    expect(screen.getByText('台湾文化の発信')).toBeInTheDocument();
    expect(
      screen.getByText(/台湾の食文化、工芸、音楽などを通じて/)
    ).toBeInTheDocument();
  });

  // --- 「地域交流の場」テーマ ---
  test('「地域交流の場」テーマが正しく表示される', () => {
    expect(screen.getByText('地域交流の場')).toBeInTheDocument();
    expect(
      screen.getByText(/世代や国籍を超えた交流を生み出します/)
    ).toBeInTheDocument();
  });

  // --- 各テーマの画像 alt 属性 ---
  test('各テーマの画像に適切な alt テキストが設定されている', () => {
    expect(
      screen.getByAltText('町おこし・地域活性化のイメージ')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('台湾文化の発信イメージ')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('地域交流の場のイメージ')
    ).toBeInTheDocument();
  });
});
