import styles from './TrustBar.module.css';

/** 信頼シグナル項目 */
const TRUST_ITEMS = [
  { icon: '🏅', label: '第4回目の開催' },
  { icon: '📰', label: 'タウンニュース掲載実績' },
  { icon: '🏛️', label: '川崎市高津区役所 後援' },
  { icon: '🎪', label: '30以上のコンテンツ' },
] as const;

/**
 * 信頼バー
 * Hero直下に配置し、来場前の不安を解消するための社会的証明を表示する。
 */
export default function TrustBar() {
  return (
    <section className={styles.trustBar} aria-label="信頼シグナル">
      <ul className={styles.list}>
        {TRUST_ITEMS.map((item) => (
          <li key={item.label} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
