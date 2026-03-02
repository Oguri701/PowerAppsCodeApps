import * as React from "react";
import {
  HEARING_SHARE_ROWS,
  SETTINGS_EXTRAS,
  SETTINGS_PRODUCTS,
  SETTINGS_SUB_TABS,
  SETTINGS_TARGET_PERIODS,
  SETTINGS_TERMS,
  SETTINGS_YEARS,
  downloadSimpleExportCsv,
  type SettingsExportState,
  type SettingsSubTab,
} from "../data/mock";
import { useStyles } from "../styles/useStyles";

function CheckboxGroup({
  title,
  items,
  selected,
  onToggle,
}: {
  title: string;
  items: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  const styles = useStyles();
  return (
    <div className={styles.checkboxPanel}>
      <div className={styles.checkboxPanelTitle}>{title}</div>
      <div className={styles.checkboxList}>
        {items.map((item) => (
          <label key={item} className={`${styles.checkboxLabel} ${styles.checkboxInteractive}`}>
            <input type="checkbox" checked={selected.includes(item)} onChange={() => onToggle(item)} />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function ExportCard({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  const styles = useStyles();
  return (
    <button type="button" className={`${styles.exportCard} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onClick}>
      <div className={styles.exportCardTitle}>{title}</div>
      <div className={styles.exportCardIcon}>⬆</div>
      <div className={styles.exportCardSub}>CSVデータ</div>
    </button>
  );
}

function ExportSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const styles = useStyles();
  return (
    <section className={styles.settingsSection}>
      <div className={styles.settingsSectionTitle}>{title}</div>
      {children}
    </section>
  );
}

function SettingsSubTabs({
  active,
  onChange,
}: {
  active: SettingsSubTab;
  onChange: (tab: SettingsSubTab) => void;
}) {
  const styles = useStyles();
  return (
    <div className={styles.settingsSubTabs}>
      {SETTINGS_SUB_TABS.map((tab, idx) => (
        <button
          key={tab}
          type="button"
          className={`${styles.settingsSubTab} ${styles.clickable} ${styles.pressable} ${styles.focusable} ${active === tab ? styles.settingsSubTabActive : styles.hoverable}`}
          style={{ marginLeft: idx === 0 ? 0 : "-14px" }}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default function SettingsPage() {
  const styles = useStyles();
  const [subTab, setSubTab] = React.useState<SettingsSubTab>("エクスポート");
  const [state, setState] = React.useState<SettingsExportState>({
    products: ["全商品"],
    targetPeriods: ["今期"],
    activityYears: ["2025年度"],
    activityTerms: ["上期", "下期"],
    activityExtras: [],
    hearingYears: ["2025年度"],
  });

  const toggleFromList = (key: keyof SettingsExportState, value: string) => {
    setState((prev) => {
      const list = prev[key] as string[];
      const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
      return { ...prev, [key]: next };
    });
  };

  const exportTarget = (type: "all" | "opportunity") => {
    const rows = HEARING_SHARE_ROWS.map((r) => [r.area, `${r.estimatedMarket}`, `${r.total}%`]);
    downloadSimpleExportCsv(
      type === "all" ? "export_target_all.csv" : "export_target_opportunity.csv",
      "ターゲット顧客リスト",
      [`商品=${state.products.join("|") || "なし"}`, `期間=${state.targetPeriods.join("|") || "なし"}`, `種別=${type}`],
      rows,
    );
  };

  const exportPrompt = () => {
    downloadSimpleExportCsv("export_prompt_amount.csv", "提示金額記録", ["固定出力"], [["A社", "120000", "2025Q4"], ["B社", "98000", "2025Q4"]]);
  };

  const exportActivity = () => {
    downloadSimpleExportCsv(
      "export_activity.csv",
      "活動記録",
      [`年度=${state.activityYears.join("|") || "なし"}`, `期=${state.activityTerms.join("|") || "なし"}`, `その他=${state.activityExtras.join("|") || "なし"}`],
      [["訪問", "10", "営業所A"], ["打合せ", "6", "営業所B"]],
    );
  };

  const exportHearing = () => {
    downloadSimpleExportCsv(
      "export_hearing_share.csv",
      "聞き取りシェア",
      [`年度=${state.hearingYears.join("|") || "なし"}`],
      HEARING_SHARE_ROWS.map((r) => [r.area, `${r.sanwa}%`, `${r.total}%`]),
    );
  };

  return (
    <section className={styles.frame}>
      <SettingsSubTabs active={subTab} onChange={setSubTab} />
      {subTab === "エクスポート" ? (
        <div className={styles.settingsExportFrame}>
          <ExportSection title="ターゲット顧客リスト（選定済）">
            <div className={styles.settingsTopBody}>
              <CheckboxGroup title="商品" items={SETTINGS_PRODUCTS} selected={state.products} onToggle={(v) => toggleFromList("products", v)} />
              <CheckboxGroup title="対象期間" items={SETTINGS_TARGET_PERIODS} selected={state.targetPeriods} onToggle={(v) => toggleFromList("targetPeriods", v)} />
              <div className={styles.settingsArrow}>→</div>
              <div className={styles.exportCardStack}>
                <ExportCard title={"全件\nエクスポート"} onClick={() => exportTarget("all")} />
                <ExportCard title={"拡販余地顧客のみ\nエクスポート"} onClick={() => exportTarget("opportunity")} />
              </div>
            </div>
          </ExportSection>

          <div className={styles.settingsMiddleRow}>
            <ExportSection title="提示金額記録">
              <div className={styles.exportCardStack}>
                <ExportCard title="エクスポート" onClick={exportPrompt} />
              </div>
            </ExportSection>

            <ExportSection title="活動記録">
              <div className={styles.settingsActivityBody}>
                <CheckboxGroup title="" items={SETTINGS_YEARS} selected={state.activityYears} onToggle={(v) => toggleFromList("activityYears", v)} />
                <div className={styles.checkboxPanel}>
                  <div className={styles.checkboxList}>
                    {SETTINGS_TERMS.map((term) => (
                      <label key={term} className={`${styles.checkboxLabel} ${styles.checkboxInteractive}`}>
                        <input type="checkbox" checked={state.activityTerms.includes(term)} onChange={() => toggleFromList("activityTerms", term)} />
                        <span>{term}</span>
                      </label>
                    ))}
                    {SETTINGS_EXTRAS.map((extra) => (
                      <label key={extra} className={`${styles.checkboxLabel} ${styles.checkboxInteractive}`}>
                        <input type="checkbox" checked={state.activityExtras.includes(extra)} onChange={() => toggleFromList("activityExtras", extra)} />
                        <span>{extra}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className={styles.exportCardStack}>
                  <ExportCard title="エクスポート" onClick={exportActivity} />
                </div>
              </div>
            </ExportSection>
          </div>

          <div className={styles.settingsBottomRow}>
            <ExportSection title="聞き取りシェア">
              <div className={styles.settingsHearingBody}>
                <CheckboxGroup title="" items={SETTINGS_YEARS} selected={state.hearingYears} onToggle={(v) => toggleFromList("hearingYears", v)} />
                <div className={styles.exportCardStack}>
                  <ExportCard title="エクスポート" onClick={exportHearing} />
                </div>
              </div>
            </ExportSection>
          </div>
        </div>
      ) : (
        <section className={styles.settingsPlaceholder}>テリトリ設定は次フェーズで実装します</section>
      )}
    </section>
  );
}
