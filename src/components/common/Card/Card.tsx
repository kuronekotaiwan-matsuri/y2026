import styles from './Card.module.css';

/** Card コンポーネントの props 定義 */
interface CardProps {
  /** カード上部に表示する画像のURL */
  image?: string;
  /** 画像の代替テキスト */
  imageAlt?: string;
  /** カードのタイトル */
  title: string;
  /** カードの説明文 */
  description?: string;
  /** カード内に追加で表示するコンテンツ */
  children?: React.ReactNode;
}

/**
 * 共通カードコンポーネント
 * - 画像・タイトル・説明・任意の子要素を配置できる汎用カード
 * - image 未指定時は画像エリアを非表示にする
 */
export default function Card({
  image,
  imageAlt = '',
  title,
  description,
  children,
}: CardProps) {
  return (
    <div className={styles.card}>
      {/* 画像エリア: image が指定されている場合のみ表示 */}
      {image && (
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={imageAlt}
            className={styles.image}
          />
        </div>
      )}

      {/* コンテンツエリア */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        {/* 説明文: description が指定されている場合のみ表示 */}
        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {/* 子要素: children が渡されている場合のみ表示 */}
        {children && (
          <div className={styles.content}>{children}</div>
        )}
      </div>
    </div>
  );
}
