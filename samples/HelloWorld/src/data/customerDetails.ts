export type CustomerDetail = {
  id: string;
  founded: string;
  annualSales: string;
  baseDate: string;
  capital: string;
  mainBank: string;
  address: string;
  postalCode: string;
  phone: string;
  fax: string;
  industry: string;
  categoryLarge: string;
  categoryMiddle: string;
  categorySmall: string;
  customerRank: string;
  developmentRank: string;
  customerClass: string;
  coverClass: string;
  expectedOrderAmount: string;
  creditRank: string;
  creditLimit: string;
  creditBalance: string;
  paymentClosingDay: string;
  paymentDay: string;
  paymentType: string;
  paymentMethod: string;
  transferBank: string;
  memo: string;
};

export const CUSTOMER_DETAIL_TABS = [
  "基本情報",
  "キーマン情報",
  "取引商品数",
  "提示金額記録",
  "取引履歴",
  "受注商品履歴",
  "想定シェア",
  "商流情報",
  "物件履歴",
  "営業活動履歴",
] as const;

export type CustomerDetailTab = (typeof CUSTOMER_DETAIL_TABS)[number];

const defaultMemo = "山梨県が本社のサッシ業者。元請が当社と直接取引がある。";

export const CUSTOMER_DETAILS_BY_ID: Record<string, CustomerDetail> = {
  "1": {
    id: "1",
    founded: "1950年",
    annualSales: "50百万円",
    baseDate: "2025年9月",
    capital: "50百万円",
    mainBank: "◆◆銀行 〇△大学駅前支店",
    address: "東京都墨田区緑3-3-8 アイム両国弐番館 704",
    postalCode: "〒130-0021",
    phone: "03-5555-5847",
    fax: "03-5555-5848",
    industry: "施工",
    categoryLarge: "大工",
    categoryMiddle: "大手ゼネコン",
    categorySmall: "不動産販売業",
    customerRank: "S1",
    developmentRank: "D1",
    customerClass: "カバー顧客",
    coverClass: "A",
    expectedOrderAmount: "10百万円",
    creditRank: "A",
    creditLimit: "235万円",
    creditBalance: "23万円",
    paymentClosingDay: "20日",
    paymentDay: "翌月",
    paymentType: "現金・手形",
    paymentMethod: "現金",
    transferBank: "◆◆銀行 〇△大学駅前支店",
    memo: defaultMemo,
  },
  "2": {
    id: "2",
    founded: "1988年",
    annualSales: "120百万円",
    baseDate: "2025年9月",
    capital: "80百万円",
    mainBank: "〇〇銀行 新宿中央支店",
    address: "東京都新宿区西新宿1-10-1",
    postalCode: "〒160-0023",
    phone: "03-4444-1111",
    fax: "03-4444-1112",
    industry: "建設",
    categoryLarge: "ゼネコン",
    categoryMiddle: "民間建築",
    categorySmall: "改修工事",
    customerRank: "A2",
    developmentRank: "C1",
    customerClass: "重点顧客",
    coverClass: "B",
    expectedOrderAmount: "35百万円",
    creditRank: "B",
    creditLimit: "500万円",
    creditBalance: "120万円",
    paymentClosingDay: "末日",
    paymentDay: "翌々月",
    paymentType: "現金・振込",
    paymentMethod: "振込",
    transferBank: "〇〇銀行 新宿中央支店",
    memo: "大型案件の見積比率が高く、四半期末に受注が集中する傾向あり。",
  },
  "3": {
    id: "3",
    founded: "2002年",
    annualSales: "70百万円",
    baseDate: "2025年9月",
    capital: "30百万円",
    mainBank: "さくら銀行 西日本支店",
    address: "大阪府大阪市北区梅田2-2-2",
    postalCode: "〒530-0001",
    phone: "06-7777-2222",
    fax: "06-7777-2223",
    industry: "商社",
    categoryLarge: "流通",
    categoryMiddle: "建材",
    categorySmall: "アルミ建具",
    customerRank: "B1",
    developmentRank: "C2",
    customerClass: "一般顧客",
    coverClass: "C",
    expectedOrderAmount: "18百万円",
    creditRank: "A",
    creditLimit: "280万円",
    creditBalance: "45万円",
    paymentClosingDay: "25日",
    paymentDay: "翌月",
    paymentType: "現金・手形",
    paymentMethod: "手形",
    transferBank: "さくら銀行 西日本支店",
    memo: "営業活動履歴の更新頻度が高いため、次フェーズで履歴連携を検討。",
  },
};
