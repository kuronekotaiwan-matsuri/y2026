import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

// メタデータの定義（SEO・OGP対応）
export const metadata: Metadata = {
  title: "黒猫台湾まつり2026",
  description:
    "川崎市高津区で開催される台湾文化イベント「黒猫台湾まつり2026」の公式サイトです。台湾グルメ、ワークショップ、ステージイベントなど盛りだくさん！",
  openGraph: {
    title: "黒猫台湾まつり2026",
    description:
      "川崎市高津区で開催される台湾文化イベント「黒猫台湾まつり2026」の公式サイトです。台湾グルメ、ワークショップ、ステージイベントなど盛りだくさん！",
    type: "website",
    locale: "ja_JP",
    siteName: "黒猫台湾まつり2026",
  },
};

// Google Fontsの読み込みURL
const zenMaruGothicUrl =
  "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;700&display=swap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts: Zen Maru Gothic の読み込み */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={zenMaruGothicUrl} />
      </head>
      <body>
        {/* 共通ヘッダー */}
        <Header />

        {/* ページコンテンツ */}
        <main>{children}</main>

        {/* 共通フッター */}
        <Footer />
      </body>
    </html>
  );
}
