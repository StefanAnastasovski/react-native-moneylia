import { pagoPaTransactionList } from "../../../data/en";

export const getPaymentDetails = (id: number | string) =>
  pagoPaTransactionList.filter((item) => {
    return item.id === id;
  });
