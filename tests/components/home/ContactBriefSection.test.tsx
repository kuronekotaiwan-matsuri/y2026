import { render, screen } from '@testing-library/react';
import ContactBriefSection from '@/components/home/ContactBriefSection/ContactBriefSection';

describe('ContactBriefSection コンポーネント', () => {
  beforeEach(() => {
    render(<ContactBriefSection />);
  });

  // --- セクションタイトル ---
  test('「最新情報・お問い合わせ」セクションタイトルが表示される', () => {
    expect(
      screen.getByRole('heading', { name: '最新情報・お問い合わせ' })
    ).toBeInTheDocument();
  });

  // --- Instagram リンク ---
  test('Instagram リンクが target="_blank" で表示される', () => {
    const igLink = screen.getByText('@kuronekotw_fes');
    expect(igLink.closest('a')).toHaveAttribute('target', '_blank');
    expect(igLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
    expect(igLink.closest('a')).toHaveAttribute(
      'href',
      expect.stringContaining('instagram.com/kuronekotw_fes')
    );
  });

  // --- メールリンク ---
  test('メールリンクが mailto: で表示される', () => {
    const emailLink = screen.getByText('kuronekotaiwan.matsuri@gmail.com');
    expect(emailLink.closest('a')).toHaveAttribute(
      'href',
      'mailto:kuronekotaiwan.matsuri@gmail.com'
    );
  });
});
