import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Education() {
  const nav = useNavigation();

  return (
    <View style={style.layout}>
      <Text style={style.h1}>Education</Text>

      <Text style={style.bold}>California State University</Text>
      <Text style={style.p}>
        Fresno, CA, 1997-2002: Pursued Bachelor of Arts in Music Education.
      </Text>

      <Text style={style.bold}>Fresno City College</Text>
      <Text style={style.p}>
        Fresno, CA, 1994-1997: Completed undergraduate requirements in Music
        Education.
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  layout: {
    padding: 10,
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
});
