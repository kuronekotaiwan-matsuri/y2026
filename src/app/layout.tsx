import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

/** Google Analytics 測定ID */
const GA_ID = "G-5JW9C3WY72";

/** サイトのベースURL */
const SITE_URL = "https://kuronekotaiwan-matsuri.github.io/y2026";

/** サイト全体で共有するJSON-LD（Organization + WebSite） */
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "黒猫台湾まつり実行委員会",
      alternateName: "Kuroneko Taiwan Matsuri",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/neko_face/neko_face.png`,
      sameAs: ["https://www.instagram.com/kuronekotaiwan_matsuri/"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "kuronekotaiwan.matsuri@gmail.com",
        contactType: "customer service",
        availableLanguage: ["Japanese", "Chinese"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "黒猫台湾まつり2026",
      description:
        "川崎・二子新地で開催される地域密着型台湾カルチャーフェスティバル（第4回）",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ja-JP",
    },
  ],
};

// メタデータの定義（SEO・OGP対応）
export const metadata: Metadata = {
  metadataBase: new URL("https://kuronekotaiwan-matsuri.github.io/y2026"),
  title: "黒猫台湾まつり2026",
  description:
    "川崎市高津区で開催される台湾文化イベント「黒猫台湾まつり2026」の公式サイトです。台湾グルメ、ワークショップ、ステージイベントなど盛りだくさん！",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "黒猫台湾まつり2026",
    description:
      "川崎市高津区で開催される台湾文化イベント「黒猫台湾まつり2026」の公式サイトです。台湾グルメ、ワークショップ、ステージイベントなど盛りだくさん！",
    type: "website",
    locale: "ja_JP",
    siteName: "黒猫台湾まつり2026",
    url: "https://kuronekotaiwan-matsuri.github.io/y2026/",
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
        {/* JSON-LD 構造化データ（Organization + WebSite） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

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
