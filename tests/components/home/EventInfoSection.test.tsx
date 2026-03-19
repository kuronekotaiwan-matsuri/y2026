import { render, screen } from '@testing-library/react';
import EventInfoSection from '@/components/home/EventInfoSection/EventInfoSection';

describe('EventInfoSection コンポーネント', () => {
  beforeEach(() => {
    render(<EventInfoSection />);
  });

  // --- セクションタイトル ---
  test('「開催情報」セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', { name: '開催情報' })
    ).toBeInTheDocument();
  });

  // --- 日時の表示 ---
  test('日時情報が表示される', () => {
    expect(screen.getByText('日時')).toBeInTheDocument();
    expect(
      screen.getByText('2026年5月30日(土)・31日(日) 11:00〜17:00')
    ).toBeInTheDocument();
  });

  // --- 場所の表示 ---
  test('場所情報が表示される', () => {
    expect(screen.getByText('場所')).toBeInTheDocument();
    expect(
      screen.getByText(
        '川崎市高津区 田園都市線 二子新地駅〜高津駅付近 大山街道沿い'
      )
    ).toBeInTheDocument();
  });

  // --- 参加費の表示 ---
  test('参加費「無料」が表示される', () => {
    expect(screen.getByText('参加費')).toBeInTheDocument();
    expect(screen.getByText('無料')).toBeInTheDocument();
  });

  // --- 地図リンク（Buttonコンポーネント経由） ---
  test('Google Maps リンクが target="_blank" のButtonで表示される', () => {
    const mapLink = screen.getByText(/Google Maps で会場を確認する/);
    expect(mapLink).toBeInTheDocument();

    // Buttonコンポーネント経由のaタグ
    const linkElement = mapLink.closest('a');
    expect(linkElement).not.toBeNull();
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkElement).toHaveAttribute(
      'href',
      expect.stringContaining('maps.app.goo.gl')
    );
  });
});
