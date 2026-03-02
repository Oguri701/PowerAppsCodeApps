import { useStyles } from "../styles/useStyles";

type ProjectHistoryTabProps = {
  customerId: string;
};

type ProjectHistoryRow = {
  soldYm: string;
  title: string;
  projectName: string;
  orderNo: string;
  projectNo: string;
  deliveryAddress: string;
  contractor: string;
  designOffice: string;
  owner: string;
  section: string;
  amount: string;
  products: string;
};

const PROJECT_ROWS_BY_CUSTOMER: Record<string, ProjectHistoryRow[]> = {
  "1": [
    {
      soldYm: "2025/9/30",
      title: "仮称●ビル",
      projectName: "●ビル",
      orderNo: "15205",
      projectNo: "1111111",
      deliveryAddress: "東京都墨田区...",
      contractor: "清水建設",
      designOffice: "船田設計",
      owner: "清水建設",
      section: "新宿営業所, 立川営業所",
      amount: "1,260",
      products: "重量SS      軽量SS      LD",
    },
    {
      soldYm: "2025/6/10",
      title: "学校改修",
      projectName: "県立D学校",
      orderNo: "52415",
      projectNo: "2222222",
      deliveryAddress: "埼玉県浦和市...",
      contractor: "○工務店▼支店",
      designOffice: "安藤設計",
      owner: "埼玉県議会",
      section: "浦和営業所",
      amount: "5,000",
      products: "軽量SS      LD      SD",
    },
    {
      soldYm: "2024/5/2",
      title: "A店舗新設",
      projectName: "A店舗",
      orderNo: "45364",
      projectNo: "6798909",
      deliveryAddress: "東京都武蔵野市...",
      contractor: "今井建装",
      designOffice: "今井建装",
      owner: "青木商事",
      section: "立川営業所",
      amount: "2,000",
      products: "LD      SD",
    },
    {
      soldYm: "2023/2/2",
      title: "増設工事",
      projectName: "Bマンション",
      orderNo: "65584",
      projectNo: "2545122",
      deliveryAddress: "千葉県香取市...",
      contractor: "田中建設",
      designOffice: "平設計事務所",
      owner: "三井不動産",
      section: "成田営業所",
      amount: "100",
      products: "SD",
    },
  ],
};

export default function ProjectHistoryTab({ customerId }: ProjectHistoryTabProps) {
  const styles = useStyles();
  const rows = PROJECT_ROWS_BY_CUSTOMER[customerId] ?? PROJECT_ROWS_BY_CUSTOMER["1"];

  return (
    <div className={styles.projectHistoryWrap}>
      <div className={styles.projectHistoryTopRow}>
        <div className={styles.projectHistoryFilter}>
          <div className={styles.projectHistoryFilterLabel}>キーマン</div>
          <div className={styles.projectHistoryFilterValue}>▼</div>
        </div>
        <button type="button" className={`${styles.projectHistorySearchBtn} ${styles.clickable}`}>
          完工図面検索(VB0I)
        </button>
      </div>

      <table className={styles.projectHistoryTable}>
        <thead>
          <tr>
            <th className={styles.projectHistoryTh}>売上年月</th>
            <th className={styles.projectHistoryTh}>工事名</th>
            <th className={styles.projectHistoryTh}>物件名</th>
            <th className={styles.projectHistoryTh}>受注番号</th>
            <th className={styles.projectHistoryTh}>物件番号</th>
            <th className={styles.projectHistoryTh}>納入住所</th>
            <th className={styles.projectHistoryTh}>元請</th>
            <th className={styles.projectHistoryTh}>設計事務所</th>
            <th className={styles.projectHistoryTh}>施主</th>
            <th className={styles.projectHistoryTh}>所課(JVの場合複数表示)</th>
            <th className={styles.projectHistoryTh}>売上金額(千円)</th>
            <th className={styles.projectHistoryTh}>商品</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.soldYm}-${row.orderNo}`}>
              <td className={styles.projectHistoryTd}>{row.soldYm}</td>
              <td className={styles.projectHistoryTd}>{row.title}</td>
              <td className={styles.projectHistoryTd}>{row.projectName}</td>
              <td className={styles.projectHistoryTdRight}>{row.orderNo}</td>
              <td className={styles.projectHistoryTdRight}>{row.projectNo}</td>
              <td className={styles.projectHistoryTd}>{row.deliveryAddress}</td>
              <td className={styles.projectHistoryTd}>{row.contractor}</td>
              <td className={styles.projectHistoryTd}>{row.designOffice}</td>
              <td className={styles.projectHistoryTd}>{row.owner}</td>
              <td className={styles.projectHistoryTd}>{row.section}</td>
              <td className={styles.projectHistoryTdRight}>{row.amount}</td>
              <td className={styles.projectHistoryTd}>{row.products}</td>
            </tr>
          ))}
          <tr>
            <td className={styles.projectHistoryTd}>:</td>
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
            <td className={styles.projectHistoryTd} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
