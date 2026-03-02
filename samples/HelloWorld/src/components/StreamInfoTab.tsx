import { useStyles } from "../styles/useStyles";

type StreamInfoTabProps = {
  customerName: string;
};

type StreamRow = {
  category: "direct" | "indirect";
  rank: string;
  vendor: string;
  ratio: string;
};

const STREAM_ROWS: StreamRow[] = [
  { category: "direct", rank: "", vendor: "", ratio: "50%" },
  { category: "indirect", rank: "1位", vendor: "▼▼サッシ", ratio: "30%" },
  { category: "indirect", rank: "2位", vendor: "▼サッシ", ratio: "5%" },
  { category: "indirect", rank: "3位", vendor: "▼●サッシ", ratio: "2%" },
  { category: "indirect", rank: "4位", vendor: "●サッシ", ratio: "1%" },
  { category: "indirect", rank: "5位", vendor: "▼×サッシ", ratio: "1%" },
  { category: "indirect", rank: "6位", vendor: "▼△サッシ", ratio: "1%" },
  { category: "indirect", rank: "7位以下", vendor: "その他", ratio: "10%" },
];

export default function StreamInfoTab({ customerName }: StreamInfoTabProps) {
  const styles = useStyles();

  return (
    <div className={styles.streamInfoWrap}>
      <div className={styles.streamInfoTitle}>”{customerName}”の商流情報</div>
      <table className={styles.streamInfoTable}>
        <thead>
          <tr>
            <th className={styles.streamInfoTh}>商流</th>
            <th className={styles.streamInfoTh}>順位</th>
            <th className={styles.streamInfoTh}>業者名</th>
            <th className={styles.streamInfoTh}>受注金額割合</th>
          </tr>
        </thead>
        <tbody>
          {STREAM_ROWS.map((row) => (
            <tr key={`${row.category}-${row.rank || "direct"}`}>
              {row.category === "direct" ? <td className={styles.streamInfoCategory}>直接受注</td> : null}
              {row.category === "indirect" && row.rank === "1位" ? (
                <td className={styles.streamInfoCategory} rowSpan={7}>
                  間接受注
                </td>
              ) : null}
              <td className={styles.streamInfoTd}>{row.rank}</td>
              <td className={styles.streamInfoTd}>{row.vendor}</td>
              <td className={styles.streamInfoTdRight}>{row.ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
