import Button from '@/components/common/Button/Button';
import styles from './HeroSection.module.css';

/**
 * ヒーローセクション
 * トップページのファーストビュー。イベント名、キャッチコピー、日時、CTAボタンを表示する。
 */
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* イベント名 */}
        <h1 className={styles.title}>黒猫台湾まつり2026</h1>

        {/* キャッチコピー */}
        <p className={styles.catchcopy}>
          台湾の街角が、川崎にやってくる。
        </p>

        {/* 開催日時 */}
        <p className={styles.date}>
          2026年5月30日(土)・31日(日) 11:00〜17:00
        </p>

        {/* CTAボタン: 出店情報ページへ誘導 */}
        <div className={styles.cta}>
          <Button href="/shops" variant="primary">
            出店情報をみる
          </Button>
        </div>
      </div>
    </section>
  );
}
