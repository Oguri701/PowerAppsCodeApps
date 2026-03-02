import type * as React from "react";
import { TOP_TABS, type TopTab } from "../data/mock";
import { useStyles } from "../styles/useStyles";

type TopTabsProps = {
  topTab: TopTab;
  onTopTabClick: (tab: TopTab) => void;
  topTabsRef: React.RefObject<HTMLDivElement>;
  customerTopTabRef: React.RefObject<HTMLButtonElement>;
  targetTopTabRef: React.RefObject<HTMLButtonElement>;
};

export default function TopTabs({ topTab, onTopTabClick, topTabsRef, customerTopTabRef, targetTopTabRef }: TopTabsProps) {
  const styles = useStyles();

  return (
    <div className={styles.tabs} ref={topTabsRef}>
      {TOP_TABS.map((tab) => (
        <button
          key={tab}
          ref={tab === "顧客" ? customerTopTabRef : tab === "ターゲット" ? targetTopTabRef : undefined}
          type="button"
          className={`${styles.tab} ${styles.clickable} ${styles.pressable} ${styles.focusable} ${tab === topTab ? styles.tabActive : styles.hoverable}`}
          onClick={() => onTopTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
