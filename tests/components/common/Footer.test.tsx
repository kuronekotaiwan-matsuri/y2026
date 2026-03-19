import { render, screen } from "@testing-library/react";
import Footer from "@/components/common/Footer/Footer";

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

describe("Footer コンポーネント", () => {
  // 全5つのリンクが正しいhrefを持つこと
  it("全5つのサイト内リンクが正しいhrefで表示される", () => {
    render(<Footer />);

    const expectedLinks = [
      { label: "トップ", href: "/" },
      { label: "出店情報", href: "/shops" },
      { label: "黒猫台湾まつりについて", href: "/about" },
      { label: "お問合せ", href: "/contact-us" },
      { label: "プレスリリース", href: "/press" },
    ];

    expectedLinks.forEach(({ label, href }) => {
      const link = screen.getByText(label);
      expect(link).toBeInTheDocument();
      expect(link.closest("a")).toHaveAttribute("href", href);
    });
  });

  // 著作権テキストが表示されること
  it("著作権表記が正しく表示される", () => {
    render(<Footer />);
    expect(
      screen.getByText("© 2026 黒猫台湾まつり実行委員会")
    ).toBeInTheDocument();
  });

  // footer タグが使用されていること
  it("footer要素でレンダリングされる", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  // フッターロゴテキストが表示されること
  it("フッターロゴテキスト「黒猫台湾まつり2026」が表示される", () => {
    render(<Footer />);
    // ヘッダーのロゴとは別に、フッター内にもロゴテキストが存在する
    const logoTexts = screen.getAllByText("黒猫台湾まつり2026");
    expect(logoTexts.length).toBeGreaterThanOrEqual(1);
  });
});
