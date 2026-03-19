import { render, screen } from '@testing-library/react';
import HighlightsSection from '@/components/about/HighlightsSection/HighlightsSection';

describe('HighlightsSection コンポーネント', () => {
  beforeEach(() => {
    render(<HighlightsSection />);
  });

  // --- セクションタイトル ---
  test('セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', {
        name: '楽しみ方いろいろ！黒猫台湾まつりの見どころ',
      })
    ).toBeInTheDocument();
  });

  // --- 3つのカードがレンダリングされる ---
  test('3つのカードが表示される', () => {
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3);
  });

  // --- 「物販ブース」カード ---
  test('「物販ブース」カードが正しく表示される', () => {
    expect(screen.getByText('物販ブース')).toBeInTheDocument();
    expect(
      screen.getByText(/台湾雑貨やフードの販売/)
    ).toBeInTheDocument();
  });

  // --- 「ワークショップ」カード ---
  test('「ワークショップ」カードが正しく表示される', () => {
    expect(screen.getByText('ワークショップ')).toBeInTheDocument();
    expect(
      screen.getByText(/台湾文化を体験できるハンズオンプログラム/)
    ).toBeInTheDocument();
  });

  // --- 「ステージイベント」カード ---
  test('「ステージイベント」カードが正しく表示される', () => {
    expect(screen.getByText('ステージイベント')).toBeInTheDocument();
    expect(
      screen.getByText(/トークショー、音楽ライブ/)
    ).toBeInTheDocument();
  });

  // --- カードタイトルの一致確認 ---
  test('カードタイトルが正しい順序で表示される', () => {
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings[0]).toHaveTextContent('物販ブース');
    expect(headings[1]).toHaveTextContent('ワークショップ');
    expect(headings[2]).toHaveTextContent('ステージイベント');
  });
});
