import { useStyles } from "../styles/useStyles";

type ActivityHistoryTabProps = {
  customerId: string;
};

type ActivityRow = {
  ym: string;
  time: string;
  title: string;
  keyman1: string;
  dept1: string;
  role1: string;
  keyman2: string;
  dept2: string;
  role2: string;
  activity1: string;
  activity2: string;
  activity3: string;
  activity4: string;
  boss: string;
  memo: string;
};

const ACTIVITY_ROWS_BY_CUSTOMER: Record<string, ActivityRow[]> = {
  "1": [
    {
      ym: "2025/9/30",
      time: "10:00~12:00",
      title: "〇〇工務店打合",
      keyman1: "右京 一茶",
      dept1: "組織対策部門",
      role1: "部門長",
      keyman2: "",
      dept2: "",
      role2: "",
      activity1: "間仕切りを提案",
      activity2: "定期訪問",
      activity3: "",
      activity4: "",
      boss: "",
      memo: "",
    },
    {
      ym: "2025/6/10",
      time: "14:00~17:00",
      title: "上田さんへ謝罪",
      keyman1: "上田 淳一",
      dept1: "",
      role1: "",
      keyman2: "",
      dept2: "",
      role2: "",
      activity1: "お詫び",
      activity2: "",
      activity3: "",
      activity4: "",
      boss: "羽太 勇気",
      memo: "納期管理不備にて謝罪、菓子折り持参",
    },
    {
      ym: "2024/5/2",
      time: "10:00~11:00",
      title: "挨拶",
      keyman1: "山田 太郎",
      dept1: "",
      role1: "",
      keyman2: "",
      dept2: "",
      role2: "",
      activity1: "挨拶",
      activity2: "MDの折込",
      activity3: "",
      activity4: "",
      boss: "",
      memo: "",
    },
  ],
};

export default function ActivityHistoryTab({ customerId }: ActivityHistoryTabProps) {
  const styles = useStyles();
  const rows = ACTIVITY_ROWS_BY_CUSTOMER[customerId] ?? ACTIVITY_ROWS_BY_CUSTOMER["1"];

  return (
    <div className={styles.activityHistoryWrap}>
      <div className={styles.activityHistoryFilterRow}>
        <div className={styles.activityHistoryAnd}>AND</div>
        <button type="button" className={`${styles.activityHistorySearchBtn} ${styles.clickable}`}>
          検索
        </button>
      </div>

      <table className={styles.activityHistoryTable}>
        <thead>
          <tr>
            <th className={styles.activityHistoryTh}>年月</th>
            <th className={styles.activityHistoryTh}>時間</th>
            <th className={styles.activityHistoryTh}>タイトル</th>
            <th className={styles.activityHistoryTh}>キーマン1</th>
            <th className={styles.activityHistoryTh}>部署</th>
            <th className={styles.activityHistoryTh}>役職</th>
            <th className={styles.activityHistoryTh}>キーマン2</th>
            <th className={styles.activityHistoryTh}>部署</th>
            <th className={styles.activityHistoryTh}>役職</th>
            <th className={styles.activityHistoryTh}>活動内容1</th>
            <th className={styles.activityHistoryTh}>活動内容2</th>
            <th className={styles.activityHistoryTh}>活動内容3</th>
            <th className={styles.activityHistoryTh}>活動内容4</th>
            <th className={styles.activityHistoryTh}>上長同行</th>
            <th className={styles.activityHistoryTh}>メモ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={`${row.ym}-${idx}`}>
              <td className={styles.activityHistoryTd}>{row.ym}</td>
              <td className={styles.activityHistoryTd}>{row.time}</td>
              <td className={styles.activityHistoryTd}>{row.title}</td>
              <td className={styles.activityHistoryTd}>{row.keyman1}</td>
              <td className={styles.activityHistoryTd}>{row.dept1}</td>
              <td className={styles.activityHistoryTd}>{row.role1}</td>
              <td className={styles.activityHistoryTd}>{row.keyman2}</td>
              <td className={styles.activityHistoryTd}>{row.dept2}</td>
              <td className={styles.activityHistoryTd}>{row.role2}</td>
              <td className={styles.activityHistoryTd}>{row.activity1}</td>
              <td className={styles.activityHistoryTd}>{row.activity2}</td>
              <td className={styles.activityHistoryTd}>{row.activity3}</td>
              <td className={styles.activityHistoryTd}>{row.activity4}</td>
              <td className={styles.activityHistoryTd}>{row.boss}</td>
              <td className={styles.activityHistoryTd}>{row.memo}</td>
            </tr>
          ))}
          {Array.from({ length: 3 }).map((_, idx) => (
            <tr key={`empty-${idx}`}>
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
              <td className={styles.activityHistoryTd} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
