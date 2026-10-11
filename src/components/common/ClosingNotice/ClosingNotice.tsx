import { NEXT_EVENT_NAME, NEXT_EVENT_URL } from '@/data/nextEvent';
import styles from './ClosingNotice.module.css';

/**
 * 開催終了のお知らせバナー
 * 全ページのヘッダー直下に表示し、2026年の開催終了のお礼と
 * 次回（2027年）公式サイトへの誘導を行う。
 */
export default function ClosingNotice() {
  return (
    <aside className={styles.notice} aria-label="開催終了のお知らせ">
      <div className={styles.inner}>
        {/* 開催終了 + お礼 */}
        <p className={styles.message}>
          <strong className={styles.strong}>黒猫台湾まつり2026は終了しました。</strong>
          たくさんのご来場、ありがとうございました！
        </p>

        {/* 次回のご案内 */}
        <p className={styles.next}>
          次回「{NEXT_EVENT_NAME}」の企画がスタートしました。最新情報は2027年の公式サイトでご案内しています。
        </p>

        {/* 2027年公式サイトへのリンク */}
        <a
          href={NEXT_EVENT_URL}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {NEXT_EVENT_NAME} 公式サイトへ
          <span aria-hidden="true">&#x2197;</span>
          <span className={styles.srOnly}>（新しいタブで開きます）</span>
        </a>
      </div>
    </aside>
  );
}
