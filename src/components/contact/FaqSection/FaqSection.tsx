import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Accordion from '@/components/common/Accordion/Accordion';
import { faqItems } from '@/data/faq';

/**
 * FAQセクションコンポーネント
 * よくある質問をアコーディオン形式で表示する
 */
export default function FaqSection() {
  return (
    <SectionContainer id="faq">
      {/* セクションタイトル */}
      <SectionTitle title="よくある質問" />

      {/* FAQアコーディオン */}
      <Accordion items={faqItems} />
    </SectionContainer>
  );
}
