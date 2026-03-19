import { render, screen } from '@testing-library/react';
import Badge from '@/components/common/Badge/Badge';

describe('Badge コンポーネント', () => {
  // --- 各カテゴリで異なるクラスが適用される ---
  describe('カテゴリ別スタイル', () => {
    test('"販売" カテゴリで sales クラスが適用される', () => {
      render(<Badge category="販売" />);

      const badge = screen.getByText('販売');
      expect(badge).toBeInTheDocument();
      expect(badge.className).toContain('sales');
      expect(badge.className).toContain('badge');
    });

    test('"ワークショップ" カテゴリで workshop クラスが適用される', () => {
      render(<Badge category="ワークショップ" />);

      const badge = screen.getByText('ワークショップ');
      expect(badge).toBeInTheDocument();
      expect(badge.className).toContain('workshop');
      expect(badge.className).toContain('badge');
    });

    test('"ステージ" カテゴリで stage クラスが適用される', () => {
      render(<Badge category="ステージ" />);

      const badge = screen.getByText('ステージ');
      expect(badge).toBeInTheDocument();
      expect(badge.className).toContain('stage');
      expect(badge.className).toContain('badge');
    });
  });

  // --- 未知のカテゴリでデフォルトスタイルが適用される ---
  describe('デフォルトスタイル', () => {
    test('未知のカテゴリで other クラスが適用される', () => {
      render(<Badge category="特別イベント" />);

      const badge = screen.getByText('特別イベント');
      expect(badge).toBeInTheDocument();
      expect(badge.className).toContain('other');
      expect(badge.className).toContain('badge');
    });

    test('空文字カテゴリでも other クラスが適用される', () => {
      render(<Badge category="" />);

      // 空文字でもレンダリングされる（span 要素が存在する）
      const badges = document.querySelectorAll('[class*="badge"]');
      expect(badges.length).toBeGreaterThan(0);
      const badge = badges[0];
      expect(badge.className).toContain('other');
    });
  });

  // --- カテゴリテキストの表示確認 ---
  describe('テキスト表示', () => {
    test('カテゴリ名がバッジ内に表示される', () => {
      render(<Badge category="販売" />);
      expect(screen.getByText('販売')).toBeInTheDocument();
    });

    test('span 要素としてレンダリングされる', () => {
      render(<Badge category="ステージ" />);

      const badge = screen.getByText('ステージ');
      expect(badge.tagName).toBe('SPAN');
    });
  });
});
