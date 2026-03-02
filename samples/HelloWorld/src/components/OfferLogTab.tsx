import { useStyles } from "../styles/useStyles";

type OfferLogTabProps = {
  customerId: string;
};

type OfferRow = {
  product: string;
  materialRate: string;
  laborRate: string;
  carryInRate: string;
  designRate: string;
  siteRate: string;
  netRate: string;
  netProfit: string;
  avgUnitA: string;
  boardUnitA: string;
  sellRate: string;
  sellProfit: string;
  avgUnitB: string;
  boardUnitB: string;
  minSellRate: string;
  minProfit: string;
  avgUnitC: string;
  boardUnitC: string;
};

const OFFER_ROWS: OfferRow[] = [
  { product: "重量SS", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "1万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "1万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "軽量SS", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "", boardUnitA: "4万円/本枚", sellRate: "27%", sellProfit: "25%", avgUnitB: "", boardUnitB: "4万円/本枚", minSellRate: "20%", minProfit: "5%", avgUnitC: "", boardUnitC: "2万円/本枚" },
  { product: "LD", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "", boardUnitA: "4万円/本枚", sellRate: "27%", sellProfit: "25%", avgUnitB: "", boardUnitB: "4万円/本枚", minSellRate: "20%", minProfit: "5%", avgUnitC: "", boardUnitC: "2万円/本枚" },
  { product: "SD", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "1万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "1万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "TB", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "1万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "1万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "学校", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "1万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "1万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "SP", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "1万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "1万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "間仕切", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "1万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "1万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "ステンレス", materialRate: "205%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "", boardUnitA: "4万円/本枚", sellRate: "27%", sellProfit: "25%", avgUnitB: "", boardUnitB: "4万円/本枚", minSellRate: "20%", minProfit: "5%", avgUnitC: "", boardUnitC: "3万円/本枚" },
  { product: "フロント", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "1万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "1万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "エンジン", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "2万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "2万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "OSD", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "3万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "3万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "クイック", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "4万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "4万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "防水", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "5万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "5万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "エクステリア", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "6万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "6万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "窓", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "7万円/㎡", boardUnitA: "", sellRate: "27%", sellProfit: "25%", avgUnitB: "7万円/㎡", boardUnitB: "", minSellRate: "20%", minProfit: "5%", avgUnitC: "0.5万円/㎡", boardUnitC: "" },
  { product: "住宅ドア", materialRate: "210%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "30%", netProfit: "30%", avgUnitA: "", boardUnitA: "4万円/本枚", sellRate: "27%", sellProfit: "25%", avgUnitB: "", boardUnitB: "4万円/本枚", minSellRate: "20%", minProfit: "5%", avgUnitC: "", boardUnitC: "3万円/本枚" },
  { product: "一般修理関連", materialRate: "300%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "40%", netProfit: "40%", avgUnitA: "", boardUnitA: "", sellRate: "30%", sellProfit: "30%", avgUnitB: "", boardUnitB: "", minSellRate: "25%", minProfit: "25%", avgUnitC: "", boardUnitC: "" },
  { product: "一般メンテ関連", materialRate: "300%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "40%", netProfit: "40%", avgUnitA: "", boardUnitA: "", sellRate: "30%", sellProfit: "30%", avgUnitB: "", boardUnitB: "", minSellRate: "25%", minProfit: "25%", avgUnitC: "", boardUnitC: "" },
  { product: "法定検査関連", materialRate: "300%", laborRate: "160%", carryInRate: "160%", designRate: "160%", siteRate: "160%", netRate: "40%", netProfit: "40%", avgUnitA: "", boardUnitA: "", sellRate: "30%", sellProfit: "30%", avgUnitB: "", boardUnitB: "", minSellRate: "25%", minProfit: "25%", avgUnitC: "", boardUnitC: "" },
];

export default function OfferLogTab({ customerId }: OfferLogTabProps) {
  const styles = useStyles();

  return (
    <div className={styles.offerLogWrap}>
      <div className={styles.offerLogMetaRow}>
        <button type="button" className={`${styles.offerLogSaveBtn} ${styles.clickable}`} onClick={() => console.log("offer-log-save", customerId)}>
          保存
        </button>
        <div className={styles.offerLogUpdated}>最終更新日:　2026/3/2</div>
      </div>

      <table className={styles.offerLogTable}>
        <thead>
          <tr>
            <th className={styles.offerLogTh}>見積・契約商品</th>
            <th className={styles.offerLogTh}>見積表率 材料費</th>
            <th className={styles.offerLogTh}>工事費</th>
            <th className={styles.offerLogTh}>搬入費</th>
            <th className={styles.offerLogTh}>設計費</th>
            <th className={styles.offerLogTh}>現場諸経費</th>
            <th className={styles.offerLogTh}>提示NET(1StNET) 料率%(対上代)</th>
            <th className={styles.offerLogTh}>限界利益率%</th>
            <th className={styles.offerLogTh}>平米単価</th>
            <th className={styles.offerLogTh}>本枚単価</th>
            <th className={styles.offerLogTh}>売上価格(平均値) 料率%(対上代)</th>
            <th className={styles.offerLogTh}>限界利益率%</th>
            <th className={styles.offerLogTh}>平米単価</th>
            <th className={styles.offerLogTh}>本枚単価</th>
            <th className={styles.offerLogTh}>売上価格(最安値) 料率%(対上代)</th>
            <th className={styles.offerLogTh}>限利%</th>
            <th className={styles.offerLogTh}>平米単価</th>
            <th className={styles.offerLogTh}>本枚単価</th>
          </tr>
        </thead>
        <tbody>
          {OFFER_ROWS.map((row) => (
            <tr key={row.product}>
              <td className={styles.offerLogTd}>{row.product}</td>
              <td className={styles.offerLogTdRight}>{row.materialRate}</td>
              <td className={styles.offerLogTdRight}>{row.laborRate}</td>
              <td className={styles.offerLogTdRight}>{row.carryInRate}</td>
              <td className={styles.offerLogTdRight}>{row.designRate}</td>
              <td className={styles.offerLogTdRight}>{row.siteRate}</td>
              <td className={styles.offerLogTdRight}>{row.netRate}</td>
              <td className={styles.offerLogTdRight}>{row.netProfit}</td>
              <td className={styles.offerLogTd}>{row.avgUnitA}</td>
              <td className={styles.offerLogTd}>{row.boardUnitA}</td>
              <td className={styles.offerLogTdRight}>{row.sellRate}</td>
              <td className={styles.offerLogTdRight}>{row.sellProfit}</td>
              <td className={styles.offerLogTd}>{row.avgUnitB}</td>
              <td className={styles.offerLogTd}>{row.boardUnitB}</td>
              <td className={styles.offerLogTdRight}>{row.minSellRate}</td>
              <td className={styles.offerLogTdRight}>{row.minProfit}</td>
              <td className={styles.offerLogTd}>{row.avgUnitC}</td>
              <td className={styles.offerLogTd}>{row.boardUnitC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
