import { render, screen } from '@testing-library/react';
import ContactInfoSection from '@/components/contact/ContactInfoSection/ContactInfoSection';

describe('ContactInfoSection コンポーネント', () => {
  beforeEach(() => {
    render(<ContactInfoSection />);
  });

  // --- セクションタイトル ---
  test('「お問い合わせ」セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', { name: 'お問い合わせ' })
    ).toBeInTheDocument();
  });

  // --- 3つの連絡先が表示される ---
  test('3つの連絡先アイテムが表示される', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  // --- Instagram リンク ---
  test('Instagram リンクが正しいURLで表示される', () => {
    const igLink = screen.getByText('@kuronekotw_fes');
    const anchor = igLink.closest('a')!;

    expect(anchor).toHaveAttribute(
      'href',
      'https://www.instagram.com/kuronekotw_fes'
    );
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // --- メールリンク ---
  test('メールリンクが mailto: で表示される', () => {
    const emailLink = screen.getByText('kuronekotaiwan.matsuri@gmail.com');
    const anchor = emailLink.closest('a')!;

    expect(anchor).toHaveAttribute(
      'href',
      'mailto:kuronekotaiwan.matsuri@gmail.com'
    );
  });

  // --- 住所テキスト ---
  test('住所テキストが表示される', () => {
    expect(
      screen.getByText(
        '神奈川県川崎市高津区二子2丁目8-8 ウッディモアル 駄菓子の木村屋'
      )
    ).toBeInTheDocument();
  });

  // --- ラベルの表示 ---
  test('Instagram・メール・住所のラベルが表示される', () => {
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('メール')).toBeInTheDocument();
    expect(screen.getByText('住所')).toBeInTheDocument();
  });
});
