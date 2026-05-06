import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FaqSection from '@/components/contact/FaqSection/FaqSection';
import { faqItems } from '@/data/faq';

describe('FaqSection コンポーネント', () => {
  beforeEach(() => {
    render(<FaqSection />);
  });

  // --- セクションタイトル ---
  test('「よくある質問」セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', { name: 'よくある質問' })
    ).toBeInTheDocument();
  });

  // --- 8つの質問が全てレンダリングされる ---
  test('8つの質問テキストが全て表示される', () => {
    faqItems.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  test('FAQデータは8件である', () => {
    expect(faqItems).toHaveLength(8);
  });

  // --- 全ての回答テキストがDOM内に存在する ---
  test('全ての回答テキストがDOM内に存在する', () => {
    faqItems.forEach((item) => {
      if (typeof item.answer === 'string') {
        expect(screen.getByText(item.answer)).toBeInTheDocument();
      }
    });
  });

  // --- トイレ回答内のチラシリンク ---
  test('トイレ回答にチラシPDFへのリンクが含まれる', () => {
    const link = screen.getByRole('link', { name: 'チラシ' });
    expect(link).toHaveAttribute('href', '/y2026/flyer/flyer-2026-front.pdf');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // --- クリックで回答が表示される ---
  test('質問をクリックするとaria-expandedがtrueになる', async () => {
    const user = userEvent.setup();

    // 最初の質問ボタンを取得
    const firstButton = screen
      .getByText(faqItems[0].question)
      .closest('button')!;

    // 初期状態: 閉じている
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');

    // クリックで開く
    await user.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });

  // --- 各質問にボタンが存在する ---
  test('各質問はbutton要素としてレンダリングされる', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(8);
  });

  // --- ボランティア募集回答内のフォームリンク ---
  test('ボランティア募集回答にGoogleフォームへのリンクが含まれる', () => {
    const link = screen.getByRole('link', { name: 'ボランティア募集フォーム' });
    expect(link).toHaveAttribute('href', 'https://forms.gle/ppvScJQS9vJk3PiM8');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
