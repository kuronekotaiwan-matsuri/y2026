'use client';

import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './PressRelease.module.css';

/**
 * プレスリリースコンポーネント
 * 報道関係者向けのイベント情報を落ち着いたレイアウトで表示する
 */
export default function PressRelease() {
  // フェードインアニメーション用フック
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="press-release">
      <div ref={fadeIn.ref} className={fadeIn.className}>
        {/* ヘッダー */}
        <div className={styles.header}>
          <h1 className={styles.title}>プレスリリース / 新聞稿</h1>
          <p className={styles.audience}>報道関係者各位</p>
        </div>

        {/* リード文 */}
        <div className={styles.lead}>
          <p className={styles.leadText}>
            台湾文化を五感で楽しむ2日間 —
            「黒猫台湾まつり2026」を川崎市高津区にて開催
          </p>
        </div>

        {/* イベント詳細 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>イベント詳細</h2>
          <dl className={styles.detailList}>
            <div className={styles.detailItem}>
              <dt className={styles.detailLabel}>名称</dt>
              <dd className={styles.detailValue}>黒猫台湾まつり2026</dd>
            </div>
            <div className={styles.detailItem}>
              <dt className={styles.detailLabel}>日時</dt>
              <dd className={styles.detailValue}>
                2026年5月30日(土)・31日(日) 11:00〜17:00
              </dd>
            </div>
            <div className={styles.detailItem}>
              <dt className={styles.detailLabel}>会場</dt>
              <dd className={styles.detailValue}>
                川崎市高津区 大山街道沿い（二子新地駅〜高津駅付近）
                <br />
                本部・総合案内: 駄菓子の木村屋
                <br />
                ステージ・飲食エリア: 二子神社
              </dd>
            </div>
            <div className={styles.detailItem}>
              <dt className={styles.detailLabel}>入場料</dt>
              <dd className={styles.detailValue}>無料</dd>
            </div>
            <div className={styles.detailItem}>
              <dt className={styles.detailLabel}>公式サイト</dt>
              <dd className={styles.detailValue}>（確定次第追記）</dd>
            </div>
            <div className={styles.detailItem}>
              <dt className={styles.detailLabel}>Instagram</dt>
              <dd className={styles.detailValue}>
                <a
                  href="https://www.instagram.com/kuronekotaiwan_matsuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  @kuronekotaiwan_matsuri
                </a>
              </dd>
            </div>
            <div className={styles.detailItem}>
              <dt className={styles.detailLabel}>後援</dt>
              <dd className={styles.detailValue}>（確定次第追記）</dd>
            </div>
          </dl>
        </div>

        {/* 見どころ */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>見どころ</h2>
          <ul className={styles.highlightList}>
            <li>
              台湾各地の本格グルメが集結。小籠包、魯肉飯、豆花など多彩なメニューをお楽しみいただけます。
            </li>
            <li>
              台湾の伝統工芸や文化を体験できるワークショップを多数開催。
            </li>
            <li>
              トークショー、音楽ライブ、ポッドキャスト公開収録など、多彩なステージイベント。
            </li>
            <li>
              大山街道の商店街と連携し、地域の魅力を再発見できるお祭りです。
            </li>
          </ul>
        </div>

        {/* 来場案内 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>来場案内</h2>
          <p className={styles.paragraph}>
            会場周辺に専用駐車場はございません。公共交通機関をご利用ください。
            東急田園都市線「二子新地駅」または「高津駅」より徒歩すぐ。
          </p>
        </div>

        {/* お問い合わせ */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>お問い合わせ</h2>
          <p className={styles.paragraph}>
            メール:{' '}
            <a
              href="mailto:kuronekotaiwan.matsuri@gmail.com"
              className={styles.link}
            >
              kuronekotaiwan.matsuri@gmail.com
            </a>
          </p>
          <p className={styles.paragraph}>広報担当:（確定次第追記）</p>
        </div>

        {/* 素材提供 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>素材提供</h2>
          <p className={styles.paragraph}>
            ロゴ・画像素材のダウンロード:（確定次第追記）
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
