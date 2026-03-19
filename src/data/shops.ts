// ==============================================
// 出店者データ定義
// 型定義とサンプルデータを管理する
// ==============================================

/** 出店カテゴリの型定義 */
export type ShopCategory = '販売' | 'ワークショップ' | 'ステージ' | 'Podcast' | 'トークショー' | '店舗';

/** イベント日付の型定義 */
export type EventDate = '5/30' | '5/31';

/** 出店者情報のインターフェース */
export interface Shop {
  /** 一意の識別子 */
  id: string;
  /** 出店者名 */
  name: string;
  /** カテゴリ */
  category: ShopCategory | ShopCategory[];
  /** 出店日 */
  dates: EventDate[];
  /** 代表画像URL */
  image: string;
  /** 説明文 */
  description: string;
  /** Instagram URL（任意） */
  instagramUrl?: string;
  /** Webサイト URL（任意） */
  websiteUrl?: string;
}

/** 全カテゴリの一覧 */
export const ALL_CATEGORIES: ShopCategory[] = ['販売', 'ワークショップ', 'ステージ', 'Podcast', 'トークショー', '店舗'];

/** 全イベント日付の一覧 */
export const ALL_DATES: EventDate[] = ['5/30', '5/31'];

/** 出店者サンプルデータ（全カテゴリ・全日付パターンを網羅） */
export const shops: Shop[] = [
  {
    id: 'shop-001',
    name: 'まっちゃねこのおみせ',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/matchaneko_no_omise.jpg',
    description: 'オリジナルキャラクター「まっちゃねこ。」の台湾グッズを販売。',
    instagramUrl: 'https://www.instagram.com/chinyuri_6v6',
    websiteUrl: 'https://matchaneko.net/',
  },
  {
    id: 'shop-002',
    name: '陶芸 佐々木ヨーコ',
    category: '販売',
    dates: ['5/30'],
    image: '/images/shops/sasaki_yoko.jpg',
    description: '小さな花びんやアクセサリーを陶器で作ります。',
    instagramUrl: 'https://www.instagram.com/yoyoshimada',
    websiteUrl: 'https://sasakiyoko.base.shop/',
  },
  {
    id: 'shop-003',
    name: 'MEILI',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/meili.jpg',
    description: '下高井戸の台湾カフェレストラン。焼き菓子などを販売します。',
    instagramUrl: 'https://www.instagram.com/meilicoffee',
    websiteUrl: 'https://meilicoffee.base.shop/',
  },
  {
    id: 'shop-004',
    name: '麺線屋formosa',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/formosa.jpg',
    description: '麺線、魯肉、ラー油などを冷凍販売\n店舗ではイートインも可能！',
    instagramUrl: 'https://www.instagram.com/formosa.cafe2015',
  },
  {
    id: 'shop-005',
    name: '黒猫豆花',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/kuroneko_douhua.jpg',
    description: '店舗にて5周年記念豆花と鶏肉飯などのグルメを販売します。',
    instagramUrl: 'https://www.instagram.com/kuroneko_nikukyu',
    websiteUrl: 'https://kuroneko-douhua.com/',
  },
  {
    id: 'shop-006',
    name: '湘湘的台灣點滴',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/lotus.jpg',
    description: '台湾人シャンシャン秘蔵の台湾絵本とえりすぐりの台湾雑貨を販売',
    instagramUrl: 'https://www.instagram.com/taiwan.lotus',
  },
  {
    id: 'shop-007',
    name: '想*創Taiwan',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/maha_taiwan.jpg',
    description: '台湾原住民族のハンドメイド布小物、台湾レア雑貨もりもり！',
    instagramUrl: 'https://www.instagram.com/maha_taiwan',
    websiteUrl: 'https://sousoutaiwan.com/',
  },
  {
    id: 'shop-008',
    name: 'dea Roselle',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/dea_roselle.jpg',
    description: '特製月餅は黒猫チョコ他３種。洛神酥、ローゼルティーや紅烏龍も',
    instagramUrl: 'https://www.instagram.com/dea_roselle_asmile',
    websiteUrl: 'https://asmilejapan.thebase.in/',
  },
  {
    id: 'shop-009',
    name: '莉婷子 riteco',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/riteco.jpg',
    description: '台湾のUFOキャッチャー活動とスーツケース買いを推し。',
    instagramUrl: 'https://www.instagram.com/riteco3',
    websiteUrl: 'https://riteco.jimdofree.com/',
  },
  {
    id: 'shop-010',
    name: 'アジアンノット',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/asian_knot.jpg',
    description: '台湾の華やかな布雑貨で気分をあげてみませんか？',
    instagramUrl: 'https://www.instagram.com/nori.f4ever',
    websiteUrl: '',
  },
  {
    id: 'shop-011',
    name: '菓子屋chercheuses',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/chercheuses.jpg',
    description: 'パイナップルケーキなど焼き菓子をご用意予定です。',
    instagramUrl: 'https://www.instagram.com/chercheuses_',
    websiteUrl: 'https://chercheuses-dessert.shopinfo.jp/',
  },
  {
    id: 'shop-030',
    name: '在日台湾原住民連合会',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/tfna_jp.jpg',
    description: '台湾原住民族の伝統と暮らしの工芸品',
    instagramUrl: 'https://www.instagram.com/tfna_jp',
    websiteUrl: 'https://www.facebook.com/TFNAjp/',
  },
  {
    id: 'shop-031',
    name: 'HAPPY LEMON',
    category: '販売',
    dates: ['5/31'],
    image: '/images/shops/happy_lemon.jpg',
    description: '世界に誇る台湾茶ドリンク専門店。自慢の台湾茶飲み比べも♪',
    instagramUrl: 'https://www.instagram.com/happylemon_nihonbashi',
    websiteUrl: 'https://happylemon.jp/',
  },
  {
    id: 'shop-012',
    name: '芽実',
    category: '販売',
    dates: ['5/30', '5/31'],
    image: '/images/shops/megumi.jpg',
    description: '御自分用、贈り物に縁起の良い花文字を15分程でお描きします。',
    instagramUrl: 'https://www.instagram.com/me.gumi418',
    websiteUrl: '',
  },
  {
    id: 'shop-013',
    name: 'WM workshop',
    category: ['販売', 'ワークショップ'],
    dates: ['5/30', '5/31'],
    image: '/images/shops/wm_workshop.jpg',
    description: '台湾結びのアクセサリーや雑貨の販売と手作り体験。要予約',
    instagramUrl: 'https://www.instagram.com/wmworkshop_in_japan',
    websiteUrl: 'https://www.facebook.com/wennymaisonworkshop/',
  },
  {
    id: 'shop-014',
    name: '佐々木千絵ワークショップ',
    category: 'ワークショップ',
    dates: ['5/30', '5/31'],
    image: '/images/shops/sasaki_chie.jpg',
    description: '台湾や黒猫にまつわるハンコでオリジナルの木のうちわを作ろう！',
    instagramUrl: 'https://www.instagram.com/chie_sasa',
    websiteUrl: 'https://ynks.jp/series/tashinamijuku/',
  },
  {
    id: 'shop-015',
    name: '台湾華語茶會',
    category: 'ワークショップ',
    dates: ['5/30'],
    image: '/images/shops/kago_chakai.jpg',
    description: '初心者向き台湾中国語で風習や文化や観光会話を勉強する会です。要予約',
    instagramUrl: 'https://www.instagram.com/taiwan.lotus',
  },
  {
    id: 'shop-016',
    name: '快子好好　指吸快子',
    category: 'ワークショップ',
    dates: ['5/30', '5/31'],
    image: '/images/shops/yubiyubiquilt.jpg',
    description: '台湾の「蘋果西打」と「黒松沙士」の刺繍チャームを作ります。',
    instagramUrl: 'https://www.instagram.com/yubiyubiquilt',
    websiteUrl: 'https://yubiquilt.exblog.jp/',
  },
  {
    id: 'shop-017',
    name: '你你好好',
    category: 'Podcast',
    dates: ['5/31'],
    image: '/images/shops/ninihaohao.jpg',
    description: '台湾気分を耳から味わう公開収録です！',
    instagramUrl: 'https://www.instagram.com/ninihaohao_podcast',
  },
  {
    id: 'shop-018',
    name: 'HowTo Taiwan',
    category: 'Podcast',
    dates: ['5/31'],
    image: '/images/shops/howto_taiwan.jpg',
    description: 'Podcast「台湾好き女子のゆるっとおしゃべり」公開収録',
    instagramUrl: 'https://www.instagram.com/howto_taiwan',
    websiteUrl: 'https://creators.spotify.com/pod/profile/howto-taiwan/',
  },
  {
    id: 'shop-019',
    name: '佐野いくみの喜々台湾',
    category: 'Podcast',
    dates: ['5/31'],
    image: '/images/shops/kikitaiwan.jpg',
    description: '「佐野いくみの喜々台湾」の公開収録をお楽しみ下さい！',
    instagramUrl: 'https://www.instagram.com/kikitaiwan_podcast',
    websiteUrl: 'https://open.spotify.com/show/15ZDxvdmNcsJ0D821NveDu',
  },
  {
    id: 'shop-020',
    name: '門司&佐々木',
    category: 'トークショー',
    dates: ['5/30'],
    image: '/images/shops/norikomonji.jpg',
    description: '門司紀子と佐々木千絵によるトークショー',
    instagramUrl: 'https://www.instagram.com/norikomonji',
  },
  {
    id: 'shop-021',
    name: '竹内将子',
    category: 'トークショー',
    dates: ['5/30'],
    image: '/images/shops/haowandentai.jpg',
    description: 'ハオワン的オリジナル台湾旅➕おすすめ台湾音楽を紹介します！',
    instagramUrl: 'https://www.instagram.com/haowandentai',
    websiteUrl: 'https://open.spotify.com/show/4hDRSr3ZlcGzeBQMGXK5l3',
  },
  {
    id: 'shop-022',
    name: 'young donuts',
    category: 'ステージ',
    dates: ['5/31'],
    image: '/images/shops/young_donuts.jpg',
    description: 'ラップができるゆるキャラです。',
    instagramUrl: 'https://www.instagram.com/youngdonuts1072',
    websiteUrl: 'https://www.youngdonuts.net/',
  },
  {
    id: 'shop-023',
    name: '洸美',
    category: 'ステージ',
    dates: ['5/30'],
    image: '/images/shops/hiromitaiwan.jpg',
    description: '台湾生まれ・台湾育ちの台湾系J-popシンガーソングライター',
    instagramUrl: 'https://www.instagram.com/hiromitaiwan',
    websiteUrl: 'https://www.youtube.com/@dbn0527',
  },
  {
    id: 'shop-024',
    name: 'ニコルーチェ',
    category: '店舗',
    dates: ['5/30', '5/31'],
    image: '/images/shops/nico_luce0222.jpg',
    description: 'イタリアンシェフが作るルーローパンはイベント限定販売です！',
    instagramUrl: 'https://www.instagram.com/nico_luce0222',
    websiteUrl: 'http://nico-luce.com/',
  },
  {
    id: 'shop-025',
    name: '佰老亭',
    category: '店舗',
    dates: ['5/30', '5/31'],
    image: '/images/shops/hyakuroutei.jpg',
    description: '二子新地に創業40年！二代目店主が作る牛肉麺や焼き餃子が人気',
  },
  {
    id: 'shop-026',
    name: 'ZOOJEEBAA CAFÉ',
    category: '店舗',
    dates: ['5/30', '5/31'],
    image: '/images/shops/zoojeebaa.jpg',
    description: 'オリジナルの図案とインクでTシャツを作るシルクスクリーン体験',
    instagramUrl: 'https://www.instagram.com/zoojeebaa',
  },
  {
    id: 'shop-027',
    name: 'IDOBATA',
    category: '店舗',
    dates: ['5/30', '5/31'],
    image: '/images/shops/idobata5110.jpg',
    description: '台湾かき氷を準備しています。マンゴー味、いちご味、etc',
    instagramUrl: 'https://www.instagram.com/idobata5110',
  },
  {
    id: 'shop-028',
    name: '油や鹿鳴',
    category: '店舗',
    dates: ['5/30', '5/31'],
    image: '/images/shops/aburayarockmay.futakoshinchi.jpg',
    description: 'かわさき推しメシグランプリ受賞店渾身の台湾まぜそばです！',
    instagramUrl: 'https://www.instagram.com/aburayarockmay.futakoshinichi',
  },
];
