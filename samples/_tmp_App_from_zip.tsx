import * as React from "react";
import {
  FluentProvider,
  webLightTheme,
  Button,
  Input,
  Dropdown,
  Option,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

type Row = {
  id: string;
  targetSelected: boolean;
  prevSelected: boolean;
  customerOwner: string;
  prevDept: string;
  prevOwner: string;
  corpName: string;
  partnerCd: string;
  partnerName: string;
  customerClass: string;
  coverClass: string;
  rank: string;
  open: string;
  grant: string;
  address: string;
  prevOrder: number;
  avg4q: number;
};

type TopTab = "顧客" | "ターゲット" | "活動記録" | "実績帳票" | "聞き取りシェア" | "設定";
type SubTab = "一覧" | "担当者設定" | "顧客選定" | "ターゲット選定確認";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    padding: "14px 14px 18px 14px",
    boxSizing: "border-box",
  },

  /* ===== Top Tabs (big) ===== */
  topBar: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "8px",
  },
  topTabs: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    flexWrap: "wrap",
  },
  topTab: {
    border: "2px solid #0B4E7A",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "10px 18px",
    fontWeight: 900,
    fontSize: "22px",
    lineHeight: 1,
    cursor: "pointer",
  },
  topTabActive: {
    backgroundColor: "#0B71B6",
    color: "#ffffff",
  },

  excelBtn: {
    marginLeft: "auto",
    borderRadius: "28px",
    border: "2px solid #333",
    backgroundColor: "#D9A600",
    color: "#ffffff",
    fontWeight: 900,
    padding: "14px 22px",
    fontSize: "18px",
    cursor: "pointer",
  },

  /* ===== Sub tabs (small) ===== */
  subTabsRow: {
    display: "flex",
    gap: "6px",
    marginTop: "6px",
  },
  subTab: {
    border: "2px solid #0B4E7A",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "6px 14px",
    fontWeight: 900,
    cursor: "pointer",
    fontSize: "16px",
  },
  subTabActive: {
    backgroundColor: "#0B71B6",
    color: "#ffffff",
  },

  /* ===== Main Frame (blue border) ===== */
  frame: {
    border: "2px solid #0B71B6",
    borderRadius: "2px",
    backgroundColor: "#ffffff",
    padding: "10px 10px 12px 10px",
  },

  /* ===== Header area inside frame ===== */
  headerTop: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  },

  leftTitleBox: {
    width: "150px",
    height: "52px",
    backgroundColor: "#0B71B6",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    borderRadius: "2px",
    fontSize: "20px",
  },

  /* ===== Chevron stepper (like image1) ===== */
  stepperWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "0px",
    overflow: "hidden",
  },
  step: {
    position: "relative",
    height: "52px",
    minWidth: "170px",
    backgroundColor: "#E8F0FA",
    color: "#444",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    border: "1px solid #B9C7D6",
    borderRight: "none",
  },
  stepActive: {
    backgroundColor: "#0B71B6",
    color: "#ffffff",
    border: "1px solid #0B71B6",
  },
  stepChevron: {
    position: "relative",
    height: "52px",
    minWidth: "170px",
    backgroundColor: "#E8F0FA",
    color: "#444",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    border: "1px solid #B9C7D6",
    borderLeft: "none",
  },
  stepChevronBefore: {
    content: '""',
  },

  stepWithArrow: {
    clipPath:
      "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%)",
  },
  stepFirst: {
    clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)",
  },

  rightInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  lastUpdatedBox: {
    border: "1px solid #333",
    padding: "10px 14px",
    backgroundColor: "#ffffff",
    fontWeight: 900,
    fontSize: "16px",
  },
  saveBtn: {
    borderRadius: "14px",
    border: "2px solid #333",
    backgroundColor: "#D9A600",
    color: "#ffffff",
    fontWeight: 900,
    padding: "10px 18px",
    cursor: "pointer",
    fontSize: "16px",
  },

  /* ===== Filter (collapsible) ===== */
  filterHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "6px 0 6px 0",
  },
  filterTitle: {
    fontWeight: 900,
    color: "#333",
  },
  foldBtn: {
    border: "2px solid #333",
    borderRadius: "16px",
    padding: "6px 12px",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: 900,
  },

  filters: {
    display: "grid",
    gridTemplateColumns: "240px 240px 340px 260px 320px",
    gap: "14px",
    alignItems: "end",
    padding: "8px 0 10px 0",
  },
  field: { display: "grid", gap: "6px" },
  label: { fontSize: "12px", fontWeight: 900, color: "#333" },

  searchRow: {
    display: "grid",
    gridTemplateColumns: "1fr 110px",
    gap: "8px",
    alignItems: "end",
  },
  searchBtn: {
    borderRadius: "14px",
    border: "2px solid #333",
    backgroundColor: "#F5F6C7",
    fontWeight: 900,
  },

  /* ===== small buttons row ===== */
  smallBtns: {
    display: "flex",
    gap: "10px",
    margin: "6px 0 10px 0",
  },
  smallBtn: {
    borderRadius: "16px",
    border: "2px solid #333",
    backgroundColor: "#E6E6E6",
    fontWeight: 900,
    padding: "6px 12px",
    cursor: "pointer",
  },
  smallBtnPrimary: {
    backgroundColor: "#D9A600",
    color: "#fff",
  },

  /* ===== table ===== */
  tableWrap: {
    border: "1px solid #BDBDBD",
    borderRadius: "2px",
    overflow: "auto",
    backgroundColor: "#ffffff",
    maxHeight: "520px",
  },
  table: {
    minWidth: "1680px",
  },
  th: {
    fontWeight: 900,
    fontSize: "12px",
    whiteSpace: "nowrap",
    position: "sticky",
    top: 0,
    backgroundColor: "#ffffff",
    zIndex: 2,
    borderBottom: "2px solid #BDBDBD",
  },
  td: {
  fontSize: "12px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
},

  /* checkbox columns (narrow like excel) */
  cbTh: { width: "44px", minWidth: "44px", maxWidth: "44px", textAlign: "center" },
  cbTd: { width: "44px", minWidth: "44px", maxWidth: "44px", textAlign: "center" },

  moneyTh: { textAlign: "right" },
  moneyTd: { textAlign: "right" },
  unitRow: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "4px 2px 0 0",
    color: "#333",
    fontWeight: 900,
    fontSize: "12px",
  },

  cellCorp: { width: "140px", maxWidth: "140px" },
