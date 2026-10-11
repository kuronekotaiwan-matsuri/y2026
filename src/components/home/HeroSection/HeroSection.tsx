import Button from '@/components/common/Button/Button';
import { NEXT_EVENT_NAME, NEXT_EVENT_URL } from '@/data/nextEvent';
import styles from './HeroSection.module.css';

/**
 * ヒーローセクション
 * トップページのファーストビュー。2026年の開催終了のお知らせとお礼、
 * 次回（2027年）公式サイトへのCTA、開催の記録を表示する。
 */
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* 開催終了バッジ */}
        <p className={styles.statusBadge}>2026年の開催は終了しました</p>

        {/* イベント名 */}
        <h1 className={styles.title}>黒猫台湾まつり2026</h1>

        {/* お礼のメッセージ */}
        <p className={styles.catchcopy}>ご来場ありがとうございました。</p>

        {/* お礼の本文 */}
        <p className={styles.thanks}>
          2026年5月30日(土)・31日(日)の2日間、二子新地・大山街道に台湾の街角がやってきました。お越しいただいたみなさま、出店者・出演者のみなさま、そして支えてくださった地域のみなさまに、心より感謝申し上げます。
        </p>

        {/* 次回のご案内 */}
        <p className={styles.nextNote}>
          次回「{NEXT_EVENT_NAME}」の企画がスタートしました。
          <br />
          開催情報は2027年の公式サイトで順次お知らせします。
        </p>

        {/* CTAボタン: 2027年公式サイトへ */}
        <div className={styles.cta}>
          <Button href={NEXT_EVENT_URL} variant="primary" external>
            🎉 {NEXT_EVENT_NAME} 公式サイトをみる
          </Button>
        </div>

        {/* 開催の記録 */}
        <p className={styles.trustBar}>
          第4回 ／ 後援: 川崎市高津区役所 ／ 30以上のコンテンツ
        </p>
      </div>
    </section>
  );
}
