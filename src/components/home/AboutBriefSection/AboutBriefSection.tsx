"use client";

import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './AboutBriefSection.module.css';

/**
 * 概要定義ブロック（AI抽出最適化）
 *
 * AI検索エンジン（ChatGPT/Perplexity/Google AI Overviews）が
 * パッセージ抽出しやすい40-60語の自己完結した定義文を配置する。
 * 「黒猫台湾まつり2026とは？」系クエリへの回答素材として機能する。
 */
export default function AboutBriefSection() {
  const { ref, className: fadeClassName } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="about-brief" alt>
      <div ref={ref} className={fadeClassName}>
        <h2 className={styles.heading}>黒猫台湾まつり2026とは？</h2>
        <p className={styles.lead}>
          黒猫台湾まつり2026は、2026年5月30日(土)・31日(日) 11:00〜17:00に、
          神奈川県川崎市高津区の大山街道沿い（東急田園都市線 二子新地駅〜高津駅）で開催される、
          第4回目の地域密着型台湾カルチャーフェスティバルです。
          入場無料、雨天決行。台湾フード・雑貨・ワークショップ・トークショー・ライブなど
          30以上のコンテンツが集結します。
          主催は黒猫台湾まつり実行委員会と二子大通り商和会、後援は川崎市高津区役所です。
        </p>
      </div>
    </SectionContainer>
  );
}
