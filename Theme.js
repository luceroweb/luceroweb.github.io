import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GCSS from './src/GCSS';
import Home from './src/Home';
import Education from './src/Education';
import Proficiencies from './src/Proficiencies';
import CareerDevelopment from './src/CareerDevelopment';

export default function Theme() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.header}>
          <Text style={[style.h1, style.whiteText]}>Juan Lucero</Text>
          <Text style={style.whiteText}>Web By Juan AKA Webby Juan</Text>
          <Navigation />
        </View>
        <ScrollView style={style.main}>
          {/* <Home /> */}
          <Education />
          {/* <Proficiencies /> */}
          {/* <CareerDevelopment /> */}
        </ScrollView>
        <View style={style.footer}>
          <Text style={style.whiteText}>Fresno, CA 93705</Text>
          <Text style={style.whiteText}>(559) 273-5007</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const style = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    flexGrow: 0,
    marginBottom: "2%",
    backgroundColor: "#355e3b",
    padding: 10,
  },
  main: {
    flex: 1,
    flexGrow: 1,
    padding: 10,
    width: "100%",
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  footer: {
    flexGrow: 0,
    flexDirection: "row",
    alignContent: "space-between",
    width: "100%",
    marginTop: "2%",
    padding: 10,
    backgroundColor: "#355e3b",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  whiteText: {
    color: "white",
  }
});