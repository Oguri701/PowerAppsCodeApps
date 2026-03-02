import { useStyles } from "../styles/useStyles";

type ShareTabProps = {
  customerId: string;
};

type ShareRow = {
  product: string;
  own: string;
  comp1: string;
  comp1Rate: string;
  comp2: string;
  comp2Rate: string;
  y2024: string;
  y2023: string;
  y2022: string;
  y2021: string;
  y2020: string;
};

const SHARE_ROWS: ShareRow[] = [
  { product: "重量SS", own: "50%", comp1: "文化SS", comp1Rate: "20%", comp2: "東洋SS", comp2Rate: "20%", y2024: "40%", y2023: "20%", y2022: "20%", y2021: "20%", y2020: "20%" },
  { product: "軽量SS", own: "40%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "10%", y2023: "50%", y2022: "40%", y2021: "50%", y2020: "40%" },
  { product: "LD", own: "50%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "5%", y2023: "40%", y2022: "", y2021: "40%", y2020: "50%" },
  { product: "SD", own: "33%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "10%", y2023: "10%", y2022: "33%", y2021: "10%", y2020: "33%" },
  { product: "間仕切", own: "20%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "50%", y2023: "50%", y2022: "20%", y2021: "50%", y2020: "20%" },
  { product: "内(TB", own: "40%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "5%", y2023: "5%", y2022: "40%", y2021: "5%", y2020: "40%" },
  { product: "内(学校", own: "10%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "20%", y2023: "20%", y2022: "10%", y2021: "20%", y2020: "10%" },
  { product: "内(SP", own: "5%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "0%", y2023: "0%", y2022: "5%", y2021: "0%", y2020: "5%" },
  { product: "ステンレス", own: "0%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "20%", y2023: "20%", y2022: "0%", y2021: "20%", y2020: "0%" },
  { product: "フロント", own: "50%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "0%", y2023: "0%", y2022: "50%", y2021: "0%", y2020: "50%" },
  { product: "エンジン", own: "50%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "5%", y2023: "40%", y2022: "50%", y2021: "40%", y2020: "50%" },
  { product: "OSD", own: "33%", comp1: "亀岡", comp1Rate: "50%", comp2: "文化SS", comp2Rate: "5%", y2024: "10%", y2023: "10%", y2022: "33%", y2021: "10%", y2020: "33%" },
  { product: "クイック", own: "40%", comp1: "文化SS", comp1Rate: "30%", comp2: "", comp2Rate: "", y2024: "5%", y2023: "5%", y2022: "40%", y2021: "5%", y2020: "40%" },
  { product: "防水", own: "10%", comp1: "文化SS", comp1Rate: "40%", comp2: "", comp2Rate: "", y2024: "20%", y2023: "20%", y2022: "10%", y2021: "20%", y2020: "10%" },
  { product: "エクステリア", own: "5%", comp1: "文化SS", comp1Rate: "20%", comp2: "", comp2Rate: "", y2024: "0%", y2023: "0%", y2022: "5%", y2021: "0%", y2020: "5%" },
  { product: "窓", own: "20%", comp1: "文化SS", comp1Rate: "20%", comp2: "", comp2Rate: "", y2024: "50%", y2023: "50%", y2022: "20%", y2021: "50%", y2020: "20%" },
  { product: "住宅ドア", own: "20%", comp1: "YKKAP", comp1Rate: "70%", comp2: "LIXIL", comp2Rate: "", y2024: "40%", y2023: "20%", y2022: "20%", y2021: "20%", y2020: "20%" },
  { product: "一般修理関連", own: "40%", comp1: "", comp1Rate: "", comp2: "", comp2Rate: "", y2024: "10%", y2023: "50%", y2022: "40%", y2021: "50%", y2020: "40%" },
  { product: "一般メンテ関連", own: "0%", comp1: "", comp1Rate: "", comp2: "", comp2Rate: "", y2024: "20%", y2023: "20%", y2022: "0%", y2021: "20%", y2020: "0%" },
  { product: "法定検査関連", own: "50%", comp1: "", comp1Rate: "", comp2: "", comp2Rate: "", y2024: "0%", y2023: "0%", y2022: "50%", y2021: "0%", y2020: "50%" },
];

export default function ShareTab({ customerId }: ShareTabProps) {
  const styles = useStyles();
  void customerId;

  return (
    <div className={styles.shareWrap}>
      <div className={styles.shareLeft}>
        <table className={styles.shareTable}>
          <thead>
            <tr>
              <th className={styles.shareTh} colSpan={2}>
                想定シェア　期間
              </th>
              <th className={styles.shareTh} colSpan={4}>
                今年度
              </th>
            </tr>
            <tr>
              <th className={styles.shareTh}>商品</th>
              <th className={styles.shareTh}>当社シェア</th>
              <th className={styles.shareTh}>競合先一位</th>
              <th className={styles.shareTh} />
              <th className={styles.shareTh}>競合先2位</th>
              <th className={styles.shareTh} />
            </tr>
          </thead>
          <tbody>
            {SHARE_ROWS.map((row) => (
              <tr key={row.product}>
                <td className={styles.shareTd}>{row.product}</td>
                <td className={`${styles.shareTdRight} ${styles.shareHighlight}`}>{row.own}</td>
                <td className={`${styles.shareTd} ${styles.shareHighlight}`}>{row.comp1}</td>
                <td className={styles.shareTdRight}>{row.comp1Rate}</td>
                <td className={styles.shareTd}>{row.comp2 ? `${row.comp2} ▼` : "▼"}</td>
                <td className={styles.shareTdRight}>{row.comp2Rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.shareArrow}>過去データ→</div>

      <div className={styles.shareRight}>
        <table className={styles.shareTable}>
          <thead>
            <tr>
              <th className={styles.shareTh}>2024年度</th>
              <th className={styles.shareTh}>2023年度</th>
              <th className={styles.shareTh}>2022年度</th>
              <th className={styles.shareTh}>2021年度</th>
              <th className={styles.shareTh}>2020年度</th>
            </tr>
            <tr>
              <th className={styles.shareTh}>当社シェア</th>
              <th className={styles.shareTh}>当社シェア</th>
              <th className={styles.shareTh}>当社シェア</th>
              <th className={styles.shareTh}>当社シェア</th>
              <th className={styles.shareTh}>当社シェア</th>
            </tr>
          </thead>
          <tbody>
            {SHARE_ROWS.map((row) => (
              <tr key={`${row.product}-past`}>
                <td className={styles.shareTdRight}>{row.y2024}</td>
                <td className={styles.shareTdRight}>{row.y2023}</td>
                <td className={styles.shareTdRight}>{row.y2022}</td>
                <td className={styles.shareTdRight}>{row.y2021}</td>
                <td className={styles.shareTdRight}>{row.y2020}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
