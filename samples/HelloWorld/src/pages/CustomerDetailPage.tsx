import * as React from "react";
import BasicInfoTab, { type BasicInfoFormState } from "../components/BasicInfoTab";
import ActivityHistoryTab from "../components/ActivityHistoryTab";
import KeymanInfoTab from "../components/KeymanInfoTab";
import OfferLogTab from "../components/OfferLogTab";
import OrderProductHistoryTab from "../components/OrderProductHistoryTab";
import ProjectHistoryTab from "../components/ProjectHistoryTab";
import ProductCountTab from "../components/ProductCountTab";
import ShareTab from "../components/ShareTab";
import StreamInfoTab from "../components/StreamInfoTab";
import TradeHistoryTab from "../components/TradeHistoryTab";
import { CUSTOMER_DETAILS_BY_ID, CUSTOMER_DETAIL_TABS } from "../data/customerDetails";
import { CUSTOMER_BY_ID } from "../data/customers";
import { useStyles } from "../styles/useStyles";

type CustomerDetailPageProps = {
  customerId: string;
  onBack: () => void;
};

function toFormState(customerId: string): BasicInfoFormState {
  const detail = CUSTOMER_DETAILS_BY_ID[customerId];
  return {
    founded: detail?.founded ?? "",
    annualSales: detail?.annualSales ?? "",
    baseDate: detail?.baseDate ?? "",
    capital: detail?.capital ?? "",
    mainBank: detail?.mainBank ?? "",
    address: detail?.address ?? "",
    postalCode: detail?.postalCode ?? "",
    phone: detail?.phone ?? "",
    fax: detail?.fax ?? "",
    industry: detail?.industry ?? "",
    categoryLarge: detail?.categoryLarge ?? "",
    categoryMiddle: detail?.categoryMiddle ?? "",
    categorySmall: detail?.categorySmall ?? "",
    customerRank: detail?.customerRank ?? "",
    developmentRank: detail?.developmentRank ?? "",
    customerClass: detail?.customerClass ?? "",
    coverClass: detail?.coverClass ?? "",
    expectedOrderAmount: detail?.expectedOrderAmount ?? "",
    creditRank: detail?.creditRank ?? "",
    creditLimit: detail?.creditLimit ?? "",
    creditBalance: detail?.creditBalance ?? "",
    paymentClosingDay: detail?.paymentClosingDay ?? "",
    paymentDay: detail?.paymentDay ?? "",
    paymentType: detail?.paymentType ?? "",
    paymentMethod: detail?.paymentMethod ?? "",
    transferBank: detail?.transferBank ?? "",
    memo: detail?.memo ?? "",
  };
}

