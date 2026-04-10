import type { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import TimetableView from '@/components/timetable/TimetableView/TimetableView';

/** ページメタデータ */
export const metadata: Metadata = {
  title: 'タイムテーブル | 黒猫台湾まつり2026 ステージ・ワークショップ・トークショーの時刻表',
  description:
    '黒猫台湾まつり2026（5/30-31 川崎・二子新地）のタイムテーブル。ステージ、ワークショップ、Podcast公開収録、トークショーの開始時刻と予約情報を確認できます。',
  alternates: {
    canonical: '/timetable',
  },
  openGraph: {
    title: 'タイムテーブル | 黒猫台湾まつり2026',
    description:
      '黒猫台湾まつり2026のタイムテーブル。ステージ・ワークショップ・トークショーの時刻と予約情報をチェック。',
    type: 'website',
    url: '/timetable',
  },
};

/**
 * タイムテーブルページ (/timetable)
 */
export default function TimetablePage() {
  return (
    <SectionContainer>
      <SectionTitle
        title="タイムテーブル"
        subtitle="ステージ・ワークショップ・トークショー・Podcastの時刻表"
      />
      <TimetableView />
    </SectionContainer>
  );
}
