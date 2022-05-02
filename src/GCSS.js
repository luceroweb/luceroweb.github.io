import { StyleSheet, useWindowDimensions } from "react-native";

export default function GCSS() {
  const window = useWindowDimensions();
  const breakpoint500 = 500;

  const profileContentWidth = window.width > breakpoint500 ? {} : {};

  const global = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
    },
    header: {
      flexGrow: 0,
      height: 50,
      backgroundColor: "red",
    },
    main: {
      flex: 1,
      flexGrow: 1,
    },
    footer: {
      flexGrow: 0,
      height: 50,
    },
    h1: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    h2: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 20,
    },
    p: {
      marginBottom: 20,
    },
    bold: {
      fontWeight: "bold",
    },
    profileImage: {
      width: "100%",
      maxWidth: 500,
      aspectRatio: 500 / 760,
    },
    profileContentWidth: profileContentWidth,
    item: {
      flex: 1,
      flexDirection: "row",
      paddingLeft: 10,
      paddingBottom: 8,
    },
    itemBullet: {
      marginRight: 5,
    },
    itemContent: {},
  });

  return global;
}
