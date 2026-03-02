import * as React from "react";
import { useStyles } from "../styles/useStyles";

export type BasicInfoFormState = {
  founded: string;
  annualSales: string;
  baseDate: string;
  capital: string;
  mainBank: string;
  address: string;
  postalCode: string;
  phone: string;
  fax: string;
  industry: string;
  categoryLarge: string;
  categoryMiddle: string;
  categorySmall: string;
  customerRank: string;
  developmentRank: string;
  customerClass: string;
  coverClass: string;
  expectedOrderAmount: string;
  creditRank: string;
  creditLimit: string;
  creditBalance: string;
  paymentClosingDay: string;
  paymentDay: string;
  paymentType: string;
  paymentMethod: string;
  transferBank: string;
  memo: string;
};

type BasicInfoTabProps = {
  formState: BasicInfoFormState;
  onChange: (key: keyof BasicInfoFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function BasicInfoTab({ formState, onChange }: BasicInfoTabProps) {
  const styles = useStyles();

  return (
    <div className={styles.detailFormRows}>
      <div className={`${styles.detailRow} ${styles.detailRow1}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>創業</div><input className={styles.detailFieldInput} value={formState.founded} onChange={onChange("founded")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>年商</div><input className={styles.detailFieldInput} value={formState.annualSales} onChange={onChange("annualSales")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>基準日</div><input className={styles.detailFieldInput} value={formState.baseDate} onChange={onChange("baseDate")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>資本金</div><input className={styles.detailFieldInput} value={formState.capital} onChange={onChange("capital")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow2}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>取引銀行</div><input className={styles.detailFieldInput} value={formState.mainBank} onChange={onChange("mainBank")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow3}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>郵便番号</div><input className={styles.detailFieldInput} value={formState.postalCode} onChange={onChange("postalCode")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>住所</div><input className={styles.detailFieldInput} value={formState.address} onChange={onChange("address")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow4}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>代表電話番号</div><input className={styles.detailFieldInput} value={formState.phone} onChange={onChange("phone")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>FAX番号</div><input className={styles.detailFieldInput} value={formState.fax} onChange={onChange("fax")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>業種</div><input className={styles.detailFieldInput} value={formState.industry} onChange={onChange("industry")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow5}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>大区分</div><input className={styles.detailFieldInput} value={formState.categoryLarge} onChange={onChange("categoryLarge")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>中区分</div><input className={styles.detailFieldInput} value={formState.categoryMiddle} onChange={onChange("categoryMiddle")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>小区分</div><input className={styles.detailFieldInput} value={formState.categorySmall} onChange={onChange("categorySmall")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>顧客ランク</div><input className={styles.detailFieldInput} value={formState.customerRank} onChange={onChange("customerRank")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow6}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>開拓ランク</div><input className={styles.detailFieldInput} value={formState.developmentRank} onChange={onChange("developmentRank")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>顧客区分</div><input className={styles.detailFieldInput} value={formState.customerClass} onChange={onChange("customerClass")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>カバー区分</div><input className={styles.detailFieldInput} value={formState.coverClass} onChange={onChange("coverClass")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>想定受注高</div><input className={styles.detailFieldInput} value={formState.expectedOrderAmount} onChange={onChange("expectedOrderAmount")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow7}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>与信ランク</div><input className={styles.detailFieldInput} value={formState.creditRank} onChange={onChange("creditRank")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>与信限度額</div><input className={styles.detailFieldInput} value={formState.creditLimit} onChange={onChange("creditLimit")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>与信残高</div><input className={styles.detailFieldInput} value={formState.creditBalance} onChange={onChange("creditBalance")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow8}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>締日</div><input className={styles.detailFieldInput} value={formState.paymentClosingDay} onChange={onChange("paymentClosingDay")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>支払日</div><input className={styles.detailFieldInput} value={formState.paymentDay} onChange={onChange("paymentDay")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>現金・手形</div><input className={styles.detailFieldInput} value={formState.paymentType} onChange={onChange("paymentType")} /></div>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>現金</div><input className={styles.detailFieldInput} value={formState.paymentMethod} onChange={onChange("paymentMethod")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow9}`}>
        <div className={styles.detailField}><div className={styles.detailFieldLabel}>振込先銀行</div><input className={styles.detailFieldInput} value={formState.transferBank} onChange={onChange("transferBank")} /></div>
      </div>
      <div className={`${styles.detailRow} ${styles.detailRow10}`}>
        <div className={styles.detailFieldMemo}><div className={styles.detailFieldLabel}>情報メモ</div><textarea className={styles.detailTextarea} value={formState.memo} onChange={onChange("memo")} /></div>
      </div>
    </div>
  );
}
