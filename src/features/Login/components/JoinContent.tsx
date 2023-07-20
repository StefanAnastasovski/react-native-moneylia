import React from "react";

import { Center, View, Heading, Text } from "native-base";

const joinHeader = "Save your money";
const joinText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis erat a sit.";
const btnText = "Join for free";
const findOutMore = "Don't have SPID or CIE? Find out more";

const JoinContent = () => {
  const {
    heading: headingStyle,
    joinTextContainer,
    joinText: joinTextStyle,
  } = styles;
  return (
    <>
      <Center>
        <Heading {...headingStyle}>{joinHeader}</Heading>
      </Center>

      <View {...joinTextContainer}>
        <Text textAlign="center" {...joinTextStyle}>
          {joinText}
        </Text>
      </View>
    </>
  );
};

export default JoinContent;

const styles = {
  heading: {
    fontSize: 32,
    fontWeight: 600,
    color: "purpleBlue.2",
  },
  joinTextContainer: {
    marginTop: 2,
    paddingLeft: 55,
    paddingRight: 55,
  },
  joinText: {
    fontSize: 14,
    fontWeight: 400,
    color: "neutral.1",
    letterSpacing: -0.5,
    noOfLines: 2,
  },
};