export default function CustomerDetailPage({ customerId, onBack }: CustomerDetailPageProps) {
  const styles = useStyles();
  const detailTabs = [
    { key: "basic", label: CUSTOMER_DETAIL_TABS[0] ?? "基本情報" },
    { key: "keyman", label: CUSTOMER_DETAIL_TABS[1] ?? "キーマン情報" },
    { key: "productCount", label: CUSTOMER_DETAIL_TABS[2] ?? "取引商品数" },
    { key: "offerLog", label: CUSTOMER_DETAIL_TABS[3] ?? "提示金額記録" },
    { key: "tradeHistory", label: CUSTOMER_DETAIL_TABS[4] ?? "取引履歴" },
    { key: "orderHistory", label: CUSTOMER_DETAIL_TABS[5] ?? "受注商品履歴" },
    { key: "share", label: CUSTOMER_DETAIL_TABS[6] ?? "想定シェア" },
    { key: "stream", label: CUSTOMER_DETAIL_TABS[7] ?? "商流情報" },
    { key: "projectHistory", label: CUSTOMER_DETAIL_TABS[8] ?? "物件履歴" },
    { key: "activityHistory", label: CUSTOMER_DETAIL_TABS[9] ?? "営業活動履歴" },
  ] as const;

  const [activeTab, setActiveTab] = React.useState<(typeof detailTabs)[number]["key"]>("basic");
  const customer = CUSTOMER_BY_ID[customerId];
  const detail = CUSTOMER_DETAILS_BY_ID[customerId];
  const [formState, setFormState] = React.useState<BasicInfoFormState>(() => toFormState(customerId));
  const activeTabLabel = detailTabs.find((tab) => tab.key === activeTab)?.label ?? detailTabs[0].label;

  React.useEffect(() => {
    setActiveTab("basic");
    setFormState(toFormState(customerId));
  }, [customerId]);

  const onChange = (key: keyof BasicInfoFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const onSave = () => {
    console.log("customer-detail-save", customerId, formState);
  };

  if (!customer || !detail) {
    return (
      <section className={styles.customerDetailWrap}>
        <div className={styles.customerDetailHeaderBar}>
          <button type="button" className={`${styles.detailBackBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onBack}>
            一覧へ戻る
          </button>
        </div>
        <div className={styles.customerDetailNotFound}>対象の顧客データが見つかりません。</div>
      </section>
    );
  }

  return (
    <section className={styles.customerDetailWrap}>
      <div className={styles.customerDetailHeaderBar}>
        <div className={styles.detailInfoGroup}>
          <div className={styles.detailInfoRow}>
            <div className={styles.detailInfoLabel}>法人名</div>
            <div className={styles.detailInfoValue}>{customer.corporationName}</div>
          </div>
          <div className={styles.detailInfoRow}>
            <div className={styles.detailInfoLabel}>法人番号</div>
            <div className={styles.detailInfoValue}>{customer.corporationNumber}</div>
          </div>
        </div>
        <div className={styles.detailTopActions}>
          <button type="button" className={`${styles.reportSearchBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`}>
            出力
          </button>
          <button type="button" className={`${styles.detailBackBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onBack}>
            一覧へ戻る
          </button>
        </div>
      </div>

      <div className={styles.customerDetailTitleRow}>
        <div className={styles.customerDetailNameBlock}>
          <div className={styles.customerDetailNameLabel}>取引先名</div>
          <div className={styles.customerDetailNameValue}>{customer.partnerName}</div>
        </div>
        <div className={styles.customerDetailMetaBlock}>
          <div className={`${styles.detailInfoRow} ${styles.detailInfoRowWide}`}>
            <div className={styles.detailInfoLabel}>取引先コード</div>
            <div className={styles.detailInfoValue}>{customer.partnerCode}</div>
          </div>
          <div className={`${styles.detailInfoRow} ${styles.detailInfoRowWide}`}>
            <div className={styles.detailInfoLabel}>担当営業所</div>
            <div className={styles.detailInfoValue}>{customer.salesOffice}</div>
          </div>
        </div>
      </div>

      <div className={styles.customerDetailTabs}>
        {detailTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            data-active={activeTab === tab.key ? "true" : "false"}
            className={`${styles.customerDetailTab} ${styles.clickable} ${styles.pressable} ${styles.focusable} ${activeTab === tab.key ? styles.customerDetailTabActive : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.customerDetailBody}>
        {activeTab === "basic" ? (
          <>
            <BasicInfoTab formState={formState} onChange={onChange} />
            <div className={styles.detailFooterActions}>
              <button type="button" className={`${styles.saveBtn} ${styles.clickable} ${styles.hoverable} ${styles.pressable} ${styles.focusable}`} onClick={onSave}>
                保存
              </button>
            </div>
          </>
        ) : activeTab === "keyman" ? (
          <KeymanInfoTab customerId={customerId} />
        ) : activeTab === "productCount" ? (
          <ProductCountTab customerId={customerId} />
        ) : activeTab === "offerLog" ? (
          <OfferLogTab customerId={customerId} />
        ) : activeTab === "tradeHistory" ? (
          <TradeHistoryTab customerId={customerId} />
        ) : activeTab === "orderHistory" ? (
          <OrderProductHistoryTab customerId={customerId} />
        ) : activeTab === "share" ? (
          <ShareTab customerId={customerId} />
        ) : activeTab === "stream" ? (
          <StreamInfoTab customerName={customer.partnerName} />
        ) : activeTab === "projectHistory" ? (
          <ProjectHistoryTab customerId={customerId} />
        ) : activeTab === "activityHistory" ? (
          <ActivityHistoryTab customerId={customerId} />
        ) : (
          <div className={styles.customerDetailPlaceholder}>{activeTabLabel} はデモのためプレースホルダーです。</div>
        )}
      </div>
    </section>
  );
}
