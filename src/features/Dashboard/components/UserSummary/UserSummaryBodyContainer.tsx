import React from "react";
import { HStack, Text, useTheme, View, VStack } from "native-base";
import { userInfo, userSummaryTitles } from "../../../../data/en";

const styles = {
  bodyContainer: {
    paddingTop: 4,
  },
  titleFontSize: {
    fontSize: 12,
  },
  textFontSize: {
    fontSize: 16,
  },
  textLineHeight: {
    lineHeight: 19,
  },
  w50: {
    width: "50%",
  },
  flexRow: {
    flexDirection: "row",
  },
  bottomRowMarginTop: {
    marginTop: 4,
  },
};

export const UserSummaryBodyContainer = () => {
  const theme = useTheme();
  const extendStyles = {
    ...styles,
    title1: {
      color: theme.colors.neutral[1], //theme
      letterSpacing: -0.5,
    },
    title2: {
      color: theme.colors.neutral[2], //theme
    },
    text1: {
      color: theme.colors.purpleBlue[3], //theme
    },
    text2: {
      color: theme.colors.purpleBlue[2], //theme
    },
  };

  // style
  const {
    bodyContainer,
    titleFontSize,
    textFontSize,
    textLineHeight,
    title1,
    title2,
    text1,
    text2,
    w50,
    flexRow,
    bottomRowMarginTop,
  } = extendStyles;
  const titleTopRow = [titleFontSize, title1];
  const titleBottomRow = [titleFontSize, title2];
  const textTopRow = [textFontSize, textLineHeight, text1];
  const textBottomRow = [textFontSize, textLineHeight, text2];

  //   titles + user data
  const { status, birthday, city, country, number } = userSummaryTitles;
  const { userStatus, userBirthday, userCity, userCountry, userNumber } =
    userInfo;

  return (
    <VStack {...bodyContainer}>
      <HStack>
        <View {...w50}>
          <Text style={titleTopRow}>{status}</Text>
          <Text style={textTopRow} {...text1}>
            {userStatus}
          </Text>
        </View>

        <View {...w50}>
          <Text style={titleTopRow}>{birthday}</Text>
          <Text style={textTopRow}>{userBirthday}</Text>
        </View>
      </HStack>

      <HStack {...bottomRowMarginTop}>
        <View {...w50}>
          <Text style={titleBottomRow}>{city}</Text>
          <Text style={textBottomRow}>{userCity}</Text>
        </View>
        <View style={[w50, flexRow]}>
          <View {...w50}>
            <Text style={titleBottomRow}>{country}</Text>
            <Text style={textBottomRow}>{userCountry}</Text>
          </View>
          <View {...w50}>
            <Text style={titleBottomRow}>{number}</Text>
            <Text style={textBottomRow}>{userNumber}</Text>
          </View>
        </View>
      </HStack>
    </VStack>
  );
};
