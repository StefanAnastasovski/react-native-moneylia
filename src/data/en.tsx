import React from "react";
import { PaidIcon } from "../assets/icons/PaidIcon";
import { DueIcon } from "../assets/icons/DueIcon";
import { AdvancePaymentIcon } from "../assets/icons/AdvancePaymentIcon";
import { ModularityIcon } from "../assets/icons/ModularityIcon";

// app data
export const welcome = "Hello, ";
export const welcomeMessage = "Welcome in Moneylia";
export const dashboardCardTitle = "User summary";
export const userSummaryTitles = {
  status: "Status",
  birthday: "Birthday",
  city: "City",
  country: "Country",
  number: "Number",
};
export const contributionsHeader = "Contributions of ";
export const dashboardContributionsCards = [
  {
    id: "card1",
    title: "Paid",
    icon: <PaidIcon />,
  },
  {
    id: "card2",
    title: "Due",
    icon: <DueIcon />,
  },
  {
    id: "card3",
    title: "Advance payment",
    icon: <AdvancePaymentIcon />,
  },
  {
    id: "card4",
    title: "Modularity",
    icon: <ModularityIcon />,
  },
];
export const currencySign = {
  euro: {
    value: "€",
  },
  dollar: {
    value: "$",
  },
};
export const valueUnavailable = "Unavailable";
export const pagoPaServiceTaxPayment = "Tax Payments";
export const pagoPaServiceTitle = "Movements to pay";
export const pagoPaServiceSubtitle =
  "View pending transactions for the past two years and proceed to payment.";
export const pagoPaTransactionList = [
  {
    id: "pagopa1",
    description:
      "SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2021 EXPIRY 28-02-2022.",
    expiryDate: "02/28/2022",
    amount: "1,234.99",
  },
  {
    id: "pagopa2",
    description: "PAYMENT ON DEPOSIT",
    expiryDate: "31/01/2022",
    amount: "234.99",
  },
  {
    id: "pagopa3",
    description: "PAYMENT ON DEPOSIT",
    expiryDate: "31/05/2021",
    amount: "634.99",
  },
  {
    id: "pagopa4",
    description:
      "SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2020 EXPIRES ...",
    expiryDate: "02/28/2021",
    amount: "1,434.94",
  },
  {
    id: "pagopa5",
    description: "PAYMENT ON DEPOSIT",
    expiryDate: "31/01/2021",
    amount: "1,104.39",
  },
];
export const paymentDetailsTitle = "Payment details";
export const paymentNotice = "Payment notice";
export const paymentDetails = {
  creditorTitle: "creditor",
  creditor: "ENPACL\nVia del Caravaggio n. 78\n00147 (RM)",
  expiryDateTitle: "Expiry date",
  creditorTaxCodeTitle: "creditorTaxCode",
  creditorTaxCode: "8011911704444",
  noticeCodeTitle: "Notice code",
  noticeCode: "301000000014982222",
  totalDue: "Total due",
  ctaPayNow: "Pay now",
};

// dynamic data
export const welcomeName = "John S.";
export const userInfo = {
  userFirstName: "John",
  userLastName: "Smith",
  userStatus: "Subscribed",
  userBirthday: "26/01/1994",
  userCity: "Barcelona",
  userCountry: "ES",
  userNumber: 100,
};
export const dashboardContributionsCardValues = {
  card1: {
    id: 1,
    value: "Unavailable",
  },
  card2: {
    id: 2,
    value: "Unavailable",
  },
  card3: {
    id: 3,
    value: "1,230.00",
  },
  card4: {
    id: 4,
    value: "340.59",
  },
};
