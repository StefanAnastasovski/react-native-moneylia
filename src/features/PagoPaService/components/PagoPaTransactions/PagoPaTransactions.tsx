import React from "react";
import { FlatList } from "native-base";
import { PagoPaTransactionCard } from "./PagoPaTransactionCard";
import { pagoPaTransactionList } from "../../../../data/en";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = {
  fontSize: 22,
  fontWeight: 500,
  color: "purpleBlue.2", //theme
};

export const PagoPaTransactions = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }: { item: any }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("PaymentDetails", {
            id: item.id,
          });
        }}
      >
        <PagoPaTransactionCard
          description={item.description}
          expiryDate={item.expiryDate}
          amount={item.amount}
        />
      </Pressable>
    );
  };
  return (
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
  );
};
