import Link from "next/link";
import styles from "./Footer.module.css";

/** サイトの最終更新日（手動更新） */
const LAST_UPDATED = "2026-04-30";

/** フッターに表示するサイト内リンクの定義 */
const footerLinks = [
  { href: "/", label: "トップ" },
  { href: "/shops", label: "出店情報" },
  { href: "/about", label: "黒猫台湾まつりについて" },
  { href: "/contact-us", label: "お問合せ" },
  { href: "/press", label: "プレスリリース" },
] as const;

/** ボランティア募集フォーム（外部リンク） */
const VOLUNTEER_FORM_URL = "https://forms.gle/ppvScJQS9vJk3PiM8";

/**
 * Footer コンポーネント
 * - サイト内リンク一覧
 * - 著作権表記
 * - レスポンシブ: モバイルではリンクを縦並び、デスクトップでは横並び
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* フッターロゴテキスト */}
        <p className={styles.logoText}>黒猫台湾まつり2026</p>

        {/* サイト内リンク */}
        <nav className={styles.nav} aria-label="フッターナビゲーション">
          <ul className={styles.linkList}>
            {footerLinks.map((link) => (
              <li key={link.href} className={styles.linkItem}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
            {/* ボランティア募集（外部リンク: Google Form） */}
            <li className={styles.linkItem}>
              <a
                href={VOLUNTEER_FORM_URL}
                className={styles.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                ボランティア募集
                <svg
                  className={styles.externalIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className={styles.srOnly}>（新しいタブで開きます）</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* 最終更新日（フレッシュネスシグナル） */}
        <p className={styles.lastUpdated}>
          最終更新日: <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>
        </p>

        {/* 著作権表記 */}
        <p className={styles.copyright}>
          &copy; 2026 黒猫台湾まつり実行委員会
        </p>
      </div>
    </footer>
  );
}
