import { useStyles } from "../styles/useStyles";

type OrderProductHistoryTabProps = {
  customerId: string;
};

const PERIODS = ["NOW", "2024下", "2024上", "2023下", "2023上", "2022下", "2022上", "2021下", "2021上", "2020下", "2020上"] as const;

type OrderProductRow = {
  product: string;
  values: string[];
};

const ORDER_PRODUCT_ROWS_BY_CUSTOMER_ID: Record<string, OrderProductRow[]> = {
  "1": [
    { product: "重量SS", values: ["1000", "2000", "3000", "4000", "1000", "2000", "3000", "4000", "1000", "2000", "3000"] },
    { product: "軽量SS", values: ["200", "300", "400", "100", "200", "いずれかを表示", "400", "100", "200", "300", "400"] },
    { product: "LD", values: ["550", "650", "750", "850", "650", "750", "850", "550", "650", "750", "850"] },
    { product: "SD", values: ["2000", "3000", "1500", "2500", "2000", "3000", "1500", "2500", "2000", "3000", "1500"] },
    { product: "TB", values: ["850", "950", "850", "1500", "2500", "950", "850", "850", "750", "550", "450"] },
    { product: "学校", values: ["750", "650", "850", "950", "850", "950", "850", "950", "850", "950", "850"] },
    { product: "SP", values: ["600", "700", "800", "900", "600", "700", "800", "900", "600", "700", "800"] },
    { product: "間仕切", values: ["300", "400", "500", "100", "200", "300", "600", "500", "300", "500", "400"] },
    { product: "ステンレス", values: ["950", "850", "650", "850", "950", "1000", "850", "950", "650", "450", "450"] },
    { product: "フロント", values: ["2500", "3500", "1500", "1500", "4500", "2500", "1500", "3500", "4500", "2500", "1500"] },
    { product: "エンジン", values: ["200", "300", "400", "100", "200", "300", "400", "2500", "2000", "3000", "1500"] },
    { product: "OSD", values: ["550", "650", "750", "850", "650", "750", "850", "850", "750", "550", "450"] },
    { product: "クイック", values: ["2000", "3000", "1500", "2500", "2000", "3000", "1500", "950", "850", "950", "850"] },
    { product: "防水", values: ["850", "950", "850", "1500", "2500", "950", "850", "900", "600", "700", "800"] },
    { product: "エクステリア", values: ["750", "650", "850", "950", "850", "950", "850", "500", "300", "500", "400"] },
    { product: "窓", values: ["600", "700", "800", "900", "600", "700", "800", "4000", "1000", "2000", "3000"] },
    { product: "住宅ドア", values: ["300", "400", "500", "100", "200", "300", "600", "100", "200", "300", "400"] },
    { product: "一般修理関連", values: ["950", "850", "650", "850", "950", "1000", "850", "550", "650", "750", "850"] },
    { product: "一般メンテ関連", values: ["1000", "2000", "3000", "4000", "1000", "2000", "3000", "2500", "2000", "3000", "1500"] },
    { product: "法定検査関連", values: ["200", "300", "400", "100", "200", "300", "400", "850", "750", "550", "450"] },
  ],
};

export default function OrderProductHistoryTab({ customerId }: OrderProductHistoryTabProps) {
  const styles = useStyles();
  const rows = ORDER_PRODUCT_ROWS_BY_CUSTOMER_ID[customerId] ?? ORDER_PRODUCT_ROWS_BY_CUSTOMER_ID["1"];

  return (
    <div className={styles.orderHistoryWrap}>
      <table className={styles.orderHistoryTable}>
        <thead>
          <tr>
            <th className={styles.orderHistoryThTitle} rowSpan={2}>
              受注商品履歴
              <br />
              商品
            </th>
            <th className={styles.orderHistoryThAmount} colSpan={PERIODS.length}>
              受注金額
            </th>
            <th className={styles.orderHistoryThUnit}>単位:千円</th>
          </tr>
          <tr>
            <th className={styles.orderHistoryThPeriodLabel}>期間</th>
            {PERIODS.map((period) => (
              <th key={period} className={styles.orderHistoryThPeriod}>
                {period}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.product}>
              <td className={styles.orderHistoryTdProduct}>{row.product}</td>
              {row.values.map((value, idx) => (
                <td key={`${row.product}-${idx}`} className={styles.orderHistoryTdValue}>
                  {value}
                </td>
              ))}
              <td className={styles.orderHistoryTdUnit} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
