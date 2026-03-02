import * as React from "react";
import { useStyles } from "../styles/useStyles";

export default function ActivityRecordPage() {
  const styles = useStyles();
  const [selectedDay, setSelectedDay] = React.useState<number>(5);

  return (
    <section className={styles.frame}>
      <div className={styles.monthCard}>
        <div className={styles.monthHeader}>2025年 6月</div>
        <div className={styles.monthGrid}>
          {Array.from({ length: 28 }).map((_, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              className={`${styles.monthCell} ${styles.clickable} ${styles.pressable} ${styles.focusable} ${idx === selectedDay ? styles.monthSelected : styles.hoverable}`}
              onClick={() => setSelectedDay(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedDay(idx);
                }
              }}
            >
              {idx + 1}日
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
