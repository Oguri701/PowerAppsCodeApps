import { useStyles } from "../styles/useStyles";

type KeymanRow = {
  no: string;
  name: string;
  landline: string;
  mobile: string;
  email: string;
  department: string;
  role: string;
  updatedAt: string;
  ownerProject: string;
  note: string;
};

type KeymanInfoTabProps = {
  customerId: string;
};

const KEYMAN_ROWS_BY_CUSTOMER_ID: Record<string, KeymanRow[]> = {
  "1": [
    {
      no: "①",
      name: "上田 淳一",
      landline: "03-4395-1234",
      mobile: "090-1555-5555",
      email: "kouichirou@sip.sanwa-ss.co.jp",
      department: "マーケティングコミットチーム",
      role: "リーディングマネージャー",
      updatedAt: "2025.07.07",
      ownerProject: "物件履歴へ",
      note: "価格優先で業者選定を行う",
    },
    {
      no: "②",
      name: "下村 太一",
      landline: "03-4395-1235",
      mobile: "090-1555-5556",
      email: "kouzirou@sip.sanwa-ss.co.jp",
      department: "業績管理・統括本部",
      role: "エグゼクティブプロデューサー",
      updatedAt: "2025.07.08",
      ownerProject: "物件履歴へ",
      note: "",
    },
    {
      no: "③",
      name: "横田 次郎",
      landline: "03-4395-1236",
      mobile: "090-1555-5557",
      email: "kousaburou@sip.sanwa-ss.co.jp",
      department: "マーケティングコミットチーム",
      role: "シニアパートナー",
      updatedAt: "2025.07.09",
      ownerProject: "物件履歴へ",
      note: "各部門への通達も担当している",
    },
    {
      no: "④",
      name: "右京 一茶",
      landline: "03-4395-1237",
      mobile: "090-1555-5558",
      email: "koushirou@sip.sanwa-ss.co.jp",
      department: "組織対策部門",
      role: "部門長",
      updatedAt: "2025.07.10",
      ownerProject: "物件履歴へ",
      note: "",
    },
    {
      no: "⑤",
      name: "左京 元",
      landline: "03-4395-1238",
      mobile: "090-1555-5559",
      email: "kougorou@sip.sanwa-ss.co.jp",
      department: "コミュニティ統括管理業務部",
      role: "一般",
      updatedAt: "2025.07.11",
      ownerProject: "物件履歴へ",
      note: "",
    },
    {
      no: "⑥",
      name: "西田 俊樹",
      landline: "03-4395-1239",
      mobile: "090-1555-5560",
      email: "kourukurou@sip.sanwa-ss.co.jp",
      department: "街づくり業務責任対策本部企画",
      role: "シニアエグゼクティブフェロー",
      updatedAt: "2025.07.12",
      ownerProject: "物件履歴へ",
      note: "",
    },
    {
      no: "⑦",
      name: "東丸 敏也",
      landline: "03-4395-1240",
      mobile: "090-1555-5561",
      email: "koushichirou@sip.sanwa-ss.co.jp",
      department: "セキュリティー対策管理付",
      role: "リーディングマネージャー",
      updatedAt: "2025.07.13",
      ownerProject: "物件履歴へ",
      note: "",
    },
  ],
};

export default function KeymanInfoTab({ customerId }: KeymanInfoTabProps) {
  const styles = useStyles();
  const rows = KEYMAN_ROWS_BY_CUSTOMER_ID[customerId] ?? KEYMAN_ROWS_BY_CUSTOMER_ID["1"];

  return (
    <div className={styles.keymanTableWrap}>
      <table className={styles.keymanTable}>
        <thead>
          <tr>
            <th className={styles.keymanTh}>No</th>
            <th className={styles.keymanTh}>キーマン</th>
            <th className={styles.keymanTh}>固定電話番号</th>
            <th className={styles.keymanTh}>携帯番号</th>
            <th className={styles.keymanTh}>メールアドレス</th>
            <th className={styles.keymanTh}>部署</th>
            <th className={styles.keymanTh}>役職</th>
            <th className={styles.keymanTh}>最終更新日</th>
            <th className={styles.keymanTh}>担当物件</th>
            <th className={styles.keymanTh}>備考</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.no}-${row.name}`}>
              <td className={styles.keymanTd}>{row.no}</td>
              <td className={styles.keymanTd}>{row.name}</td>
              <td className={styles.keymanTd}>{row.landline}</td>
              <td className={styles.keymanTd}>{row.mobile}</td>
              <td className={styles.keymanTd}>{row.email}</td>
              <td className={styles.keymanTd}>{row.department}</td>
              <td className={styles.keymanTd}>{row.role}</td>
              <td className={styles.keymanTd}>{row.updatedAt}</td>
              <td className={styles.keymanTd}>{row.ownerProject}</td>
              <td className={styles.keymanTd}>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
