import React from "react";
import { Card } from "../../../../components/Card/Card";
import { UserSummaryHeader } from "./UserSummaryHeader";

const styles = {
  cardContainer: {
    padding: 26,
    height: 178,
    marginTop: -100,
  },
};

export const UserSummary = () => {
  const { cardContainer } = styles;
  return (
    <Card {...cardContainer}>
      <UserSummaryHeader />
    </Card>
  );
};
