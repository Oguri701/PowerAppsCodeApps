import { useStyles } from "../styles/useStyles";

type TradeHistoryTabProps = {
  customerId: string;
};

const PERIODS = ["NOW", "2024下", "2024上", "2023下", "2023上", "2022下", "2022上", "2021下", "2021上", "2020下", "2020上"] as const;

type TradeHistoryRow = {
  label: string;
  values: string[];
};

const TRADE_HISTORY_ROWS_BY_CUSTOMER_ID: Record<string, TradeHistoryRow[]> = {
  "1": [
    { label: "担当者", values: ["東京 浩二郎", "東京 浩二郎", "東京 浩二郎", "東京 浩二郎", "東京 浩二郎", "東京 浩二郎", "東京 浩二郎", "千場 浩九郎", "東京 浩八郎", "東京 浩八郎", "東京 浩八郎"] },
    { label: "受注", values: ["30,000", "30,000", "50,000", "20,000", "35,000", "44,000", "20,000", "30,000", "100,000", "100,000", "200,000"] },
    { label: "受注利益", values: ["3,000", "4,000", "5,000", "2,200", "3,500", "4,400", "2,500", "3,000", "5,600", "6,900", "2,000"] },
    { label: "受注差益率", values: ["20%", "50%", "35%", "25%", "20%", "63%", "48%", "40%", "57%", "15%", "36%"] },
    { label: "売上", values: ["20,000", "20,000", "40,000", "15,000", "30,000", "30,000", "10,000", "10,000", "65,000", "25,000", "30,000"] },
    { label: "限界利益", values: ["10,000", "10,000", "20,000", "8,000", "15,000", "15,000", "5,000", "5,000", "33,000", "12,000", "15,000"] },
    { label: "限界利益率", values: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"] },
    { label: "取引商品数(受注)", values: ["5", "8", "25", "13", "6", "8", "11", "20", "17", "3", "6"] },
    { label: "商品カバー率(受注)", values: ["26%", "38%", "62%", "48%", "12%", "35%", "67%", "38%", "48%", "19%", "28%"] },
  ],
};

export default function TradeHistoryTab({ customerId }: TradeHistoryTabProps) {
  const styles = useStyles();
  const rows = TRADE_HISTORY_ROWS_BY_CUSTOMER_ID[customerId] ?? TRADE_HISTORY_ROWS_BY_CUSTOMER_ID["1"];

  return (
    <div className={styles.tradeHistoryWrap}>
      <table className={styles.tradeHistoryTable}>
        <thead>
          <tr>
            <th className={styles.tradeHistoryThLabel} rowSpan={2}>
              取引履歴
            </th>
            <th className={styles.tradeHistoryThPeriod} colSpan={PERIODS.length}>
              期間
            </th>
            <th className={styles.tradeHistoryThUnit} rowSpan={2}>
              単位:千円
            </th>
          </tr>
          <tr>
            {PERIODS.map((period) => (
              <th key={period} className={styles.tradeHistoryTh}>
                {period}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className={styles.tradeHistoryTdLabel}>{row.label}</td>
              {row.values.map((value, idx) => (
                <td key={`${row.label}-${idx}`} className={styles.tradeHistoryTd}>
                  {value}
                </td>
              ))}
              <td className={styles.tradeHistoryTdUnit} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
