import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('トップページ', () => {
  beforeEach(() => {
    render(<Home />);
  });

  // --- 全セクションが表示される ---
  test('ヒーローセクションのイベント名が表示される', () => {
    expect(
      screen.getByRole('heading', { level: 1, name: '黒猫台湾まつり2026' })
    ).toBeInTheDocument();
  });

  test('開催情報セクションが表示される', () => {
    expect(
      screen.getByRole('heading', { name: '開催情報' })
    ).toBeInTheDocument();
  });

  test('特色紹介セクションが表示される', () => {
    expect(
      screen.getByRole('heading', { name: '黒猫台湾まつりの魅力' })
    ).toBeInTheDocument();
  });

  test('お問い合わせセクションが表示される', () => {
    expect(
      screen.getByRole('heading', { name: 'お問い合わせ' })
    ).toBeInTheDocument();
  });

  // --- JSON-LD 構造化データ ---
  test('JSON-LD 構造化データが script タグとして存在する', () => {
    const scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(scriptTag).toBeInTheDocument();

    const jsonLd = JSON.parse(scriptTag?.textContent ?? '{}');
    expect(jsonLd['@type']).toBe('Event');
    expect(jsonLd.name).toBe('黒猫台湾まつり2026');
    expect(jsonLd.startDate).toBe('2026-05-30T11:00:00+09:00');
    expect(jsonLd.endDate).toBe('2026-05-31T17:00:00+09:00');
    expect(jsonLd.location).toBeDefined();
    expect(jsonLd.isAccessibleForFree).toBe(true);
  });
});
