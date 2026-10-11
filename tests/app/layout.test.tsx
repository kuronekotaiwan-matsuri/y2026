import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

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

// RootLayout は html/body を含むため、render 時に documentElement を直接操作しないよう
// children の中身だけをテストする。layout.tsx の default export を直接テストする。
// Next.js の metadata export はサーバー側で処理されるためテスト対象外。

describe("RootLayout コンポーネント", () => {
  // Header コンポーネントがレンダリングされること
  it("Header がレンダリングされる", () => {
    render(
      <RootLayout>
        <div>テストコンテンツ</div>
      </RootLayout>
    );

    // Header にはロゴテキストが含まれる（フッターにもあるためgetAllByTextを使用）
    const logos = screen.getAllByText("黒猫台湾まつり2026");
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });

  // Footer コンポーネントがレンダリングされること
  it("Footer がレンダリングされる", () => {
    render(
      <RootLayout>
        <div>テストコンテンツ</div>
      </RootLayout>
    );

    // Footer には著作権表記が含まれる
    expect(
      screen.getByText(/© 2026 黒猫台湾まつり実行委員会/)
    ).toBeInTheDocument();
  });

  // 開催終了のお知らせが全ページ共通で表示されること
  it("開催終了のお知らせ（2027年サイトへの誘導）がレンダリングされる", () => {
    render(
      <RootLayout>
        <div>テストコンテンツ</div>
      </RootLayout>
    );

    const notice = screen.getByRole("complementary", {
      name: "開催終了のお知らせ",
    });
    expect(notice).toBeInTheDocument();

    const link = screen.getByRole("link", {
      name: /黒猫台湾まつり2027 公式サイトへ/,
    });
    expect(link).toHaveAttribute(
      "href",
      "https://kuronekotaiwan-matsuri.github.io/y2027/"
    );
  });

  // children が正しくレンダリングされること
  it("children が main 要素内にレンダリングされる", () => {
    render(
      <RootLayout>
        <div data-testid="child-content">テストコンテンツ</div>
      </RootLayout>
    );

    // children が表示されること
    const childContent = screen.getByTestId("child-content");
    expect(childContent).toBeInTheDocument();
    expect(childContent).toHaveTextContent("テストコンテンツ");

    // children が main 要素内にあること
    const mainElement = childContent.closest("main");
    expect(mainElement).toBeInTheDocument();
  });
});
