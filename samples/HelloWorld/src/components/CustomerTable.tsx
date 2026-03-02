import { type Row } from "../data/mock";
import { useStyles } from "../styles/useStyles";

type CustomerTableProps = {
  rows: Row[];
  selectedMap: Record<string, boolean>;
  prevMap: Record<string, boolean>;
  onToggle: (id: string) => void;
  onTogglePrev: (id: string) => void;
  onCopyPrev: () => void;
  onCopyPrevTarget: () => void;
  isTargetStep: boolean;
  activeRowId: string | null;
  onRowClick: (id: string) => void;
};

export default function CustomerTable({ rows, selectedMap, prevMap, onToggle, onTogglePrev, onCopyPrev, onCopyPrevTarget, isTargetStep, activeRowId, onRowClick }: CustomerTableProps) {
  const styles = useStyles();

  return (
    <>
      <div className={styles.actions}>
        <div className={styles.actionBtns}>
          <button type="button" className={`${styles.actionBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onCopyPrev}>
            前期
          </button>
          <button type="button" className={`${styles.actionBtn} ${styles.clickable} ${styles.pressable} ${styles.focusable} ${isTargetStep ? styles.actionBtnActive : styles.hoverable}`} onClick={onCopyPrevTarget}>
            前期コピー
          </button>
        </div>
        <div className={styles.unit}>(千円)</div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>選定</th>
              <th className={styles.th}>前期</th>
              <th className={styles.th}>顧客担当者</th>
              <th className={styles.th}>前期所属</th>
              <th className={styles.th}>前期担当者</th>
              <th className={styles.th}>前期ターゲット選定者</th>
              <th className={styles.th}>法人名</th>
              <th className={styles.th}>取引先CD</th>
              <th className={styles.th}>取引先名</th>
              <th className={styles.th}>顧客区分</th>
              <th className={styles.th}>カバー区分</th>
              <th className={styles.th}>顧客</th>
              <th className={styles.th}>開拓</th>
              <th className={styles.th}>与信</th>
              <th className={styles.th}>住所</th>
              <th className={styles.th}>前期受注実績</th>
              <th className={styles.th}>前4期平均受注</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.id}
                className={`${styles.trRow} ${styles.trHover} ${idx % 2 === 1 ? styles.trEven : ""} ${activeRowId === row.id ? styles.trActive : ""}`}
                onClick={() => onRowClick(row.id)}
              >
                <td className={`${styles.td} ${styles.center}`}>
                  <input type="checkbox" checked={!!selectedMap[row.id]} onClick={(e) => e.stopPropagation()} onChange={() => onToggle(row.id)} />
                </td>
                <td className={`${styles.td} ${styles.center}`}>
                  <input type="checkbox" checked={!!prevMap[row.id]} onClick={(e) => e.stopPropagation()} onChange={() => onTogglePrev(row.id)} />
                </td>
                <td className={styles.td}>{row.owner}</td>
                <td className={styles.td}>{row.prevDept}</td>
                <td className={styles.td}>{row.prevOwner}</td>
                <td className={styles.td}>{row.targetSelector}</td>
                <td className={styles.td}>{row.corpName}</td>
                <td className={styles.td}>{row.partnerCd}</td>
                <td className={styles.td}>{row.partnerName}</td>
                <td className={styles.td}>{row.customerType}</td>
                <td className={styles.td}>{row.coverType}</td>
                <td className={styles.td}>{row.rankCustomer}</td>
                <td className={styles.td}>{row.rankOpen}</td>
                <td className={styles.td}>{row.rankCredit}</td>
                <td className={styles.td}>{row.address}</td>
                <td className={`${styles.td} ${styles.right}`}>{row.prevResult.toLocaleString("ja-JP")}</td>
                <td className={`${styles.td} ${styles.right}`}>{row.avg4q.toLocaleString("ja-JP")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
