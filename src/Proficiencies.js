import { Text, View, StyleSheet } from "react-native";
import GCSS from "./GCSS";

export default function Proficiencies() {
  return (
    <View style={style.layout}>
      <Text style={GCSS.h1}>Proficiencies</Text>

      <View>
        <View>
          <Text style={GCSS.p}>Agile/scrum master</Text>
          <Text style={GCSS.p}>git/GitHub/Bitbucket</Text>
          <Text style={GCSS.p}>Mobile cross browser optimization</Text>
          <Text style={GCSS.p}>HTML5/CSS3/LESS/SASS</Text>
          <Text style={GCSS.p}>React/JS/Node/npm/yarn</Text>
          <Text style={GCSS.p}>Mobile/Web Responsive Layouts</Text>
        </View>

        <View>
          <Text style={GCSS.p}>Web Accessibility</Text>
          <Text style={GCSS.p}>PHP/MySQL/WordPress</Text>
          <Text style={GCSS.p}>VS Code/Visual Studio</Text>
          <Text style={GCSS.p}>Bootstrap Rapid Prototyping</Text>
          <Text style={GCSS.p}>Windows/Mac/iOS/Android</Text>
          <Text style={GCSS.p}>ASP/SQL (for .NET shops)</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  layout: {
    padding: 10,
  },
});
