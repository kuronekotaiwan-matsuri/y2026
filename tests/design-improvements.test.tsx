/**
 * デザイン改善の統合テスト
 * 各修正項目が正しく反映されていることを確認する
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '@/components/common/Accordion/Accordion';
import Badge from '@/components/common/Badge/Badge';
import Button from '@/components/common/Button/Button';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

// next/link のモック
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    className,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    [key: string]: unknown;
  }) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return { __esModule: true, default: MockLink };
});

describe('デザイン改善テスト', () => {
  // --- 修正4: アコーディオンのSVGシェブロンアイコン ---
  describe('修正4: アコーディオンのSVGシェブロンアイコン', () => {
    const mockItems = [
      { question: 'テスト質問', answer: 'テスト回答' },
    ];

    test('テキストアイコン(▶/▼)ではなくSVG要素が使用されている', () => {
      const { container } = render(<Accordion items={mockItems} />);

      // SVGが存在すること
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();

      // テキストアイコンが存在しないこと
      expect(screen.queryByText('▶')).not.toBeInTheDocument();
      expect(screen.queryByText('▼')).not.toBeInTheDocument();
    });

    test('SVGにpolyline要素が含まれる', () => {
      const { container } = render(<Accordion items={mockItems} />);

      const polyline = container.querySelector('polyline');
      expect(polyline).toBeInTheDocument();
      expect(polyline).toHaveAttribute('points', '9 18 15 12 9 6');
    });
  });

  // --- 修正3: ボタンのホバー/アクティブ状態のクラス存在確認 ---
  describe('修正3: ボタンバリアント', () => {
    test('primaryバリアントのクラスが適用される', () => {
      render(<Button variant="primary">テスト</Button>);
      const button = screen.getByRole('button', { name: 'テスト' });
      expect(button.className).toContain('primary');
    });

    test('secondaryバリアントのクラスが適用される', () => {
      render(<Button variant="secondary">テスト</Button>);
      const button = screen.getByRole('button', { name: 'テスト' });
      expect(button.className).toContain('secondary');
    });
  });

  // --- 修正14: Button外部リンクサポート ---
  describe('修正14: Button外部リンク', () => {
    test('external propでaタグにtarget="_blank"が設定される', () => {
      render(
        <Button href="https://maps.google.com" external>
          Google Maps
        </Button>
      );

      const link = screen.getByRole('link', { name: 'Google Maps' });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  // --- 修正8: ヘッダーオーバーレイ ---
  describe('修正8: ヘッダーオーバーレイ', () => {
    test('オーバーレイ要素がDOMに存在する', () => {
      const { container } = render(<Header />);
      const overlay = container.querySelector('[aria-hidden="true"]');
      expect(overlay).toBeInTheDocument();
    });

    test('メニュー展開時にオーバーレイが表示状態になる', async () => {
      const user = userEvent.setup();
      const { container } = render(<Header />);

      const hamburger = screen.getByLabelText('メニューを開く');
      await user.click(hamburger);

      const overlay = container.querySelector('[aria-hidden="true"]');
      expect(overlay!.className).toContain('overlayVisible');
    });

    test('オーバーレイクリックでメニューが閉じる', async () => {
      const user = userEvent.setup();
      const { container } = render(<Header />);

      // メニューを開く
      await user.click(screen.getByLabelText('メニューを開く'));

      // オーバーレイをクリック
      const overlay = container.querySelector('[aria-hidden="true"]');
      await user.click(overlay!);

      // メニューが閉じたことを確認
      expect(screen.getByLabelText('メニューを開く')).toHaveAttribute(
        'aria-expanded',
        'false'
      );
    });
  });

  // --- 修正16: フッターロゴテキスト ---
  describe('修正16: フッターロゴテキスト', () => {
    test('フッターに「黒猫台湾まつり2026」ロゴテキストが表示される', () => {
      render(<Footer />);
      const logoTexts = screen.getAllByText('黒猫台湾まつり2026');
      expect(logoTexts.length).toBeGreaterThanOrEqual(1);
    });
  });

  // --- 修正10: BadgeのCSS変数使用（クラス名の存在確認） ---
  describe('修正10: Badgeバリアント', () => {
    test('「販売」カテゴリでsalesクラスが適用される', () => {
      render(<Badge category="販売" />);
      const badge = screen.getByText('販売');
      expect(badge.className).toContain('sales');
    });

    test('「ワークショップ」カテゴリでworkshopクラスが適用される', () => {
      render(<Badge category="ワークショップ" />);
      const badge = screen.getByText('ワークショップ');
      expect(badge.className).toContain('workshop');
    });

    test('「ステージ」カテゴリでstageクラスが適用される', () => {
      render(<Badge category="ステージ" />);
      const badge = screen.getByText('ステージ');
      expect(badge.className).toContain('stage');
    });
  });
});
