import Link from 'next/link';
import styles from './Button.module.css';

/** Button コンポーネントの props 定義 */
interface ButtonProps {
  /** ボタン内のコンテンツ */
  children: React.ReactNode;
  /** バリアント: primary または secondary */
  variant?: 'primary' | 'secondary';
  /** リンク先URL（指定時は aタグ、未指定時は buttonタグ） */
  href?: string;
  /** 外部リンクかどうか（trueの場合、aタグで新しいタブを開く） */
  external?: boolean;
  /** クリックハンドラ（buttonタグ時に使用） */
  onClick?: () => void;
  /** HTMLのtype属性（buttonタグ時に使用） */
  type?: 'button' | 'submit' | 'reset';
  /** 追加のクラス名 */
  className?: string;
}

/**
 * 共通ボタンコンポーネント
 * - variant で primary / secondary のスタイルを切り替える
 * - href が渡された場合は Next.js の Link（aタグ）を描画
 * - href が未指定の場合は button タグを描画
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  onClick,
  type = 'button',
  className,
}: ButtonProps) {
  // バリアントに応じたCSSクラスを組み立てる
  const classNames = [
    styles.button,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 外部リンクの場合は通常のaタグで新しいタブを開く
  if (href && external) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // 内部リンクの場合は Link コンポーネントで描画
  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  // href が未指定の場合は button タグで描画
  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
