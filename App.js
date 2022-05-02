import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.layout}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    maxWidth: "100%",
  },
});
