import { ReactNode } from 'react';
import styles from './SectionContainer.module.css';

/** SectionContainer の props 定義 */
interface SectionContainerProps {
  children: ReactNode;
  /** 追加の CSS クラス名 */
  className?: string;
  /** セクションの ID 属性 */
  id?: string;
  /** 代替背景色バリアント */
  alt?: boolean;
}

/**
 * セクション共通のラッパーコンポーネント
 * 最大幅制限・中央寄せ・セクション間余白を統一的に適用する
 */
export default function SectionContainer({
  children,
  className,
  id,
  alt = false,
}: SectionContainerProps) {
  // alt バリアントの場合は代替背景色クラスを付与する
  const sectionClasses = [
    styles.section,
    alt ? styles.alt : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClasses} id={id}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
