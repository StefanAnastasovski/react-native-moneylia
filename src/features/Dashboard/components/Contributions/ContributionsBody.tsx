import React from "react";
import { FlatList } from "native-base";
import { ContributionsBodyCard } from "./ContributionsBodyCard";
import {
  dashboardContributionsCards,
  dashboardContributionsCardValues,
} from "../../../../data/en";
import { makeSpaceBetweenGridItems } from "../../utils/makeSpaceBetweenGridItems";

const styles = {
  fontSize: 22,
  fontWeight: 500,
  color: "purpleBlue.2", //theme
};
const numOfCols = 2;

export const ContributionsBody = () => {
  const renderItem = ({ item, index }: { item: any; index: any }) => {
    const value = dashboardContributionsCardValues[item.id]?.value;
    return (
      <ContributionsBodyCard
        title={item.title}
        icon={item.icon}
        value={value}
        style={makeSpaceBetweenGridItems(index, numOfCols, 2, 4)}
      />
    );
  };
  return (
    <FlatList
      data={dashboardContributionsCards}
      numColumns={numOfCols}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      bounces={false}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...styles}
    />
  );
};
