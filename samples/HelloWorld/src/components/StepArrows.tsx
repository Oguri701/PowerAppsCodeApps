import { STEP_LABELS, STEPS, type StepKey } from "../data/mock";
import { useStyles } from "../styles/useStyles";

type StepArrowsProps = {
  step: StepKey;
  onStepClick: (next: StepKey) => void;
};

export default function StepArrows({ step, onStepClick }: StepArrowsProps) {
  const styles = useStyles();

  return (
    <div className={styles.steps}>
      {STEPS.map((s, idx) => (
        <button
          key={s}
          type="button"
          className={`${styles.step} ${styles.clickable} ${styles.pressable} ${styles.focusable} ${idx === 0 ? styles.stepFirst : ""} ${s === step ? styles.stepActive : styles.hoverable}`}
          style={{ marginLeft: idx === 0 ? 0 : "-16px" }}
          onClick={() => onStepClick(s)}
        >
          {STEP_LABELS[s].split("\n").map((line) => (
            <div key={`${s}-${line}`} className={styles.stepLine}>
              {line}
            </div>
          ))}
        </button>
      ))}
    </div>
  );
}
