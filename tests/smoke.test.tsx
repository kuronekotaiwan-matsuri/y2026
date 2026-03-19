import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Jestの起動確認用スモークテスト
describe("スモークテスト", () => {
  test("トップページが正常にレンダリングされる", () => {
    render(<Home />);

    // イベント名が表示されていることを確認
    const heading = screen.getByRole("heading", {
      name: "黒猫台湾まつり2026",
    });
    expect(heading).toBeInTheDocument();
  });

  test("開催情報が表示される", () => {
    render(<Home />);

    // 開催日情報が表示されていることを確認
    const descriptions = screen.getAllByText(/2026年5月30日/);
    expect(descriptions.length).toBeGreaterThan(0);
  });
});
