import * as React from "react";
import { useStyles } from "../styles/useStyles";

type PerformanceRow = {
  group: string;
  item: string;
  monthActual: string;
  monthPlan: string;
  monthRate: string;
  monthLast: string;
  monthYoY: string;
  cumActual: string;
  cumPlan: string;
  cumRate: string;
  cumLast: string;
  cumYoY: string;
  eval: string;
  upperPlan: string;
  progress: string;
  upperLast: string;
};

const REPORT_TABS = [
  "業績計画/実績",
  "見積・追求推移",
  "商品別 受注計画",
  "ランク別取引先 受注目標",
  "商品別 手持ち状況",
  "取引先別商品別",
  "見積追求アラート",
] as const;

const PERFORMANCE_ROWS: PerformanceRow[] = [
  { group: "受注", item: "金額", monthActual: "32,323", monthPlan: "30,860", monthRate: "104.7", monthLast: "33,413", monthYoY: "96.7", cumActual: "78,310", cumPlan: "61,390", cumRate: "127.6", cumLast: "91,290", cumYoY: "85.8", eval: "◎", upperPlan: "180,000", progress: "43.5", upperLast: "220,511" },
  { group: "受注", item: "差益", monthActual: "9,697", monthPlan: "8,000", monthRate: "121.2", monthLast: "8,000", monthYoY: "121.2", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "受注", item: "差益率", monthActual: "30%", monthPlan: "26%", monthRate: "115.7", monthLast: "24%", monthYoY: "125.3", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "売上", item: "金額", monthActual: "7,180", monthPlan: "19,080", monthRate: "37.6", monthLast: "7,571", monthYoY: "94.8", cumActual: "9,254", cumPlan: "30,300", cumRate: "30.5", cumLast: "15,952", cumYoY: "58.0", eval: "×", upperPlan: "120,000", progress: "7.7", upperLast: "154,641" },
  { group: "売上", item: "差益", monthActual: "4,297", monthPlan: "9,390", monthRate: "45.8", monthLast: "3,522", monthYoY: "122.0", cumActual: "5,946", cumPlan: "14,500", cumRate: "41.0", cumLast: "8,886", cumYoY: "66.9", eval: "×", upperPlan: "57,600", progress: "10.3", upperLast: "62,663" },
  { group: "売上", item: "差益率", monthActual: "59.8", monthPlan: "49.2", monthRate: "121.6", monthLast: "46.5", monthYoY: "128.6", cumActual: "64.3", cumPlan: "47.9", cumRate: "134.3", cumLast: "55.7", cumYoY: "115.3", eval: "◎", upperPlan: "48", progress: "133.9", upperLast: "41" },
  { group: "変動経費", item: "取付工事費", monthActual: "10,000", monthPlan: "", monthRate: "", monthLast: "", monthYoY: "", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "変動経費", item: "物流費", monthActual: "5,000", monthPlan: "", monthRate: "", monthLast: "", monthYoY: "", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "変動経費", item: "設計費", monthActual: "2,000", monthPlan: "", monthRate: "", monthLast: "", monthYoY: "", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "変動経費", item: "変動経費率", monthActual: "1,000", monthPlan: "", monthRate: "", monthLast: "", monthYoY: "", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "変動経費", item: "計", monthActual: "18,000", monthPlan: "", monthRate: "", monthLast: "", monthYoY: "", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "限界利益", item: "金額", monthActual: "", monthPlan: "", monthRate: "", monthLast: "", monthYoY: "", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
  { group: "限界利益", item: "率", monthActual: "", monthPlan: "", monthRate: "", monthLast: "", monthYoY: "", cumActual: "", cumPlan: "", cumRate: "", cumLast: "", cumYoY: "", eval: "", upperPlan: "", progress: "", upperLast: "" },
];

export default function PerformanceReportPage() {
  const styles = useStyles();
  const [subTab, setSubTab] = React.useState<(typeof REPORT_TABS)[number]>("業績計画/実績");
  const [filters, setFilters] = React.useState({
    headOffice: "首都圏・中日本事業",
    division: "首都圏事業部",
    branch: "東京第一支店",
    dept: "東京中央営業所",
    person: "三和 太郎",
    year: "2025",
    term: "下",
    month: "3",
  });

  const grouped: Record<string, number> = {};
  PERFORMANCE_ROWS.forEach((r) => {
    grouped[r.group] = (grouped[r.group] || 0) + 1;
  });
  const rendered: Record<string, boolean> = {};

  return (
    <section className={styles.frame}>
      <div className={styles.perfFilterRow}>
        <div className={styles.perfField}>
          <label className={styles.perfLabel}>事業本部名</label>
          <select className={styles.perfSelect} value={filters.headOffice} onChange={(e) => setFilters((p) => ({ ...p, headOffice: e.target.value }))}>
            <option>首都圏・中日本事業</option>
            <option>関西・西日本事業</option>
          </select>
        </div>
        <div className={styles.perfField}>
          <label className={styles.perfLabel}>事業部名</label>
          <select className={styles.perfSelect} value={filters.division} onChange={(e) => setFilters((p) => ({ ...p, division: e.target.value }))}>
            <option>首都圏事業部</option>
            <option>関西事業部</option>
          </select>
        </div>
        <div className={styles.perfField}>
          <label className={styles.perfLabel}>支店名</label>
          <select className={styles.perfSelect} value={filters.branch} onChange={(e) => setFilters((p) => ({ ...p, branch: e.target.value }))}>
            <option>東京第一支店</option>
            <option>東京第二支店</option>
          </select>
        </div>
        <div className={styles.perfField}>
          <label className={styles.perfLabel}>所属・統括所属・出張所・係名</label>
          <select className={styles.perfSelect} value={filters.dept} onChange={(e) => setFilters((p) => ({ ...p, dept: e.target.value }))}>
            <option>東京中央営業所</option>
            <option>東京中央営業所 第一係</option>
            <option>東京東営業所</option>
          </select>
        </div>
        <div className={styles.perfField}>
          <label className={styles.perfLabel}>氏名</label>
          <select className={styles.perfSelect} value={filters.person} onChange={(e) => setFilters((p) => ({ ...p, person: e.target.value }))}>
            <option>三和 太郎</option>
            <option>東京 浩二郎</option>
          </select>
        </div>
        <div className={styles.perfPeriodGroup}>
          <div className={styles.perfPeriodCol}>
            <select className={styles.perfSelect} value={filters.year} onChange={(e) => setFilters((p) => ({ ...p, year: e.target.value }))}>
              <option>2025</option>
              <option>2024</option>
            </select>
            <select className={styles.perfSelect} value={filters.term} onChange={(e) => setFilters((p) => ({ ...p, term: e.target.value }))}>
              <option>上</option>
              <option>下</option>
            </select>
          </div>
          <div className={styles.perfPeriodLabelCol}>
            <div className={styles.perfPeriodLabel}>年度</div>
            <div className={styles.perfPeriodLabel}>期</div>
          </div>
        </div>
        <div className={styles.perfMonthGroup}>
          <select className={styles.perfMonthSelect} value={filters.month} onChange={(e) => setFilters((p) => ({ ...p, month: e.target.value }))}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <div className={styles.perfMonthLabel}>月度</div>
        </div>
        <button type="button" className={`${styles.perfSearchBtn} ${styles.clickable}`}>
          検索
        </button>
      </div>

      <div className={styles.perfTabs}>
        {REPORT_TABS.map((tab, idx) => (
          <button
            key={tab}
            type="button"
            data-active={subTab === tab ? "true" : "false"}
            className={`${styles.perfTab} ${idx === 0 ? styles.perfTabFirst : ""} ${subTab === tab ? styles.perfTabActive : ""}`}
            onClick={() => setSubTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {subTab === "業績計画/実績" ? (
        <div className={styles.perfPanel}>
          <div className={styles.perfSectionTitle}>{"<個人別>"}</div>
          <div className={styles.perfInfoCard}>
            <div className={styles.perfInfoRow}>
              <div className={styles.perfInfoLabel}>組織</div>
              <div className={styles.perfInfoValue}>東京中央営業所</div>
            </div>
            <div className={styles.perfInfoRow}>
              <div className={styles.perfInfoLabel}>担当者</div>
              <div className={styles.perfInfoValue}>三和 太郎</div>
            </div>
          </div>

          <div className={styles.perfSectionTitle} style={{ marginTop: "10px" }}>
            業績計画/実績
          </div>
          <div className={styles.perfUnit}>(千円・%)</div>

          <div className={styles.perfTableWrap}>
            <table className={styles.perfTable}>
              <thead>
                <tr>
                  <th className={styles.perfTh} rowSpan={2} />
                  <th className={styles.perfTh} rowSpan={2} />
                  <th className={styles.perfTh} colSpan={5}>
                    当月
                  </th>
                  <th className={styles.perfTh} colSpan={6}>
                    累計
                  </th>
                  <th className={styles.perfTh} colSpan={3}>
                    上期進捗
                  </th>
                </tr>
                <tr>
                  <th className={styles.perfTh}>実績</th>
                  <th className={styles.perfTh}>計画</th>
                  <th className={styles.perfTh}>計画比</th>
                  <th className={styles.perfTh}>前年</th>
                  <th className={styles.perfTh}>前年比</th>
                  <th className={styles.perfTh}>実績</th>
                  <th className={styles.perfTh}>計画</th>
                  <th className={styles.perfTh}>計画比</th>
                  <th className={styles.perfTh}>前年</th>
                  <th className={styles.perfTh}>前年比</th>
                  <th className={styles.perfTh}>進捗評価</th>
                  <th className={styles.perfTh}>計画</th>
                  <th className={styles.perfTh}>進捗率</th>
                  <th className={styles.perfTh}>前年</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_ROWS.map((row) => {
                  const showGroup = !rendered[row.group];
                  rendered[row.group] = true;
                  return (
                    <tr key={`${row.group}-${row.item}`}>
                      {showGroup && (
                        <td className={`${styles.perfTd} ${styles.perfCenter}`} rowSpan={grouped[row.group]}>
                          {row.group}
                        </td>
                      )}
                      <td className={`${styles.perfTd} ${styles.perfCenter}`}>{row.item}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.monthActual}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.monthPlan}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.monthRate}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.monthLast}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.monthYoY}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.cumActual}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.cumPlan}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.cumRate}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.cumLast}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.cumYoY}</td>
                      <td className={`${styles.perfTd} ${styles.perfCenter}`}>{row.eval}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.upperPlan}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.progress}</td>
                      <td className={`${styles.perfTd} ${styles.perfRight}`}>{row.upperLast}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className={styles.perfNote}>※限界利益は他変動費用を除く</div>
        </div>
      ) : (
        <div className={styles.perfPlaceholderPanel}>
          <div className={styles.customerDetailPlaceholder}>{subTab} はデモのためプレースホルダーです。</div>
        </div>
      )}
    </section>
  );
}
