import { render, screen } from '@testing-library/react';
import PressRelease from '@/components/press/PressRelease/PressRelease';

describe('PressRelease コンポーネント', () => {
  beforeEach(() => {
    render(<PressRelease />);
  });

  // --- ヘッダーセクション ---
  describe('ヘッダー', () => {
    test('「プレスリリース / 新聞稿」タイトルが表示される', () => {
      expect(
        screen.getByRole('heading', { name: 'プレスリリース / 新聞稿' })
      ).toBeInTheDocument();
    });

    test('「報道関係者各位」テキストが表示される', () => {
      expect(screen.getByText('報道関係者各位')).toBeInTheDocument();
    });
  });

  // --- リード文 ---
  test('リード文が表示される', () => {
    expect(
      screen.getByText(
        /台湾文化を五感で楽しむ2日間/
      )
    ).toBeInTheDocument();
  });

  // --- イベント詳細 ---
  describe('イベント詳細', () => {
    test('「イベント詳細」セクションが存在する', () => {
      expect(
        screen.getByRole('heading', { name: 'イベント詳細' })
      ).toBeInTheDocument();
    });

    test('イベント名称が正確に表示される', () => {
      expect(screen.getByText('黒猫台湾まつり2026')).toBeInTheDocument();
    });

    test('開催日時が正確に表示される', () => {
      expect(
        screen.getByText('2026年5月30日(土)・31日(日) 11:00〜17:00')
      ).toBeInTheDocument();
    });

    test('会場情報が表示される', () => {
      expect(
        screen.getByText(/川崎市高津区 大山街道沿い/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/駄菓子の木村屋/)
      ).toBeInTheDocument();
    });

    test('入場料が「無料」と表示される', () => {
      expect(screen.getByText('無料')).toBeInTheDocument();
    });
  });

  // --- 見どころセクション ---
  test('「見どころ」セクションが存在する', () => {
    expect(
      screen.getByRole('heading', { name: '見どころ' })
    ).toBeInTheDocument();
  });

  // --- 来場案内セクション ---
  test('「来場案内」セクションが存在する', () => {
    expect(
      screen.getByRole('heading', { name: '来場案内' })
    ).toBeInTheDocument();
  });

  // --- お問い合わせセクション ---
  describe('お問い合わせ', () => {
    test('「お問い合わせ」セクションが存在する', () => {
      expect(
        screen.getByRole('heading', { name: 'お問い合わせ' })
      ).toBeInTheDocument();
    });

    test('メールリンクが mailto: で表示される', () => {
      const emailLink = screen.getByText('kuronekotaiwan.matsuri@gmail.com');
      const anchor = emailLink.closest('a')!;

      expect(anchor).toHaveAttribute(
        'href',
        'mailto:kuronekotaiwan.matsuri@gmail.com'
      );
    });
  });

  // --- 素材提供セクション ---
  test('「素材提供」セクションが存在する', () => {
    expect(
      screen.getByRole('heading', { name: '素材提供' })
    ).toBeInTheDocument();
  });

  // --- 全セクションの見出しが揃っているか ---
  test('全5つのh2セクションが存在する', () => {
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings).toHaveLength(5);
  });
});
