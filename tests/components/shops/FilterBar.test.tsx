import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '@/components/shops/FilterBar/FilterBar';
import type { FilterState } from '@/components/shops/FilterBar/FilterBar';

// ==============================================
// FilterBar コンポーネントのテスト
// ボタンレンダリング・トグル動作・コールバック呼び出しを検証
// ==============================================

describe('FilterBar コンポーネント', () => {
  // テスト用のモック関数
  const mockOnFilterChange = jest.fn();
  // console.errorを監視し、React警告をテスト失敗として検出する
  const originalConsoleError = console.error;

  beforeEach(() => {
    mockOnFilterChange.mockClear();
    console.error = jest.fn((...args: unknown[]) => {
      // 「Cannot update a component while rendering」等のReact警告を検出
      const message = String(args[0]);
      if (message.includes('Cannot update a component')) {
        throw new Error(`React warning detected: ${message}`);
      }
      originalConsoleError.call(console, ...args);
    });
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  // --- 全ボタンのレンダリング ---
  describe('全ボタンのレンダリング', () => {
    test('カテゴリフィルターのボタンが全て表示される', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      expect(screen.getByText('販売')).toBeInTheDocument();
      expect(screen.getByText('ワークショップ')).toBeInTheDocument();
      expect(screen.getByText('ステージ')).toBeInTheDocument();
    });

    test('日付フィルターのボタンが全て表示される', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      expect(screen.getByText('5/30（土）')).toBeInTheDocument();
      expect(screen.getByText('5/31（日）')).toBeInTheDocument();
    });

    test('フィルターラベルが表示される', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      expect(screen.getByText('カテゴリ')).toBeInTheDocument();
      expect(screen.getByText('日付')).toBeInTheDocument();
    });

    test('初期状態で全てのボタンが選択状態（aria-pressed=true）', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('aria-pressed', 'true');
      });
    });
  });

  // --- カテゴリボタンのトグル動作 ---
  describe('カテゴリボタンのトグル動作', () => {
    test('カテゴリボタンクリックで選択解除される', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      const salesButton = screen.getByText('販売');
      fireEvent.click(salesButton);

      // コールバックが呼ばれ、販売が除外されていることを確認
      expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
      const callArg: FilterState = mockOnFilterChange.mock.calls[0][0];
      expect(callArg.categories).not.toContain('販売');
      expect(callArg.categories).toContain('ワークショップ');
      expect(callArg.categories).toContain('ステージ');
    });

    test('選択解除後に再クリックで選択状態に戻る', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      const salesButton = screen.getByText('販売');

      // 1回目: 選択解除
      fireEvent.click(salesButton);
      // 2回目: 再選択
      fireEvent.click(salesButton);

      expect(mockOnFilterChange).toHaveBeenCalledTimes(2);
      const secondCallArg: FilterState = mockOnFilterChange.mock.calls[1][0];
      expect(secondCallArg.categories).toContain('販売');
    });
  });

  // --- 日付ボタンのトグル動作 ---
  describe('日付ボタンのトグル動作', () => {
    test('日付ボタンクリックで選択解除される', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      const day30Button = screen.getByText('5/30（土）');
      fireEvent.click(day30Button);

      expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
      const callArg: FilterState = mockOnFilterChange.mock.calls[0][0];
      expect(callArg.dates).not.toContain('5/30');
      expect(callArg.dates).toContain('5/31');
    });

    test('日付ボタンの選択解除後に再クリックで戻る', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      const day31Button = screen.getByText('5/31（日）');

      // 1回目: 選択解除
      fireEvent.click(day31Button);
      // 2回目: 再選択
      fireEvent.click(day31Button);

      expect(mockOnFilterChange).toHaveBeenCalledTimes(2);
      const secondCallArg: FilterState = mockOnFilterChange.mock.calls[1][0];
      expect(secondCallArg.dates).toContain('5/31');
    });
  });

  // --- コールバック呼び出し ---
  describe('コールバック呼び出し', () => {
    test('カテゴリと日付の状態が正しく通知される', () => {
      render(<FilterBar onFilterChange={mockOnFilterChange} />);

      // 「販売」を解除
      fireEvent.click(screen.getByText('販売'));
      // 「5/31（日）」を解除
      fireEvent.click(screen.getByText('5/31（日）'));

      expect(mockOnFilterChange).toHaveBeenCalledTimes(2);

      // 2回目の呼び出し: 販売が除外 + 5/31が除外
      const secondCall: FilterState = mockOnFilterChange.mock.calls[1][0];
      expect(secondCall.categories).not.toContain('販売');
      expect(secondCall.dates).not.toContain('5/31');
    });
  });
});
