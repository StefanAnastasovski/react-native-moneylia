import React from "react";
import { View, Text, useTheme } from "native-base";
import { pagoPaServiceSubtitle, pagoPaServiceTitle } from "../../../../data/en";

const styles = {
  taxContainer: {
    py: 6,
  },

  title: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "600",
    paddingBottom: 8,
  },
  subtitle: {
    fontSize: 14,
  },
};

export const PagoPaTextSection = () => {
  const {
    colors: { purpleBlue, neutral },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    titleColor: {
      color: purpleBlue[2],
    },
    subtitleColor: {
      color: neutral[1],
    },
  };
  const { taxContainer, title, subtitle, titleColor, subtitleColor } =
    extendedStyles;

  return (
    <View {...taxContainer}>
      <Text style={[titleColor, title]}>{pagoPaServiceTitle}</Text>
      <Text style={[subtitleColor, subtitle]}>{pagoPaServiceSubtitle}</Text>
    </View>
  );
};
