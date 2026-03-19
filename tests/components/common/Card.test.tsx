import { render, screen } from '@testing-library/react';
import Card from '@/components/common/Card/Card';

describe('Card コンポーネント', () => {
  // --- 全 props を渡したレンダリング ---
  describe('全 props レンダリング', () => {
    test('image, title, description が正しく表示される', () => {
      render(
        <Card
          image="https://placehold.co/600x338"
          imageAlt="テスト画像の説明"
          title="テストタイトル"
          description="テストの説明文です"
        />
      );

      // タイトルが表示される
      expect(screen.getByText('テストタイトル')).toBeInTheDocument();

      // 説明文が表示される
      expect(screen.getByText('テストの説明文です')).toBeInTheDocument();

      // 画像が表示される
      const img = screen.getByAltText('テスト画像の説明');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://placehold.co/600x338');
    });
  });

  // --- children の表示確認 ---
  describe('children の表示', () => {
    test('children として渡した要素が表示される', () => {
      render(
        <Card title="カードタイトル">
          <button>アクションボタン</button>
        </Card>
      );

      expect(screen.getByText('カードタイトル')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'アクションボタン' })).toBeInTheDocument();
    });

    test('テキストの children が正しく表示される', () => {
      render(
        <Card title="タイトル">
          <p>追加コンテンツ</p>
        </Card>
      );

      expect(screen.getByText('追加コンテンツ')).toBeInTheDocument();
    });
  });

  // --- image 未指定時の動作 ---
  describe('image 未指定', () => {
    test('image 未指定時は画像エリアが表示されない', () => {
      render(<Card title="画像なしカード" description="説明文" />);

      // タイトルと説明は表示される
      expect(screen.getByText('画像なしカード')).toBeInTheDocument();
      expect(screen.getByText('説明文')).toBeInTheDocument();

      // img タグが存在しない
      const images = screen.queryAllByRole('img');
      expect(images).toHaveLength(0);
    });

    test('image 未指定でもカード自体は正常にレンダリングされる', () => {
      render(
        <Card title="最小構成カード">
          <span>子要素</span>
        </Card>
      );

      expect(screen.getByText('最小構成カード')).toBeInTheDocument();
      expect(screen.getByText('子要素')).toBeInTheDocument();
    });
  });

  // --- description 未指定時の動作 ---
  describe('description 未指定', () => {
    test('description 未指定時は説明文エリアが表示されない', () => {
      render(<Card title="タイトルのみ" />);

      expect(screen.getByText('タイトルのみ')).toBeInTheDocument();
      // description 用の p タグが存在しないことを確認
      const container = screen.getByText('タイトルのみ').closest('div');
      const paragraphs = container?.querySelectorAll('p');
      expect(paragraphs?.length ?? 0).toBe(0);
    });
  });
});
