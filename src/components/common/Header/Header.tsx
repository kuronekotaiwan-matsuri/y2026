"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

/** ナビゲーションリンクの定義 */
const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/shops", label: "出店情報" },
  { href: "/about", label: "黒猫台湾まつりについて" },
  { href: "/contact-us", label: "お問合せ" },
] as const;

/** Instagram公式アカウントのURL */
const instagramUrl =
  "https://www.instagram.com/kuronekotaiwan_matsuri/";

/**
 * Header コンポーネント
 * - sticky固定ヘッダー
 * - モバイルではハンバーガーメニューでナビゲーションを開閉
 * - デスクトップでは水平ナビゲーション
 */
export default function Header() {
  // モバイルメニューの開閉状態
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /** メニューの開閉を切り替える */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /** メニューリンクをクリックした時にメニューを閉じる */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // メニュー展開時にbodyのスクロールをロックする
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* ロゴ: トップページへのリンク */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          黒猫台湾まつり2026
        </Link>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span
            className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ""}`}
          />
          <span
            className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ""}`}
          />
          <span
            className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ""}`}
          />
        </button>

        {/* オーバーレイ（モバイルメニュー展開時の背景） */}
        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* ナビゲーション */}
        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="メインナビゲーション"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Instagramリンク */}
            <li className={styles.navItem}>
              <a
                href={instagramUrl}
                className={styles.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                {/* Instagram SVGアイコン */}
                <svg
                  className={styles.instagramIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
