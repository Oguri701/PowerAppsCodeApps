import type * as React from "react";
import { type Filters } from "../data/mock";
import { useStyles } from "../styles/useStyles";

type CustomerFiltersProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onSearch: () => void;
  divisions: string[];
  branches: string[];
  depts: string[];
  persons: string[];
  isCustomerOwner: boolean;
};

export default function CustomerFilters({ filters, setFilters, onSearch, divisions, branches, depts, persons, isCustomerOwner }: CustomerFiltersProps) {
  const styles = useStyles();

  return (
    <div className={styles.filters}>
      <div className={styles.field}>
        <label className={styles.label}>事業部名{isCustomerOwner ? "(前期)" : ""}</label>
        <select className={styles.select} value={filters.division} onChange={(e) => setFilters((p) => ({ ...p, division: e.target.value }))}>
          {divisions.map((v) => (
            <option key={v || "all"} value={v}>
              {v || "全て"}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>支店名{isCustomerOwner ? "(前期)" : ""}</label>
        <select className={styles.select} value={filters.branch} onChange={(e) => setFilters((p) => ({ ...p, branch: e.target.value }))}>
          {branches.map((v) => (
            <option key={v || "all"} value={v}>
              {v || "全て"}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>{isCustomerOwner ? "所属名(前期)" : "所属名"}</label>
        <select className={styles.select} value={filters.dept} onChange={(e) => setFilters((p) => ({ ...p, dept: e.target.value }))}>
          {depts.map((v) => (
            <option key={v || "all"} value={v}>
              {v || "全て"}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>氏名</label>
        <div className={styles.searchGroup}>
          <select className={styles.select} value={filters.person} onChange={(e) => setFilters((p) => ({ ...p, person: e.target.value }))}>
            {persons.map((v) => (
              <option key={v || "all"} value={v}>
                {v || "全て"}
              </option>
            ))}
          </select>
          <button type="button" className={`${styles.searchBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onSearch}>
            検索
          </button>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>取引先名</label>
        <div className={styles.searchGroup}>
          <input className={styles.input} value={filters.partner} onChange={(e) => setFilters((p) => ({ ...p, partner: e.target.value }))} />
          <button type="button" className={`${styles.searchBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onSearch}>
            検索
          </button>
        </div>
      </div>
    </div>
  );
}
