"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useFadeIn カスタムフック
 *
 * Intersection Observer APIを使用し、要素がビューポートに入った時に
 * フェードインアニメーションを適用する。
 * - 一度表示されたら再度非表示にならない（一方向）
 * - SSR環境（IntersectionObserver未定義）でもエラーが発生しない
 *
 * @returns { ref, className } - 対象要素に付与するrefとCSSクラス名
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // SSR環境やIntersectionObserver非対応ブラウザでの安全対策
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // IntersectionObserverで要素の表示を監視する
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 一度表示されたら監視を解除する
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    // クリーンアップ: コンポーネントのアンマウント時にobserverを解除
    return () => {
      observer.disconnect();
    };
  }, []);

  // 表示状態に応じたCSSクラスを返す
  const className = isVisible ? "fadeIn fadeInVisible" : "fadeIn";

  return { ref, className };
}
