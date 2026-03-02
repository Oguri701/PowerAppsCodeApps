import type * as React from "react";
import { CUSTOMER_SUB_TABS, type CustomerSubTab, type StepKey, type TopTab } from "../data/mock";
import { useStyles } from "../styles/useStyles";

type SubTabsProps = {
  topTab: TopTab;
  step: StepKey;
  onStepClick: (next: StepKey) => void;
  customerTabLayout: { left: number; width: number };
  pairButtonWidth: number;
  subTabsRowRef: React.RefObject<HTMLDivElement>;
};

function mapCustomerToStep(tab: CustomerSubTab): StepKey {
  if (tab === "担当者設定") return "customerOwner";
  if (tab === "顧客選定") return "targetSelect";
  if (tab === "目標値入力") return "targetConfirm";
  return "customerList";
}

export default function SubTabs({ topTab, step, onStepClick, customerTabLayout, pairButtonWidth, subTabsRowRef }: SubTabsProps) {
  const styles = useStyles();

  return (
    <div className={`${styles.tabs} ${styles.subTabsTargetWidthLock}`} ref={subTabsRowRef}>
      {CUSTOMER_SUB_TABS.map((sub) => {
        const canHighlight = topTab === "顧客" || topTab === "ターゲット";
        const active =
          canHighlight &&
          ((sub === "一覧" && step === "customerList") ||
            (sub === "担当者設定" && step === "customerOwner") ||
            (sub === "顧客選定" && step === "targetSelect") ||
            (sub === "目標値入力" && step === "targetConfirm"));
        const firstStyle =
          pairButtonWidth > 0
            ? { marginLeft: `${customerTabLayout.left}px`, width: `${pairButtonWidth}px`, minWidth: `${pairButtonWidth}px` }
            : undefined;
        const secondStyle = pairButtonWidth > 0 ? { width: `${pairButtonWidth}px`, minWidth: `${pairButtonWidth}px` } : undefined;

        return (
          <button
            key={sub}
            type="button"
            className={`${styles.subTab} ${styles.clickable} ${styles.pressable} ${styles.focusable} ${active ? styles.tabActive : styles.hoverable}`}
            style={sub === "一覧" ? firstStyle : sub === "担当者設定" ? secondStyle : undefined}
            onClick={() => {
              onStepClick(mapCustomerToStep(sub));
            }}
          >
            {sub}
          </button>
        );
      })}
    </div>
  );
}
