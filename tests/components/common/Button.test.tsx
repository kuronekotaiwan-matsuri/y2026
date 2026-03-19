import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/common/Button/Button';

// next/link のモック（aタグとして描画する）
jest.mock('next/link', () => {
  const MockLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return { __esModule: true, default: MockLink };
});

describe('Button コンポーネント', () => {
  // --- primary バリアントのレンダリング ---
  describe('primary バリアント', () => {
    test('デフォルトで primary スタイルが適用される', () => {
      render(<Button>テストボタン</Button>);

      const button = screen.getByRole('button', { name: 'テストボタン' });
      expect(button).toBeInTheDocument();
      // identity-obj-proxy により CSS Modules のクラス名は文字列そのままが返る
      expect(button.className).toContain('primary');
    });

    test('variant="primary" を明示指定しても primary スタイルが適用される', () => {
      render(<Button variant="primary">プライマリ</Button>);

      const button = screen.getByRole('button', { name: 'プライマリ' });
      expect(button.className).toContain('primary');
    });
  });

  // --- secondary バリアントのレンダリング ---
  describe('secondary バリアント', () => {
    test('variant="secondary" で secondary スタイルが適用される', () => {
      render(<Button variant="secondary">セカンダリ</Button>);

      const button = screen.getByRole('button', { name: 'セカンダリ' });
      expect(button).toBeInTheDocument();
      expect(button.className).toContain('secondary');
    });
  });

  // --- href 指定時に a タグ、未指定時に button タグ ---
  describe('タグの切り替え', () => {
    test('href 未指定時は button タグでレンダリングされる', () => {
      render(<Button>ボタン</Button>);

      const button = screen.getByRole('button', { name: 'ボタン' });
      expect(button.tagName).toBe('BUTTON');
    });

    test('href 指定時は a タグでレンダリングされる', () => {
      render(<Button href="/shops">リンクボタン</Button>);

      const link = screen.getByRole('link', { name: 'リンクボタン' });
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('href', '/shops');
    });
  });

  // --- onClick ハンドラの発火確認 ---
  describe('onClick ハンドラ', () => {
    test('ボタンクリック時に onClick が呼ばれる', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>クリック</Button>);

      const button = screen.getByRole('button', { name: 'クリック' });
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  // --- 外部リンクの場合 ---
  describe('外部リンク', () => {
    test('external=true の場合、target="_blank" と rel が設定される', () => {
      render(
        <Button href="https://example.com" external>
          外部リンク
        </Button>
      );

      const link = screen.getByRole('link', { name: '外部リンク' });
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    test('external=false（デフォルト）の場合、Linkコンポーネントで描画される', () => {
      render(<Button href="/shops">内部リンク</Button>);

      const link = screen.getByRole('link', { name: '内部リンク' });
      expect(link).not.toHaveAttribute('target');
    });
  });

  // --- children の表示確認 ---
  describe('children の表示', () => {
    test('テキストの children が正しく表示される', () => {
      render(<Button>出店情報を見る</Button>);

      expect(screen.getByText('出店情報を見る')).toBeInTheDocument();
    });

    test('JSX の children が正しく表示される', () => {
      render(
        <Button>
          <span data-testid="icon">★</span>
          詳細を見る
        </Button>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('詳細を見る')).toBeInTheDocument();
    });
  });
});
