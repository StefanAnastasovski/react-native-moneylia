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
