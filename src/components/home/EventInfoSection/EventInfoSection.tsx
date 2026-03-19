"use client";

import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Button from '@/components/common/Button/Button';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './EventInfoSection.module.css';

/** Google Maps のリンク（総合案内・メイン会場） */
const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/e7weFDGfBXgvQXca8';

/**
 * 開催情報セクション
 * 日時・場所・参加費を定義リスト形式で表示する。
 */
export default function EventInfoSection() {
  // フェードインアニメーション用フック
  const { ref, className: fadeClassName } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="event-info">
      <div ref={ref} className={fadeClassName}>
        <SectionTitle title="開催情報" />

        {/* 開催情報の定義リスト */}
        <dl className={styles.list}>
          <div className={styles.item}>
            <dt className={styles.term}>日時</dt>
            <dd className={styles.detail}>
              2026年5月30日(土)・31日(日) 11:00〜17:00
            </dd>
          </div>

          <div className={styles.item}>
            <dt className={styles.term}>場所</dt>
            <dd className={styles.detail}>
              川崎市高津区 田園都市線 二子新地駅〜高津駅付近 大山街道沿い
              <br />
              <span className={styles.subDetail}>本部・総合案内: 駄菓子の木村屋</span>
              <br />
              <span className={styles.subDetail}>ステージ・飲食エリア: 二子神社</span>
            </dd>
          </div>

          <div className={styles.item}>
            <dt className={styles.term}>参加費</dt>
            <dd className={styles.detail}>無料</dd>
          </div>
        </dl>

        {/* Google Maps への外部リンク */}
        <div className={styles.mapLink}>
          <Button
            variant="secondary"
            href={GOOGLE_MAPS_URL}
            external
          >
            Google Maps で会場を確認する &#x2197;
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
