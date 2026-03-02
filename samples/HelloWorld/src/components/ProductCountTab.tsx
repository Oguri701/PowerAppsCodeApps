import { Fragment } from "react";
import { useStyles } from "../styles/useStyles";

type ProductCountBlock = {
  period: string;
  targetCount: string;
  actualCount: string;
  coverRate: string;
  rowA: string[];
  rowB: string[];
};

type ProductCountTabProps = {
  customerId: string;
};

const PRODUCT_COLUMNS = ["重量SS", "軽量SS", "LD", "SD", "TB", "学校", "SP", "間仕切", "ステンレス", "フロント", "エンジン"] as const;

const PRODUCT_COUNT_BY_CUSTOMER_ID: Record<string, ProductCountBlock[]> = {
  "1": [
    {
      period: "過去2年",
      targetCount: "7",
      actualCount: "9",
      coverRate: "1.29",
      rowA: ["重量SS", "軽量SS", "LD", "SD", "TB", "学校", "SP", "間仕切", "ステンレス", "フロント", "エンジン"],
      rowB: ["OSD", "クイック", "防水", "エクステリア", "窓", "住宅ドア", "一般修理関連", "一般ｶﾝﾃ関連", "法定検査関連", "", ""],
    },
    {
      period: "前年同半期",
      targetCount: "7",
      actualCount: "5",
      coverRate: "0.71",
      rowA: ["重量SS", "軽量SS", "LD", "SD", "TB", "学校", "", "間仕切", "ステンレス", "フロント", "エンジン"],
      rowB: ["OSD", "クイック", "防水", "エクステリア", "窓", "住宅ドア", "一般修理関連", "一般ｶﾝﾃ関連", "法定検査関連", "", ""],
    },
    {
      period: "今期",
      targetCount: "7",
      actualCount: "2",
      coverRate: "0.29",
      rowA: ["重量SS", "軽量SS", "LD", "SD", "TB", "学校", "SP", "間仕切", "ステンレス", "フロント", "エンジン"],
      rowB: ["OSD", "クイック", "防水", "エクステリア", "窓", "住宅ドア", "一般修理関連", "一般ｶﾝﾃ関連", "法定検査関連", "", ""],
    },
  ],
};

export default function ProductCountTab({ customerId }: ProductCountTabProps) {
  const styles = useStyles();
  const blocks = PRODUCT_COUNT_BY_CUSTOMER_ID[customerId] ?? PRODUCT_COUNT_BY_CUSTOMER_ID["1"];

  return (
    <div className={styles.productCountWrap}>
      <table className={styles.productCountTable}>
        <thead>
          <tr>
            <th className={styles.productCountTh}>期間</th>
            <th className={styles.productCountTh}>目標取引商品数</th>
            <th className={styles.productCountTh}>実績取引商品数</th>
            <th className={styles.productCountTh}>カバー率</th>
            <th className={styles.productCountTh} colSpan={PRODUCT_COLUMNS.length}>
              取引商品　（該当商品ハイライト）
            </th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => (
            <Fragment key={block.period}>
              <tr>
                <td className={styles.productCountTd} rowSpan={2}>
                  {block.period}
                </td>
                <td className={styles.productCountTdCenter} rowSpan={2}>
                  {block.targetCount}
                </td>
                <td className={styles.productCountTdCenter} rowSpan={2}>
                  {block.actualCount}
                </td>
                <td className={styles.productCountTdCenter} rowSpan={2}>
                  {block.coverRate}
                </td>
                {block.rowA.map((item, idx) => (
                  <td key={`${block.period}-a-${idx}`} className={`${styles.productCountTd} ${item ? styles.productCountHighlight : ""}`}>
                    {item}
                  </td>
                ))}
              </tr>
              <tr>
                {block.rowB.map((item, idx) => (
                  <td key={`${block.period}-b-${idx}`} className={styles.productCountTd}>
                    {item}
                  </td>
                ))}
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
