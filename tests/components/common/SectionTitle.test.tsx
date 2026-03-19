import { render, screen } from "@testing-library/react";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";

describe("SectionTitle", () => {
  test("title を h2 タグで表示する", () => {
    render(<SectionTitle title="セクション見出し" />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "セクション見出し",
    });
    expect(heading).toBeInTheDocument();
  });

  test("subtitle がある場合にサブタイトルを表示する", () => {
    render(
      <SectionTitle title="メイン" subtitle="サブタイトルテキスト" />
    );

    expect(screen.getByText("サブタイトルテキスト")).toBeInTheDocument();
  });

  test("subtitle が未指定の場合はサブタイトルを表示しない", () => {
    render(<SectionTitle title="メインのみ" />);

    // サブタイトル用の p 要素が存在しないことを確認
    const heading = screen.getByRole("heading", { level: 2 });
    const wrapper = heading.parentElement;
    const paragraphs = wrapper?.querySelectorAll("p");
    expect(paragraphs?.length ?? 0).toBe(0);
  });

  test("title のテキストが正しく表示される", () => {
    render(<SectionTitle title="プログラム" />);

    expect(screen.getByText("プログラム")).toBeInTheDocument();
  });
});
