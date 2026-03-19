import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/common/Header/Header";

// next/link のモック
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("Header コンポーネント", () => {
  // ロゴがレンダリングされること
  it("ロゴテキストが表示される", () => {
    render(<Header />);
    expect(screen.getByText("黒猫台湾まつり2026")).toBeInTheDocument();
  });

  // ロゴがトップページへリンクしていること
  it("ロゴがトップページ(/)へのリンクである", () => {
    render(<Header />);
    const logo = screen.getByText("黒猫台湾まつり2026");
    expect(logo).toHaveAttribute("href", "/");
  });

  // 各ナビリンクがレンダリングされること
  it("全てのナビゲーションリンクが表示される", () => {
    render(<Header />);
    expect(screen.getByText("トップ")).toBeInTheDocument();
    expect(screen.getByText("出店情報")).toBeInTheDocument();
    expect(screen.getByText("黒猫台湾まつりについて")).toBeInTheDocument();
    expect(screen.getByText("お問合せ")).toBeInTheDocument();
  });

  // 各リンクのhrefが正しいこと
  it("各ナビリンクのhrefが正しい", () => {
    render(<Header />);
    expect(screen.getByText("トップ").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByText("出店情報").closest("a")).toHaveAttribute(
      "href",
      "/shops"
    );
    expect(
      screen.getByText("黒猫台湾まつりについて").closest("a")
    ).toHaveAttribute("href", "/about");
    expect(screen.getByText("お問合せ").closest("a")).toHaveAttribute(
      "href",
      "/contact-us"
    );
  });

  // Instagramリンクにtarget="_blank"が設定されていること
  it("Instagramリンクにtarget='_blank'が設定されている", () => {
    render(<Header />);
    const instagramLink = screen.getByLabelText("Instagram");
    expect(instagramLink).toHaveAttribute("target", "_blank");
    expect(instagramLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  // Instagramリンクのhrefが正しいこと
  it("Instagramリンクが正しいURLを持つ", () => {
    render(<Header />);
    const instagramLink = screen.getByLabelText("Instagram");
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/kuronekotaiwan_matsuri/"
    );
  });

  // ハンバーガーメニュークリックでメニューの表示が切り替わること
  it("ハンバーガーメニュークリックでaria-expandedが切り替わる", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const hamburger = screen.getByLabelText("メニューを開く");
    // 初期状態: メニューは閉じている
    expect(hamburger).toHaveAttribute("aria-expanded", "false");

    // クリックしてメニューを開く
    await user.click(hamburger);
    const hamburgerOpen = screen.getByLabelText("メニューを閉じる");
    expect(hamburgerOpen).toHaveAttribute("aria-expanded", "true");

    // もう一度クリックしてメニューを閉じる
    await user.click(hamburgerOpen);
    const hamburgerClosed = screen.getByLabelText("メニューを開く");
    expect(hamburgerClosed).toHaveAttribute("aria-expanded", "false");
  });

  // header タグが使用されていること
  it("header要素でレンダリングされる", () => {
    const { container } = render(<Header />);
    expect(container.querySelector("header")).toBeInTheDocument();
  });

  // オーバーレイが存在すること
  it("オーバーレイ要素が存在する", () => {
    const { container } = render(<Header />);
    const overlay = container.querySelector('[aria-hidden="true"]');
    expect(overlay).toBeInTheDocument();
  });

  // メニュー展開時にオーバーレイが表示される
  it("メニュー展開時にオーバーレイにvisibleクラスが付与される", async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);

    const hamburger = screen.getByLabelText("メニューを開く");
    await user.click(hamburger);

    const overlay = container.querySelector('[aria-hidden="true"]');
    expect(overlay!.className).toContain("overlayVisible");
  });

  // オーバーレイクリックでメニューが閉じる
  it("オーバーレイクリックでメニューが閉じる", async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);

    // メニューを開く
    const hamburger = screen.getByLabelText("メニューを開く");
    await user.click(hamburger);

    // オーバーレイをクリック
    const overlay = container.querySelector('[aria-hidden="true"]');
    await user.click(overlay!);

    // メニューが閉じていることを確認
    const hamburgerClosed = screen.getByLabelText("メニューを開く");
    expect(hamburgerClosed).toHaveAttribute("aria-expanded", "false");
  });
});
