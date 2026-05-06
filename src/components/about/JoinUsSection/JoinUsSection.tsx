'use client';

import { useFadeIn } from '@/hooks/useFadeIn';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Button from '@/components/common/Button/Button';
import styles from './JoinUsSection.module.css';

/**
 * 一緒に作りませんか？セクション
 * ボランティア募集を呼びかけ、応募フォームへの導線を提供する
 */
export default function JoinUsSection() {
  const { ref, className: fadeInClass } = useFadeIn<HTMLDivElement>();

  return (
    <SectionContainer id="join-us">
      <div ref={ref} className={fadeInClass}>
        {/* セクションタイトル */}
        <SectionTitle title="一緒に作りませんか？" />

        {/* リード文（強調） */}
        <p className={styles.lead}>
          黒猫台湾まつりは、たくさんのボランティアの方々の力で支えられています。
        </p>

        {/* 本文 */}
        <p className={styles.body}>
          会場設営、受付、出店者サポート、案内など、当日のお祭りを一緒に作ってくださる仲間を募集しています。台湾文化が好きな方、地域のお祭りに関わってみたい方、はじめての方も大歓迎です。お気軽にご応募ください。
        </p>

        {/* CTAボタン */}
        <div className={styles.ctaWrapper}>
          <Button
            href="https://forms.gle/ppvScJQS9vJk3PiM8"
            external
            variant="primary"
          >
            ボランティアに応募する
          </Button>
        </div>

        {/* 補足文 */}
        <p className={styles.note}>
          ※ 応募内容や日時の希望は、フォームにてお知らせください。
        </p>
      </div>
    </SectionContainer>
  );
}