cellPartner: { width: "220px", maxWidth: "220px" },
cellAddress: { width: "260px", maxWidth: "260px" },

  note: {
    marginTop: "8px",
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
  },
});

function ymd(d: Date) {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}/${mm}/${dd}`;
}

function money(n: number) {
  return n.toLocaleString("ja-JP");
}

function makeSampleRows(): Row[] {
  const base: Omit<Row, "id">[] = [
    {
      targetSelected: false,
      prevSelected: true,
      customerOwner: "東京浩一郎",
      prevDept: "東京中央営業所",
      prevOwner: "田中一郎",
      corpName: "○○工務店",
      partnerCd: "14850254",
      partnerName: "○○工務店",
      customerClass: "カバー顧客",
      coverClass: "A",
      rank: "S1",
      open: "D1",
      grant: "A",
      address: "東京都墨田区田久保1丁目…",
      prevOrder: 123456,
      avg4q: 11245,
    },
    {
      targetSelected: false,
      prevSelected: false,
      customerOwner: "千場浩二郎",
      prevDept: "東京中央営業所",
      prevOwner: "田中一郎",
      corpName: "△△サッシ店",
      partnerCd: "14852502",
      partnerName: "△△サッシ店",
      customerClass: "カバー顧客",
      coverClass: "A",
      rank: "R2",
      open: "D2",
      grant: "B",
      address: "神奈川県小田原市小田原3…",
      prevOrder: 2000,
      avg4q: 408,
    },
    {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "東京浩一郎",
    prevDept: "東京中央営業所",
    prevOwner: "田中一郎",
    corpName: "○○工務店",
    partnerCd: "14850254",
    partnerName: "○○工務店",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "S1",
    open: "D1",
    grant: "A",
    address: "東京都墨田区田久保1丁目…",
    prevOrder: 123456,
    avg4q: 11245,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "千場浩二郎",
    prevDept: "東京中央営業所",
    prevOwner: "田中一郎",
    corpName: "△△サッシ店",
    partnerCd: "14852502",
    partnerName: "△△サッシ店",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "R2",
    open: "D2",
    grant: "B",
    address: "神奈川県小田原市小田原3…",
    prevOrder: 2000,
    avg4q: 408,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "千場浩二郎",
    prevDept: "東京中央営業所",
    prevOwner: "田中一郎",
    corpName: "□□設計事務所",
    partnerCd: "14850193",
    partnerName: "□□設計事務所建築部門",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "S1",
    open: "D2",
    grant: "A",
    address: "埼玉県ふじみ野市田◯新町…",
    prevOrder: 500,
    avg4q: 17116,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "千場浩二郎",
    prevDept: "東京西営業所",
    prevOwner: "鈴木太郎",
    corpName: "○△商店",
    partnerCd: "14852657",
    partnerName: "○△商店",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "S1",
    open: "D2",
    grant: "C",
    address: "東京都東海区豊砂123－…",
    prevOrder: 100,
    avg4q: 17143,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "千場浩二郎",
    prevDept: "東京西営業所",
    prevOwner: "鈴木太郎",
    corpName: "△□建工",
    partnerCd: "14852674",
    partnerName: "△□建工",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "S1",
    open: "D2",
    grant: "F",
    address: "東京都豊中区豊島34－3…",
    prevOrder: 2000,
    avg4q: 53565,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "千場浩二郎",
    prevDept: "東京東営業所",
    prevOwner: "工藤勇",
    corpName: "□○組",
    partnerCd: "14854945",
    partnerName: "□○組東京支店",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "S1",
    open: "D2",
    grant: "E",
    address: "千葉県雲南市里中4－5－…",
    prevOrder: 500,
    avg4q: 11276,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "千場浩二郎",
    prevDept: "東京東営業所",
    prevOwner: "工藤勇",
    corpName: "△○リフォーム",
    partnerCd: "14852007",
    partnerName: "△○リフォーム",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "S2",
    open: "D2",
    grant: "F",
    address: "東京都丸亀区丸亀7－7－…",
    prevOrder: 6000,
    avg4q: 6574,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "千場浩二郎",
    prevDept: "足立営業所",
    prevOwner: "安藤良夫",
    corpName: "□△工業",
    partnerCd: "14850303",
    partnerName: "□△工業中央支店",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "R1",
    open: "D2",
    grant: "?",
    address: "東京都中間区須磨町3－4…",
    prevOrder: 5000,
    avg4q: 1558,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "千場浩二郎",
    prevDept: "足立営業所",
    prevOwner: "安藤良夫",
    corpName: "○□販売",
    partnerCd: "14857179",
    partnerName: "○□販売",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "R1",
    open: "D2",
    grant: "C",
    address: "東京都新潟区南予町446…",
    prevOrder: 0,
    avg4q: 2095,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "千場浩二郎",
    prevDept: "足立営業所",
    prevOwner: "安藤良夫",
    corpName: "◆◆エンジニアリング",
    partnerCd: "14857344",
    partnerName: "◆◆エンジニアリング",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "R1",
    open: "D2",
    grant: "?",
    address: "埼玉県浦和市浦和中央12…",
    prevOrder: 0,
    avg4q: 1041,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "東京浩一郎",
    prevDept: "東京南営業所",
    prevOwner: "松尾良",
    corpName: "●●ホーム",
    partnerCd: "14857345",
    partnerName: "●●ホーム",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "S3",
    open: "D2",
    grant: "?",
    address: "東京都武蔵野市田無124…",
    prevOrder: 0,
    avg4q: 1527,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "東京浩一郎",
    prevDept: "東京南営業所",
    prevOwner: "松尾良",
    corpName: "●●硝子",
    partnerCd: "14850106",
    partnerName: "●●硝子",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "R2",
    open: "D3",
    grant: "E",
    address: "千葉県香取市水上町189…",
    prevOrder: 0,
    avg4q: 475,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "東京浩一郎",
    prevDept: "東京南営業所",
    prevOwner: "松尾良",
    corpName: "●●アーク",
    partnerCd: "14850229",
    partnerName: "●●アーク",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "R2",
    open: "D1",
    grant: "E",
    address: "神奈川県伊勢崎市金冷南4…",
    prevOrder: 200,
    avg4q: 910,
  },
  {
    targetSelected: false,
    prevSelected: true,
    customerOwner: "東京浩一郎",
    prevDept: "東京南営業所",
    prevOwner: "松尾良",
    corpName: "■▲コーポレーション",
    partnerCd: "14854080",
    partnerName: "■▲コーポレーション",
    customerClass: "カバー顧客",
    coverClass: "A",
    rank: "R2",
    open: "D2",
    grant: "A",
    address: "東京都稲沢市稲見中央1…",
    prevOrder: 100,
    avg4q: 594,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "東京浩一郎",
    prevDept: "板橋営業所",
    prevOwner: "三木宗太",
    corpName: "◇◇建設",
    partnerCd: "14853893",
    partnerName: "◇◇建設板橋支店",
    customerClass: "カバー顧客",
    coverClass: "",
    rank: "N",
    open: "D3",
    grant: "?",
    address: "東京都吹田区吹上吹町56…",
    prevOrder: 0,
    avg4q: 100,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "東京浩一郎",
    prevDept: "板橋営業所",
    prevOwner: "三木宗太",
    corpName: "△◇ソリューションズ",
    partnerCd: "14853340",
    partnerName: "△◇ソリューションズ",
    customerClass: "カバー顧客",
    coverClass: "",
    rank: "R1",
    open: "D4",
    grant: "D",
    address: "東京都葛城区亀有3丁目1…",
    prevOrder: 0,
    avg4q: 0,
  },
  {
    targetSelected: false,
    prevSelected: false,
    customerOwner: "東京浩一郎",
    prevDept: "—",
    prevOwner: "—",
    corpName: "◇□サービス",
    partnerCd: "14850071",
    partnerName: "◇□サービス",
    customerClass: "カバー顧客",
    coverClass: "",
    rank: "R2",
    open: "D4",
    grant: "?",
    address: "東京都府中市粕中56－2",
    prevOrder: 0,
    avg4q: 0,
  },
    {
      targetSelected: true,
      prevSelected: false,
      customerOwner: "千場浩二郎",
      prevDept: "東京西営業所",
      prevOwner: "鈴木太郎",
      corpName: "□□設計事務所",
      partnerCd: "14850193",
      partnerName: "□□設計事務所建築部門",
      customerClass: "カバー顧客",
      coverClass: "A",
      rank: "S1",
      open: "D2",
      grant: "A",
      address: "埼玉県ふじみ野市四葉町…",
      prevOrder: 500,
      avg4q: 17116,
    },
    {
      targetSelected: false,
      prevSelected: true,
      customerOwner: "東京浩一郎",
      prevDept: "東京南営業所",
      prevOwner: "松尾良",
      corpName: "◆◆エンジニアリング",
      partnerCd: "14857344",
      partnerName: "◆◆エンジニアリング",
      customerClass: "カバー顧客",
      coverClass: "A",
      rank: "R1",
      open: "D2",
      grant: "?",
      address: "埼玉県浦和市浦和中央12…",
      prevOrder: 0,
      avg4q: 1041,
    },
  ];

  return base.map((b, idx) => ({
    id: `${Date.now()}-${idx}`,
    ...b,
  }));
}

function downloadCsv(filename: string, csvText: string) {
  const blob = new Blob([csvText], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function toCsv(rows: Row[]) {
  const header = [
    "ターゲット選定",
    "前期選定",
    "顧客担当者",
    "前期所属",
    "前期担当者",
    "法人名",
    "取引先CD",
    "取引先名",
    "顧客区分",
    "カバー区分",
    "顧客",
    "ランク開拓",
    "与信",
    "住所",
    "前期受注実績(千円)",
    "前4期平均受注(千円)",
  ];

  const esc = (v: string) => {
    // CSV escape
    const s = String(v ?? "");
    if (s.includes('"') || s.includes(",") || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const lines = [
    header.join(","),
    ...rows.map((r) =>
      [
        r.targetSelected ? "1" : "0",
        r.prevSelected ? "1" : "0",
        r.customerOwner,
        r.prevDept,
        r.prevOwner,
        r.corpName,
        r.partnerCd,
        r.partnerName,
        r.customerClass,
        r.coverClass,
        r.rank,
        r.open,
        r.grant,
        r.address,
        String(r.prevOrder),
        String(r.avg4q),
      ]
        .map(esc)
        .join(",")
    ),
  ];
  return lines.join("\r\n");
}

export default function App() {
  const styles = useStyles();

  // tabs
  const [topTab, setTopTab] = React.useState<TopTab>("ターゲット");
  const [subTab, setSubTab] = React.useState<SubTab>("ターゲット選定確認");

  // filter fold
  const [showFilters, setShowFilters] = React.useState(true);

  // filter states (demo)
  const [division, setDivision] = React.useState("首都圏事業部");
  const [branch, setBranch] = React.useState("東京第一支店");
  const [dept, setDept] = React.useState("所属・統括所課・出張所・係名");
  const [personName, setPersonName] = React.useState("東京浩一郎");
  const [partnerName, setPartnerName] = React.useState("");

  const [rows, setRows] = React.useState<Row[]>(() => makeSampleRows());
  const [lastUpdated] = React.useState<string>(() => ymd(new Date()));

  const onSearch = () => {
    const key = partnerName.trim();
    if (!key) {
      setRows(makeSampleRows());
      alert("（デモ）検索条件が空なのでサンプルを再表示しました。");
      return;
    }
    setRows(makeSampleRows().filter((r) => r.partnerName.includes(key) || r.corpName.includes(key)));
  };

  const onExcel = () => {
    const csv = toCsv(rows);
    downloadCsv(`target_demo_${lastUpdated.replace(/\//g, "")}.csv`, csv);
  };

  const onSave = () => {
    alert("（デモ）保存は未実装です（UI確認用）。");
  };

  const copyPrevToTarget = () => {
    setRows((prev) =>
      prev.map((r) => ({
        ...r,
        targetSelected: r.prevSelected,
      }))
    );
    alert("（デモ）前期選定をターゲット選定へコピーしました。");
  };

  const toggleRow = (id: string, key: "targetSelected" | "prevSelected") => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: !r[key] } : r)));
  };

  // stepper: make the active step match subTab
  const steps: SubTab[] = ["一覧", "担当者設定", "顧客選定", "ターゲット選定確認"];
  const activeIdx = Math.max(0, steps.indexOf(subTab));

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.page}>
        {/* ===== TOP AREA: big tabs + excel ===== */}
        <div className={styles.topBar}>
          <div>
            <div className={styles.topTabs}>
              {(["顧客", "ターゲット", "活動記録", "実績帳票", "聞き取りシェア", "設定"] as TopTab[]).map((t) => (
                <button
                  key={t}
                  className={`${styles.topTab} ${t === topTab ? styles.topTabActive : ""}`}
                  onClick={() => setTopTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* sub tabs (only show when topTab is 顧客 or ターゲット like real system) */}
            <div className={styles.subTabsRow}>
              {(["一覧", "担当者設定", "顧客選定", "ターゲット選定確認"] as SubTab[]).map((t) => (
                <button
                  key={t}
                  className={`${styles.subTab} ${t === subTab ? styles.subTabActive : ""}`}
                  onClick={() => {
                    // demo: keep topTab as ターゲット to match screenshots
                    setTopTab("ターゲット");
                    setSubTab(t);
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button className={styles.excelBtn} onClick={onExcel}>
            EXCEL出力
          </button>
        </div>

        {/* ===== MAIN FRAME ===== */}
        <div className={styles.frame}>
          {/* header inside frame */}
          <div className={styles.headerTop}>
            <div className={styles.leftTitleBox}>顧客一覧</div>

            {/* chevron stepper (image1 style) */}
            <div className={styles.stepperWrap}>
              {steps.map((s, idx) => {
                const isFirst = idx === 0;
                const isActive = idx === activeIdx;
                const clsBase = `${styles.step} ${styles.stepWithArrow} ${isFirst ? styles.stepFirst : ""}`;
                const cls = `${clsBase} ${isActive ? styles.stepActive : ""}`;
                return (
                  <div key={s} className={cls} style={{ marginLeft: isFirst ? 0 : "-18px" }}>
                    {s}
                  </div>
                );
              })}
            </div>

            <div className={styles.rightInfo}>
              <div className={styles.lastUpdatedBox}>最終更新日：{lastUpdated}</div>
              <button className={styles.saveBtn} onClick={onSave}>
                保存
              </button>
            </div>
          </div>

          {/* filter fold header */}
          <div className={styles.filterHeader}>
            <div className={styles.filterTitle}>条件</div>
            <button className={styles.foldBtn} onClick={() => setShowFilters((v) => !v)}>
              {showFilters ? "条件を折りたたむ" : "条件を表示"}
            </button>
          </div>

          {/* Filters (collapsible) */}
          {showFilters && (
            <div className={styles.filters}>
              <div className={styles.field}>
                <div className={styles.label}>事業部名</div>
                <Dropdown
                  value={division}
                  selectedOptions={[division]}
                  onOptionSelect={(_, d) => setDivision(String(d.optionValue))}
                >
                  <Option value="首都圏事業部">首都圏事業部</Option>
                  <Option value="関西事業部">関西事業部</Option>
                  <Option value="中部事業部">中部事業部</Option>
                </Dropdown>
              </div>

              <div className={styles.field}>
                <div className={styles.label}>支店名</div>
                <Dropdown
                  value={branch}
                  selectedOptions={[branch]}
                  onOptionSelect={(_, d) => setBranch(String(d.optionValue))}
                >
                  <Option value="東京第一支店">東京第一支店</Option>
                  <Option value="東京第二支店">東京第二支店</Option>
                  <Option value="横浜支店">横浜支店</Option>
                </Dropdown>
              </div>

              <div className={styles.field}>
                <div className={styles.label}>所属・統括所課・出張所・係名</div>
                <Dropdown value={dept} selectedOptions={[dept]} onOptionSelect={(_, d) => setDept(String(d.optionValue))}>
                  <Option value="所属・統括所課・出張所・係名">所属・統括所課・出張所・係名</Option>
                  <Option value="東京中央営業所">東京中央営業所</Option>
                  <Option value="東京西営業所">東京西営業所</Option>
                  <Option value="東京南営業所">東京南営業所</Option>
                </Dropdown>
              </div>

              <div className={styles.field}>
                <div className={styles.label}>氏名</div>
                <div className={styles.searchRow}>
                  <Input value={personName} onChange={(_, d) => setPersonName(d.value)} />
                  <Button className={styles.searchBtn} onClick={() => alert("（デモ）氏名検索は未実装です。")}>
                    検索
                  </Button>
                </div>
              </div>

              <div className={styles.field}>
                <div className={styles.label}>取引先名</div>
                <div className={styles.searchRow}>
                  <Input
                    value={partnerName}
                    onChange={(_, d) => setPartnerName(d.value)}
                    placeholder="取引先名を入力"
                  />
                  <Button className={styles.searchBtn} onClick={onSearch}>
                    検索
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* small buttons row */}
          <div className={styles.smallBtns}>
            <button className={`${styles.smallBtn} ${styles.smallBtnPrimary}`} onClick={copyPrevToTarget}>
              前期コピー
            </button>
            <button className={styles.smallBtn} onClick={() => alert("（デモ）前期コピー（右側）は未実装です。")}>
              前期コピー
            </button>
          </div>

          {/* unit label (千円) like screenshot */}
          <div className={styles.unitRow}>（千円）</div>

          {/* table */}
          <div className={styles.tableWrap}>
            <Table className={styles.table} aria-label="customer list">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell className={`${styles.th} ${styles.cbTh}`}>ターゲット<br />選定</TableHeaderCell>
                  <TableHeaderCell className={`${styles.th} ${styles.cbTh}`}>前期<br />選定</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>顧客担当者</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>前期所属</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>前期担当者</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>法人名</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>取引先CD</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>取引先名</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>顧客区分</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>カバー<br />区分</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>顧客</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>ランク<br />開拓</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>与信</TableHeaderCell>
                  <TableHeaderCell className={styles.th}>住所</TableHeaderCell>
                  <TableHeaderCell className={`${styles.th} ${styles.moneyTh}`}>前期<br />受注実績</TableHeaderCell>
                  <TableHeaderCell className={`${styles.th} ${styles.moneyTh}`}>前４期<br />平均受注</TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {rows.map((r, idx) => (
                  <TableRow key={r.id} className={undefined}>
                    <TableCell className={`${styles.td} ${styles.cbTd}`}>
                      <input
                        type="checkbox"
                        checked={r.targetSelected}
                        onChange={() => toggleRow(r.id, "targetSelected")}
                      />
                    </TableCell>
                    <TableCell className={`${styles.td} ${styles.cbTd}`}>
                      <input
                        type="checkbox"
                        checked={r.prevSelected}
                        onChange={() => toggleRow(r.id, "prevSelected")}
                      />
                    </TableCell>
                    <TableCell className={styles.td}>{r.customerOwner}</TableCell>
                    <TableCell className={styles.td}>{r.prevDept}</TableCell>
                    <TableCell className={styles.td}>{r.prevOwner}</TableCell>
                    <TableCell className={styles.td}>{r.corpName}</TableCell>
                    <TableCell className={styles.td}>{r.partnerCd}</TableCell>
                    <TableCell className={styles.td}>{r.partnerName}</TableCell>
                    <TableCell className={styles.td}>{r.customerClass}</TableCell>
                    <TableCell className={styles.td}>{r.coverClass}</TableCell>
                    <TableCell className={styles.td}>{r.rank}</TableCell>
                    <TableCell className={styles.td}>{r.open}</TableCell>
                    <TableCell className={styles.td}>{r.grant}</TableCell>
                    <TableCell className={styles.td}>{r.address}</TableCell>
                    <TableCell className={`${styles.td} ${styles.moneyTd}`}>{money(r.prevOrder)}</TableCell>
                    <TableCell className={`${styles.td} ${styles.moneyTd}`}>{money(r.avg4q)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className={styles.note}>
            ※ これは UI 復刻デモです（データ連携・保存・EXCEL出力は後で実装可能）
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}