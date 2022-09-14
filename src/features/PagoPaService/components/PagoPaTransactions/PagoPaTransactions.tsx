import React from "react";
import { FlatList } from "native-base";
import { PagoPaTransactionCard } from "./PagoPaTransactionCard";
import { pagoPaTransactionList } from "../../../../data/en";

const styles = {
  fontSize: 22,
  fontWeight: 500,
  color: "purpleBlue.2", //theme
};

export const PagoPaTransactions = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <PagoPaTransactionCard
        description={item.description}
        expiryDate={item.expiryDate}
        amount={item.amount}
      />
    );
  };
  return (
    <>
      {/* {pagoPaTransactionList.map((item) => {
        console.log(item);
        return (
          <PagoPaTransactionCard
            key={item.id}
            description={item.description}
            expiryDate={item.expiryDate}
            amount={item.amount}
          />
        );
      })} */}
      <FlatList
        data={pagoPaTransactionList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        bounces={false}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...styles}
        maxH="425"
      />
    </>
  );
};
