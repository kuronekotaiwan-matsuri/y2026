import { render, screen } from "@testing-library/react";
import SectionContainer from "@/components/common/SectionContainer/SectionContainer";

describe("SectionContainer", () => {
  test("children を正しくレンダリングする", () => {
    render(
      <SectionContainer>
        <p>テストコンテンツ</p>
      </SectionContainer>
    );

    expect(screen.getByText("テストコンテンツ")).toBeInTheDocument();
  });

  test("section タグでレンダリングされる", () => {
    render(
      <SectionContainer>
        <p>内容</p>
      </SectionContainer>
    );

    const section = screen.getByText("内容").closest("section");
    expect(section).toBeInTheDocument();
  });

  test("id props が section 要素に適用される", () => {
    render(
      <SectionContainer id="test-section">
        <p>内容</p>
      </SectionContainer>
    );

    const section = document.getElementById("test-section");
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe("SECTION");
  });

  test("className props が section 要素に追加される", () => {
    render(
      <SectionContainer className="custom-class">
        <p>内容</p>
      </SectionContainer>
    );

    const section = screen.getByText("内容").closest("section");
    expect(section).toHaveClass("custom-class");
  });

  test("alt バリアントで alt クラスが付与される", () => {
    render(
      <SectionContainer alt>
        <p>内容</p>
      </SectionContainer>
    );

    const section = screen.getByText("内容").closest("section");
    expect(section).toHaveClass("alt");
  });

  test("alt が false の場合は alt クラスが付与されない", () => {
    render(
      <SectionContainer>
        <p>内容</p>
      </SectionContainer>
    );

    const section = screen.getByText("内容").closest("section");
    expect(section).not.toHaveClass("alt");
  });
});
