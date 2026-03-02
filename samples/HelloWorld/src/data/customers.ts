export type CustomerListItem = {
  id: string;
  corporationName: string;
  corporationNumber: string;
  partnerCode: string;
  partnerName: string;
  salesOffice: string;
};

export const CUSTOMERS: CustomerListItem[] = [
  {
    id: "1",
    corporationName: "〇〇工務店グループ",
    corporationNumber: "262548",
    partnerCode: "17569820",
    partnerName: "株式会社〇〇 東京支店",
    salesOffice: "東京営業所",
  },
  {
    id: "2",
    corporationName: "△△建設ホールディングス",
    corporationNumber: "381102",
    partnerCode: "17570011",
    partnerName: "△△建設株式会社 本社",
    salesOffice: "首都圏営業所",
  },
  {
    id: "3",
    corporationName: "サンプル商事株式会社",
    corporationNumber: "540991",
    partnerCode: "17570135",
    partnerName: "サンプル商事株式会社 西日本支店",
    salesOffice: "西日本営業所",
  },
];

export const CUSTOMER_BY_ID = Object.fromEntries(CUSTOMERS.map((customer) => [customer.id, customer] as const));
