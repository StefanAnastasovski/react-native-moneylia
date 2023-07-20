import React from "react";
import { Image } from "native-base";
import { PagoPaFrame } from "../../../../assets/allImages";

const styles = {
  imageStyle: {
    width: "56px",
    alignSelf: "center",
  },
};

export const PagoPaTransactionImage = ({}) => {
  const { imageStyle } = styles;
  return (
    <Image
      source={PagoPaFrame}
      alt="PagoPa Frame - Tax Payments"
      {...imageStyle}
    />
  );
};
