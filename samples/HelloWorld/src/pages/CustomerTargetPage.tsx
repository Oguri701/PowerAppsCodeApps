import * as React from "react";
import CustomerFilters from "../components/CustomerFilters";
import CustomerTable from "../components/CustomerTable";
import StepArrows from "../components/StepArrows";
import { MOCK_ROWS, formatYmd, type Filters, type Row, type StepKey } from "../data/mock";
import { useStyles } from "../styles/useStyles";

type CustomerTargetPageProps = {
  step: StepKey;
  rows: Row[];
  selectedMap: Record<string, boolean>;
  prevMap: Record<string, boolean>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onSearch: () => void;
  onToggle: (id: string) => void;
  onTogglePrev: (id: string) => void;
  onStepClick: (next: StepKey) => void;
  onSave: () => void;
  onCopyPrev: () => void;
  onCopyPrevTarget: () => void;
  activeRowId: string | null;
  onRowClick: (id: string) => void;
};

export default function CustomerTargetPage({
  step,
  rows,
  selectedMap,
  prevMap,
  filters,
  setFilters,
  onSearch,
  onToggle,
  onTogglePrev,
  onStepClick,
  onSave,
  onCopyPrev,
  onCopyPrevTarget,
  activeRowId,
  onRowClick,
}: CustomerTargetPageProps) {
  const styles = useStyles();
  const divisions = React.useMemo(() => ["", ...new Set(MOCK_ROWS.map((r) => r.division))], []);
  const branches = React.useMemo(() => ["", ...new Set(MOCK_ROWS.map((r) => r.branch))], []);
  const depts = React.useMemo(() => ["", ...new Set(MOCK_ROWS.map((r) => r.dept))], []);
  const persons = React.useMemo(() => ["", ...new Set(MOCK_ROWS.map((r) => r.owner))], []);
  const isTargetStep = step === "targetSelect" || step === "targetConfirm";
  const isCustomerOwner = step === "customerOwner";

  return (
    <section className={styles.frame}>
      <div className={styles.stepMeta}>
        <StepArrows step={step} onStepClick={onStepClick} />
        <div className={styles.meta}>
          <div className={styles.updated}>
            <div className={styles.updatedLabel}>最終更新日:</div>
            <div className={styles.updatedValue}>{formatYmd(new Date())}</div>
          </div>
          <button type="button" className={`${styles.saveBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onSave}>
            保存
          </button>
        </div>
      </div>

      <CustomerFilters
        filters={filters}
        setFilters={setFilters}
        onSearch={onSearch}
        divisions={divisions}
        branches={branches}
        depts={depts}
        persons={persons}
        isCustomerOwner={isCustomerOwner}
      />

      <CustomerTable
        rows={rows}
        selectedMap={selectedMap}
        prevMap={prevMap}
        onToggle={onToggle}
        onTogglePrev={onTogglePrev}
        onCopyPrev={onCopyPrev}
        onCopyPrevTarget={onCopyPrevTarget}
        isTargetStep={isTargetStep}
        activeRowId={activeRowId}
        onRowClick={onRowClick}
      />
    </section>
  );
}
