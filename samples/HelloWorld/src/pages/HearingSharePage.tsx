import * as React from "react";
import { HEARING_SHARE_ROWS, type HearingShareFilters, type HearingShareRow } from "../data/mock";
import { useStyles } from "../styles/useStyles";

function FilterBar({
  filters,
  onChange,
  onSave,
}: {
  filters: HearingShareFilters;
  onChange: (key: keyof HearingShareFilters, value: string) => void;
  onSave: () => void;
}) {
  const styles = useStyles();
  return (
    <div className={styles.hearingFilter}>
      <div className={styles.hearingField}>
        <label className={styles.hearingLabel}>事業部名</label>
        <select className={styles.hearingSelect} value={filters.division} onChange={(e) => onChange("division", e.target.value)}>
          <option>首都圏事業部</option>
          <option>中部事業部</option>
        </select>
      </div>
      <div className={styles.hearingField}>
        <label className={styles.hearingLabel}>支店名</label>
        <select className={styles.hearingSelect} value={filters.branch} onChange={(e) => onChange("branch", e.target.value)}>
          <option>東京第一支店</option>
          <option>東京第二支店</option>
        </select>
      </div>
      <div className={styles.hearingField}>
        <label className={styles.hearingLabel}>所属</label>
        <select className={styles.hearingSelect} value={filters.dept} onChange={(e) => onChange("dept", e.target.value)}>
          <option>東京中央営業所</option>
          <option>東京中央営業所 第二係</option>
          <option>東京東営業所</option>
        </select>
      </div>
      <div className={styles.hearingField}>
        <label className={styles.hearingLabel}>商品</label>
        <select className={styles.hearingSelect} value={filters.product} onChange={(e) => onChange("product", e.target.value)}>
          <option>軽量シャッター</option>
          <option>重量シャッター</option>
          <option>防火シャッター</option>
        </select>
      </div>
      <div className={styles.hearingField}>
        <label className={styles.hearingLabel}>入力開始日</label>
        <input className={styles.hearingDateInput} value={filters.startDate} onChange={(e) => onChange("startDate", e.target.value)} />
      </div>
      <div className={styles.hearingField}>
        <label className={styles.hearingLabel}>入力締日</label>
        <input className={styles.hearingDateInput} value={filters.endDate} onChange={(e) => onChange("endDate", e.target.value)} />
      </div>
      <button type="button" className={`${styles.hearingSaveBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onSave}>
        保存
      </button>
    </div>
  );
}

function ShareTable({ rows }: { rows: HearingShareRow[] }) {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.hearingHint}>下表は所属エリアの前年度数値</div>
      <div className={styles.hearingTableWrap}>
        <table className={styles.hearingTable}>
          <thead>
            <tr>
              <th className={styles.hearingTh}>支店・営業所課</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>推計市場(数量)</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>前年実績(数量)</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>三和シャッター工業 シェア</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>文化シャッター シェア</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>東洋シャッター シェア</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>鈴木シャッター シェア</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>その他 シェア</th>
              <th className={`${styles.hearingTh} ${styles.hearingRight}`}>合計 シェア</th>
              <th className={styles.hearingTh}>備考</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.area} className={styles.trHover}>
                <td className={styles.hearingTd}>{r.area}</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.estimatedMarket}㎡</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.previousYear}㎡</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.sanwa.toFixed(1)}%</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.bunka.toFixed(1)}%</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.toyo.toFixed(1)}%</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.suzuki.toFixed(1)}%</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.other.toFixed(1)}%</td>
                <td className={`${styles.hearingTd} ${styles.hearingRight}`}>{r.total.toFixed(1)}%</td>
                <td className={styles.hearingTd}>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReferenceBox() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.hearingRefHeader}>
        <span>参考</span>
        <span>（2025年度）</span>
      </div>
      <div className={styles.hearingRefBox}>
        <div className={styles.hearingRefRow}>
          <div className={styles.hearingRefCell}>全社シェア</div>
          <div className={styles.hearingRefValue}>45%</div>
        </div>
      </div>
    </div>
  );
}

export default function HearingSharePage() {
  const styles = useStyles();
  const [filters, setFilters] = React.useState<HearingShareFilters>({
    division: "首都圏事業部",
    branch: "東京第一支店",
    dept: "東京中央営業所",
    product: "軽量シャッター",
    startDate: "2026/2/8",
    endDate: "2026/2/28",
  });

  const onChange = (key: keyof HearingShareFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const onSave = () => {
    console.log("保存(仮)", filters);
    alert("保存(仮)");
  };

  return (
    <section className={styles.frame}>
      <div className={styles.hearingWrap}>
        <FilterBar filters={filters} onChange={onChange} onSave={onSave} />
        <div className={styles.hearingMain}>
          <ShareTable rows={HEARING_SHARE_ROWS} />
          <ReferenceBox />
        </div>
      </div>
    </section>
  );
}
