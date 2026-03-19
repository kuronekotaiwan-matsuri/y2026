import styles from './SectionTitle.module.css';

/** SectionTitle の props 定義 */
interface SectionTitleProps {
  /** セクション見出しテキスト */
  title: string;
  /** サブタイトル（任意） */
  subtitle?: string;
}

/**
 * セクションタイトルの統一フォーマットコンポーネント
 * h2タグ・見出しフォント・中央揃えで表示する
 */
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      {/* メインタイトル */}
      <h2 className={styles.title}>{title}</h2>

      {/* サブタイトルがある場合のみ表示 */}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
