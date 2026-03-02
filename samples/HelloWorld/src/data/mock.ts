export type TopTab = "顧客" | "ターゲット" | "活動記録" | "実績帳票" | "聞き取りシェア" | "設定";
export type CustomerSubTab = "一覧" | "担当者設定" | "顧客選定" | "目標値入力";
export type StepKey = "customerList" | "customerOwner" | "targetSelect" | "targetConfirm";
export type ReportSubTab = "業績計画/実績" | "見積・追求推移" | "商品別 受注計画" | "ランク別取引先 受注目標" | "商品別 手持ち状況" | "取引先別商品別" | "見積追求アラート";
export type SettingsSubTab = "エクスポート" | "テリトリ設定";

export type Row = {
  id: string;
  prevChecked: boolean;
  owner: string;
  prevDept: string;
  prevOwner: string;
  targetSelector: string;
  corpName: string;
  partnerCd: string;
  partnerName: string;
  customerType: string;
  coverType: string;
  rankCustomer: string;
  rankOpen: string;
  rankCredit: string;
  address: string;
  prevResult: number;
  avg4q: number;
  division: string;
  branch: string;
  dept: string;
};

export type Filters = {
  division: string;
  branch: string;
  dept: string;
  person: string;
  partner: string;
};

export type ReportFilters = {
  headOffice: string;
  division: string;
  branch: string;
  dept: string;
  person: string;
  year: string;
  term: string;
  month: string;
};

export type HearingShareFilters = {
  division: string;
  branch: string;
  dept: string;
  product: string;
  startDate: string;
  endDate: string;
};

export type HearingShareRow = {
  area: string;
  estimatedMarket: number;
  previousYear: number;
  sanwa: number;
  bunka: number;
  toyo: number;
  suzuki: number;
  other: number;
  total: number;
  note: string;
};

export type SettingsExportState = {
  products: string[];
  targetPeriods: string[];
  activityYears: string[];
  activityTerms: string[];
  activityExtras: string[];
  hearingYears: string[];
};

export const TOP_TABS: TopTab[] = ["顧客", "ターゲット", "活動記録", "実績帳票", "聞き取りシェア", "設定"];
export const CUSTOMER_SUB_TABS: CustomerSubTab[] = ["一覧", "担当者設定", "顧客選定", "目標値入力"];
export const REPORT_SUB_TABS: ReportSubTab[] = [
  "業績計画/実績",
  "見積・追求推移",
  "商品別 受注計画",
  "ランク別取引先 受注目標",
  "商品別 手持ち状況",
  "取引先別商品別",
  "見積追求アラート",
];
export const SETTINGS_SUB_TABS: SettingsSubTab[] = ["エクスポート", "テリトリ設定"];
export const SETTINGS_PRODUCTS = ["全商品", "重量SS", "軽量SS", "防火シャッター", "高速シートシャッター"];
export const SETTINGS_TARGET_PERIODS = ["今期", "前期"];
export const SETTINGS_YEARS = ["2025年度", "2024年度", "2023年度", "2022年度", "2021年度", "2020年度", "2019年度", "2018年度", "2017年度"];
export const SETTINGS_TERMS = ["上期", "下期"];
export const SETTINGS_EXTRAS = ["その他", "メモ"];
export const STEPS: StepKey[] = ["customerList", "customerOwner", "targetSelect", "targetConfirm"];
export const STEP_LABELS: Record<StepKey, string> = {
  customerList: "顧客一覧",
  customerOwner: "顧客\n担当者設定",
  targetSelect: "ターゲット\n選定",
  targetConfirm: "ターゲット\n選定確認",
};

export const BASE_ROWS: Omit<Row, "id">[] = [
  {
    prevChecked: true,
    owner: "東京浩一郎",
    prevDept: "東京中央営業所",
    prevOwner: "田中一郎",
    targetSelector: "田中一郎",
    corpName: "〇〇工務店",
    partnerCd: "14850254",
    partnerName: "〇〇工務店",
    customerType: "カバー顧客A",
    coverType: "A",
    rankCustomer: "S1",
    rankOpen: "D1",
    rankCredit: "A",
    address: "東京都墨田区田久保1丁目...",
    prevResult: 123456,
    avg4q: 11245,
    division: "首都圏事業部",
    branch: "東京第一支店",
    dept: "東京中央営業所",
  },
  {
    prevChecked: false,
    owner: "千場浩二郎",
    prevDept: "東京中央営業所",
    prevOwner: "田中一郎",
    targetSelector: "ー",
    corpName: "△△サッシ店",
    partnerCd: "14852502",
    partnerName: "△△サッシ店",
    customerType: "カバー顧客A",
    coverType: "A",
    rankCustomer: "R2",
    rankOpen: "D2",
    rankCredit: "B",
    address: "神奈川県小田原市小田原3...",
    prevResult: 2000,
    avg4q: 408,
    division: "首都圏事業部",
    branch: "東京第一支店",
    dept: "東京中央営業所",
  },
  {
    prevChecked: true,
    owner: "千場浩二郎",
    prevDept: "東京西営業所",
    prevOwner: "鈴木太郎",
    targetSelector: "鈴木太郎",
    corpName: "△□建工",
    partnerCd: "14852674",
    partnerName: "△□建工",
    customerType: "カバー顧客A",
    coverType: "A",
    rankCustomer: "S1",
    rankOpen: "D2",
    rankCredit: "F",
    address: "東京都豊中区豊島34-3...",
    prevResult: 2000,
    avg4q: 53565,
    division: "首都圏事業部",
    branch: "東京第二支店",
    dept: "東京西営業所",
  },
  {
    prevChecked: false,
    owner: "東京浩一郎",
    prevDept: "東京南営業所",
    prevOwner: "松尾貞",
    targetSelector: "ー",
    corpName: "■▲コーポレーション",
    partnerCd: "14854080",
    partnerName: "■▲コーポレーション",
    customerType: "カバー顧客A",
    coverType: "A",
    rankCustomer: "R2",
    rankOpen: "D2",
    rankCredit: "A",
    address: "東京都稲沢市稲見中央町1...",
    prevResult: 100,
    avg4q: 594,
    division: "首都圏事業部",
    branch: "東京第一支店",
    dept: "東京南営業所",
  },
];

