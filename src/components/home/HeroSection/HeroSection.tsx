import Button from '@/components/common/Button/Button';
import styles from './HeroSection.module.css';

/** Google カレンダー登録URL（イベント情報を含むテンプレート） */
const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=' + encodeURIComponent('黒猫台湾まつり2026') +
  '&dates=20260530T020000Z/20260531T080000Z' +
  '&details=' + encodeURIComponent(
    '川崎市高津区・大山街道沿いで開催する第4回黒猫台湾まつり。' +
    '台湾フード・雑貨・ワークショップ・ステージなど30以上のコンテンツ。入場無料。' +
    ' https://kuronekotaiwan-matsuri.github.io/y2026/'
  ) +
  '&location=' + encodeURIComponent('神奈川県川崎市高津区 大山街道（二子新地駅徒歩5分）');

/** Google Maps のリンク */
const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/d/edit?mid=1KbGoKJO7FHHM2dcmUZ0XpOAWMx8K5Ck&usp=sharing';

/**
 * ヒーローセクション
 * トップページのファーストビュー。イベント名、キャッチコピー、日時、
 * 開催情報、複数CTA、信頼バーを表示する。
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

        {/* サブキャッチ */}
        <p className={styles.subCatch}>
          二子新地・大山街道で出会う、本場の味と手しごと
        </p>

        {/* 開催情報のミニリスト */}
        <ul className={styles.factList}>
          <li>
            <span aria-hidden="true">📅</span>
            2026年5月30日(土)・31日(日) 11:00–17:00
          </li>
          <li>
            <span aria-hidden="true">📍</span>
            東急田園都市線 二子新地駅 徒歩5分
          </li>
          <li>
            <span aria-hidden="true">🎫</span>
            入場無料 / 雨天決行
          </li>
        </ul>

        {/* CTAボタン: 予定登録 + 会場マップ */}
        <div className={styles.cta}>
          <Button href={GOOGLE_CALENDAR_URL} variant="primary" external>
            📅 予定に入れる
          </Button>
          <Button href={GOOGLE_MAPS_URL} variant="secondary" external>
            📍 会場マップをみる
          </Button>
        </div>

        {/* 信頼バー */}
        <p className={styles.trustBar}>
          第4回 ／ 後援: 川崎市高津区役所 ／ 30以上のコンテンツ
        </p>
      </div>
    </section>
  );
}
