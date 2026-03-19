import { renderHook } from "@testing-library/react";
import { useFadeIn } from "@/hooks/useFadeIn";

describe("useFadeIn フック", () => {
  // refオブジェクトを返すこと
  it("refオブジェクトを返す", () => {
    const { result } = renderHook(() => useFadeIn());
    expect(result.current.ref).toBeDefined();
    expect(result.current.ref).toHaveProperty("current");
  });

  // classNameを返すこと
  it("classNameを返す", () => {
    const { result } = renderHook(() => useFadeIn());
    expect(typeof result.current.className).toBe("string");
    expect(result.current.className).toContain("fadeIn");
  });

  // IntersectionObserverがundefinedの場合にエラーが発生しないこと
  it("IntersectionObserverがundefinedでもエラーが発生しない", () => {
    // IntersectionObserverを一時的にundefinedに設定
    const originalIO = globalThis.IntersectionObserver;
    // @ts-expect-error -- テスト用にIntersectionObserverをundefinedに設定
    globalThis.IntersectionObserver = undefined;

    expect(() => {
      const { result } = renderHook(() => useFadeIn());
      // IntersectionObserverがない場合、表示状態になる
      expect(result.current.className).toContain("fadeInVisible");
    }).not.toThrow();

    // IntersectionObserverを元に戻す
    globalThis.IntersectionObserver = originalIO;
  });

  // classNameにfadeInが含まれること
  it("classNameにfadeInクラスが含まれる", () => {
    const { result } = renderHook(() => useFadeIn());
    expect(result.current.className).toContain("fadeIn");
  });
});
