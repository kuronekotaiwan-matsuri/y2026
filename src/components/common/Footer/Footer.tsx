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