export const MOCK_ROWS: Row[] = Array.from({ length: 18 }).map((_, idx) => ({
  ...BASE_ROWS[idx % BASE_ROWS.length],
  id: String(idx + 1),
}));

export const PERFORMANCE_TABLE_ROWS = [
  { group: "受注", item: "金額", monthActual: "32,323", monthPlan: "30,860", monthRate: "104.7", monthLast: "33,413", monthYoY: "96.7", cumActual: "78,310", cumPlan: "61,390", cumRate: "127.6", cumLast: "91,290", cumYoY: "85.8", eval: "◎", upperPlan: "180,000", progress: "43.5", upperLast: "220,511" },
  { group: "受注", item: "差益", monthActual: "9,697", monthPlan: "8,000", monthRate: "121.2", monthLast: "8,000", monthYoY: "121.2", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "受注", item: "差益率", monthActual: "30%", monthPlan: "26%", monthRate: "115.7", monthLast: "24%", monthYoY: "125.3", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "売上", item: "金額", monthActual: "7,180", monthPlan: "19,080", monthRate: "37.6", monthLast: "7,571", monthYoY: "94.8", cumActual: "9,254", cumPlan: "30,300", cumRate: "30.5", cumLast: "15,952", cumYoY: "58.0", eval: "×", upperPlan: "120,000", progress: "7.7", upperLast: "154,641" },
  { group: "売上", item: "差益", monthActual: "4,297", monthPlan: "9,390", monthRate: "45.8", monthLast: "3,522", monthYoY: "122.0", cumActual: "5,946", cumPlan: "14,500", cumRate: "41.0", cumLast: "8,886", cumYoY: "66.9", eval: "×", upperPlan: "57,600", progress: "10.3", upperLast: "62,663" },
  { group: "売上", item: "差益率", monthActual: "59.8", monthPlan: "49.2", monthRate: "121.6", monthLast: "46.5", monthYoY: "128.6", cumActual: "64.3", cumPlan: "47.9", cumRate: "134.3", cumLast: "55.7", cumYoY: "115.3", eval: "◎", upperPlan: "48", progress: "133.9", upperLast: "41" },
];

export const HEARING_SHARE_ROWS: HearingShareRow[] = [
  { area: "東京中央営業所", estimatedMarket: 3750, previousYear: 1500, sanwa: 40, bunka: 30, toyo: 10, suzuki: 10, other: 10, total: 100, note: "その他は小窓シャッター" },
  { area: "〇〇区", estimatedMarket: 140, previousYear: 70, sanwa: 50, bunka: 40, toyo: 0, suzuki: 10, other: 0, total: 100, note: "" },
  { area: "△市", estimatedMarket: 300, previousYear: 120, sanwa: 40, bunka: 35, toyo: 5, suzuki: 20, other: 0, total: 100, note: "" },
];

export function formatYmd(d: Date) {
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

export function escapeCsv(v: string) {
  if (v.includes('"') || v.includes(",") || v.includes("\n")) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

export function toCsv(rows: Row[], prevMap: Record<string, boolean>) {
  const header = ["選定", "前期", "顧客担当者", "前期所属", "前期担当者", "前期ターゲット選定者", "法人名", "取引先CD", "取引先名", "顧客区分", "カバー区分", "顧客", "開拓", "与信", "住所", "前期受注実績", "前4期平均受注"];
  const body = rows.map((r) =>
    ["", prevMap[r.id] ? "●" : "", r.owner, r.prevDept, r.prevOwner, r.targetSelector, r.corpName, r.partnerCd, r.partnerName, r.customerType, r.coverType, r.rankCustomer, r.rankOpen, r.rankCredit, r.address, String(r.prevResult), String(r.avg4q)].map(escapeCsv).join(","),
  );
  return [header.join(","), ...body].join("\r\n");
}

export function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function downloadSimpleExportCsv(filename: string, section: string, conditions: string[], rows: string[][]) {
  const lines = [
    `section,${escapeCsv(section)}`,
    `conditions,${escapeCsv(conditions.join(" / "))}`,
    "",
    "col1,col2,col3",
    ...rows.map((r) => r.map(escapeCsv).join(",")),
  ];
  downloadCsv(filename, lines.join("\r\n"));
}
