import * as React from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import SubTabs from "./components/SubTabs";
import TopTabs from "./components/TopTabs";
import {
  MOCK_ROWS,
  downloadCsv,
  formatYmd,
  toCsv,
  type CustomerSubTab,
  type Filters,
  type StepKey,
  type TopTab,
} from "./data/mock";
import ActivityRecordPage from "./pages/ActivityRecordPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import CustomerTargetPage from "./pages/CustomerTargetPage";
import HearingSharePage from "./pages/HearingSharePage";
import PerformanceReportPage from "./pages/PerformanceReportPage";
import SettingsPage from "./pages/SettingsPage";
import { useStyles } from "./styles/useStyles";

function stepToTabs(step: StepKey) {
  if (step === "customerList") return { top: "顧客" as TopTab, customer: "一覧" as CustomerSubTab };
  if (step === "customerOwner") return { top: "顧客" as TopTab, customer: "担当者設定" as CustomerSubTab };
  return { top: "ターゲット" as TopTab };
}

type AppRoute = { kind: "list" } | { kind: "detail"; customerId: string };

function parseRoute(pathname: string): AppRoute {
  if (pathname === "/customers/list") return { kind: "list" };
  const matched = pathname.match(/^\/customers\/([^/]+)$/);
  if (matched) {
    return { kind: "detail", customerId: decodeURIComponent(matched[1]) };
  }
  return { kind: "list" };
}

