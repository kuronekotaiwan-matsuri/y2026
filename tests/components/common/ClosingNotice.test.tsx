import { render, screen } from '@testing-library/react';
import ClosingNotice from '@/components/common/ClosingNotice/ClosingNotice';

describe('ClosingNotice コンポーネント', () => {
  beforeEach(() => {
    render(<ClosingNotice />);
  });

  // aside 要素（complementary ロール）としてレンダリングされること
  test('「開催終了のお知らせ」というラベル付きの aside でレンダリングされる', () => {
    expect(
      screen.getByRole('complementary', { name: '開催終了のお知らせ' })
    ).toBeInTheDocument();
  });

  // 開催終了とお礼の文言が表示されること
  test('開催終了とお礼の文言が表示される', () => {
    expect(
      screen.getByText('黒猫台湾まつり2026は終了しました。')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/たくさんのご来場、ありがとうございました/)
    ).toBeInTheDocument();
  });

  // 2027年の企画開始の案内が表示されること
  test('2027年の企画がスタートした旨の案内が表示される', () => {
    expect(
      screen.getByText(/次回「黒猫台湾まつり2027」の企画がスタートしました/)
    ).toBeInTheDocument();
  });

  // 2027年公式サイトへのリンクが正しいこと
  test('2027年公式サイトへのリンクが新しいタブで開く外部リンクとして表示される', () => {
    const link = screen.getByRole('link', {
      name: /黒猫台湾まつり2027 公式サイトへ/,
    });
    expect(link).toHaveAttribute(
      'href',
      'https://kuronekotaiwan-matsuri.github.io/y2027/'
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
