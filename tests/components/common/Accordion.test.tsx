import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '@/components/common/Accordion/Accordion';

// テスト用のアコーディオンデータ
const mockItems = [
  { question: '質問1: 開催日はいつですか？', answer: '回答1: 2026年5月に開催予定です。' },
  { question: '質問2: 入場料はかかりますか？', answer: '回答2: 入場無料です。' },
  { question: '質問3: ペットは入場できますか？', answer: '回答3: ペットの入場はご遠慮ください。' },
];

describe('Accordion コンポーネント', () => {
  // --- 質問・回答テキストの表示 ---
  describe('テキスト表示', () => {
    test('全ての質問テキストが表示される', () => {
      render(<Accordion items={mockItems} />);

      mockItems.forEach((item) => {
        expect(screen.getByText(item.question)).toBeInTheDocument();
      });
    });

    test('全ての回答テキストがDOM内に存在する', () => {
      render(<Accordion items={mockItems} />);

      // 回答テキストはDOM上に存在する（ただし初期状態ではパネルは閉じている）
      mockItems.forEach((item) => {
        expect(screen.getByText(item.answer)).toBeInTheDocument();
      });
    });
  });

  // --- クリックで開閉切り替え ---
  describe('開閉動作', () => {
    test('質問をクリックすると開き、もう一度クリックすると閉じる', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);

      const firstButton = screen.getByText('質問1: 開催日はいつですか？').closest('button')!;

      // 初期状態: 閉じている
      expect(firstButton).toHaveAttribute('aria-expanded', 'false');

      // クリックで開く
      await user.click(firstButton);
      expect(firstButton).toHaveAttribute('aria-expanded', 'true');

      // もう一度クリックで閉じる
      await user.click(firstButton);
      expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  // --- 複数同時展開 ---
  describe('複数同時展開', () => {
    test('複数の項目を同時に開ける', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);

      const firstButton = screen.getByText('質問1: 開催日はいつですか？').closest('button')!;
      const secondButton = screen.getByText('質問2: 入場料はかかりますか？').closest('button')!;

      // 1つ目を開く
      await user.click(firstButton);
      expect(firstButton).toHaveAttribute('aria-expanded', 'true');

      // 2つ目を開く（1つ目は開いたまま）
      await user.click(secondButton);
      expect(firstButton).toHaveAttribute('aria-expanded', 'true');
      expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('1つを閉じても他は開いたまま', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);

      const firstButton = screen.getByText('質問1: 開催日はいつですか？').closest('button')!;
      const secondButton = screen.getByText('質問2: 入場料はかかりますか？').closest('button')!;

      // 両方開く
      await user.click(firstButton);
      await user.click(secondButton);

      // 1つ目を閉じる
      await user.click(firstButton);
      expect(firstButton).toHaveAttribute('aria-expanded', 'false');
      expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  // --- aria-expanded の連動 ---
  describe('アクセシビリティ', () => {
    test('各トリガーに aria-expanded 属性が設定されている', () => {
      render(<Accordion items={mockItems} />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(mockItems.length);

      // 初期状態は全て閉じている
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });

    test('各トリガーに aria-controls が設定されている', () => {
      render(<Accordion items={mockItems} />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button, index) => {
        expect(button).toHaveAttribute('aria-controls', `accordion-panel-${index}`);
      });
    });

    test('各パネルに role="region" と aria-labelledby が設定されている', () => {
      render(<Accordion items={mockItems} />);

      const regions = screen.getAllByRole('region');
      expect(regions).toHaveLength(mockItems.length);

      regions.forEach((region, index) => {
        expect(region).toHaveAttribute('aria-labelledby', `accordion-button-${index}`);
      });
    });
  });

  // --- 空配列の場合 ---
  describe('空配列', () => {
    test('items が空配列の場合でもエラーなくレンダリングされる', () => {
      render(<Accordion items={[]} />);

      const buttons = screen.queryAllByRole('button');
      expect(buttons).toHaveLength(0);
    });
  });

  // --- SVGシェブロンアイコンの表示 ---
  describe('SVGシェブロンアイコン', () => {
    test('各トリガーにSVGアイコンが含まれる', () => {
      const { container } = render(<Accordion items={mockItems} />);

      const svgs = container.querySelectorAll('svg');
      expect(svgs).toHaveLength(mockItems.length);
    });

    test('開閉時にアイコンの回転クラスが切り替わる', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={mockItems} />);

      // 最初のアイコンのspanを取得
      const firstIconSpan = container.querySelector('[aria-hidden="true"]');
      expect(firstIconSpan).not.toBeNull();

      // 初期状態: iconOpenクラスが付与されていない
      expect(firstIconSpan!.className).not.toContain('iconOpen');

      // クリックで開く
      const firstButton = screen.getByText('質問1: 開催日はいつですか？').closest('button')!;
      await user.click(firstButton);

      // 開いた状態: iconOpenクラスが付与される
      const openIconSpan = container.querySelector('[aria-hidden="true"]');
      expect(openIconSpan!.className).toContain('iconOpen');
    });
  });
});