export default function App() {
  const styles = useStyles();
  const topTabsRef = React.useRef<HTMLDivElement | null>(null);
  const customerTopTabRef = React.useRef<HTMLButtonElement | null>(null);
  const targetTopTabRef = React.useRef<HTMLButtonElement | null>(null);
  const subTabsRowRef = React.useRef<HTMLDivElement | null>(null);
  const [activeRowId, setActiveRowId] = React.useState<string | null>(null);
  const [topTab, setTopTab] = React.useState<TopTab>("顧客");
  const [step, setStep] = React.useState<StepKey>("customerList");
  const [route, setRoute] = React.useState<AppRoute>(() => parseRoute(window.location.pathname));
  const [customerTabLayout, setCustomerTabLayout] = React.useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [filters, setFilters] = React.useState<Filters>({
    division: "",
    branch: "",
    dept: "",
    person: "",
    partner: "",
  });
  const [appliedFilters, setAppliedFilters] = React.useState<Filters>({
    division: "",
    branch: "",
    dept: "",
    person: "",
    partner: "",
  });
  const [selectedMap, setSelectedMap] = React.useState<Record<string, boolean>>(() => Object.fromEntries(MOCK_ROWS.map((r) => [r.id, r.prevChecked])));
  const [prevMap, setPrevMap] = React.useState<Record<string, boolean>>(() => Object.fromEntries(MOCK_ROWS.map((r) => [r.id, r.prevChecked])));

  const filteredRows = React.useMemo(() => {
    const key = appliedFilters.partner.trim().toLowerCase();
    return MOCK_ROWS.filter((r) => {
      const a = !appliedFilters.division || r.division === appliedFilters.division;
      const b = !appliedFilters.branch || r.branch === appliedFilters.branch;
      const c = !appliedFilters.dept || r.dept === appliedFilters.dept;
      const d = !appliedFilters.person || r.owner === appliedFilters.person;
      const e = !key || r.partnerName.toLowerCase().includes(key) || r.corpName.toLowerCase().includes(key);
      return a && b && c && d && e;
    });
  }, [appliedFilters]);

  const onSearch = () => setAppliedFilters(filters);
  const onToggle = (id: string) => setSelectedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  const onTogglePrev = (id: string) => setPrevMap((prev) => ({ ...prev, [id]: !prev[id] }));
  const onSave = () => alert("保存しました(仮)");
  const onCopyPrev = () => alert("前期ボタン押下(仮)");
  const onCopyPrevTarget = () => alert("前期コピーを実行しました(仮)");
  const onExcel = () => downloadCsv(`customer_target_${formatYmd(new Date()).replace(/\//g, "")}.csv`, toCsv(filteredRows, prevMap));
  const navigate = React.useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
    setRoute(parseRoute(path));
  }, []);

  const onStepClick = (next: StepKey) => {
    setStep(next);
    const m = stepToTabs(next);
    setTopTab(m.top);
  };

  const onTopTabClick = (tab: TopTab) => {
    setTopTab(tab);
    if (tab !== "顧客" && route.kind === "detail") {
      navigate("/");
    }
    if (tab === "顧客") {
      if (step !== "customerList" && step !== "customerOwner") {
        setStep("customerList");
      }
      return;
    }
    if (tab === "ターゲット" && step !== "targetSelect" && step !== "targetConfirm") {
      setStep("targetSelect");
      return;
    }
  };

  const onOpenCustomerDetail = React.useCallback(
    (id: string) => {
      setActiveRowId(id);
      setTopTab("顧客");
      setStep("customerList");
      navigate(`/customers/${encodeURIComponent(id)}`);
    },
    [navigate],
  );

  const onBackToCustomerList = React.useCallback(() => {
    setTopTab("顧客");
    setStep("customerList");
    navigate("/customers/list");
  }, [navigate]);

  React.useEffect(() => {
    const onPopState = () => {
      setRoute(parseRoute(window.location.pathname));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  React.useLayoutEffect(() => {
    const measureTargetWidth = () => {
      if (!targetTopTabRef.current || !subTabsRowRef.current) return;
      subTabsRowRef.current.style.setProperty("--target-top-tab-width", `${targetTopTabRef.current.offsetWidth}px`);
    };

    measureTargetWidth();
    window.addEventListener("resize", measureTargetWidth);
    return () => window.removeEventListener("resize", measureTargetWidth);
  }, [topTab]);

  React.useLayoutEffect(() => {
    const measure = () => {
      if (!topTabsRef.current || !customerTopTabRef.current) return;
      const topTabsRect = topTabsRef.current.getBoundingClientRect();
      const customerRect = customerTopTabRef.current.getBoundingClientRect();
      setCustomerTabLayout({
        left: customerRect.left - topTabsRect.left,
        width: customerRect.width,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [topTab]);

  const pairGap = 4;
  const pairButtonWidth = customerTabLayout.width > 0 ? (customerTabLayout.width - pairGap) / 2 : 0;
  const showCustomerDetail = route.kind === "detail" && topTab === "顧客";

  return (
    <FluentProvider theme={webLightTheme}>
      <main className={styles.root}>
        <div className={styles.shell}>
          <header className={styles.topArea}>
            <div className={styles.navBlock}>
              <TopTabs
                topTab={topTab}
                onTopTabClick={onTopTabClick}
                topTabsRef={topTabsRef}
                customerTopTabRef={customerTopTabRef}
                targetTopTabRef={targetTopTabRef}
              />
              <SubTabs
                topTab={topTab}
                step={step}
                onStepClick={onStepClick}
                customerTabLayout={customerTabLayout}
                pairButtonWidth={pairButtonWidth}
                subTabsRowRef={subTabsRowRef}
              />
            </div>
            <button type="button" className={`${styles.excelBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onExcel}>
              EXCEL出力
            </button>
          </header>

          {showCustomerDetail ? (
            <CustomerDetailPage customerId={route.customerId} onBack={onBackToCustomerList} />
          ) : topTab === "顧客" || topTab === "ターゲット" ? (
            <CustomerTargetPage
              step={step}
              rows={filteredRows}
              selectedMap={selectedMap}
              prevMap={prevMap}
              filters={filters}
              setFilters={setFilters}
              onSearch={onSearch}
              onToggle={onToggle}
              onTogglePrev={onTogglePrev}
              onStepClick={onStepClick}
              onSave={onSave}
              onCopyPrev={onCopyPrev}
              onCopyPrevTarget={onCopyPrevTarget}
              activeRowId={activeRowId}
              onRowClick={onOpenCustomerDetail}
            />
          ) : topTab === "活動記録" ? (
            <ActivityRecordPage />
          ) : topTab === "実績帳票" ? (
            <PerformanceReportPage />
          ) : topTab === "聞き取りシェア" ? (
            <HearingSharePage />
          ) : topTab === "設定" ? (
            <SettingsPage />
          ) : (
            <section className={styles.placeholder}>{topTab} タブは次フェーズで実装します</section>
          )}
        </div>
      </main>
    </FluentProvider>
  );
}
