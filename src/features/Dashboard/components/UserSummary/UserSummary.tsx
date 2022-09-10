import React from "react";
import { Card } from "../../../../components/Card/Card";
import { UserSummaryBodyContainer } from "./UserSummaryBodyContainer";
import { UserSummaryHeader } from "./UserSummaryHeader";

const styles = {
  cardContainer: {
    padding: "24px",
    height: "auto",
    marginTop: -100,
  },
};

export const UserSummary = () => {
  const { cardContainer } = styles;
  return (
    <Card {...cardContainer}>
      <UserSummaryHeader />
      <UserSummaryBodyContainer />
    </Card>
  );
};
