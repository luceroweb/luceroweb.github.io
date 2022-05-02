import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default function Home() {
  const window = useWindowDimensions();
  const breakpoint500 = 500;

  const profileContentWidth = window.width > breakpoint500 ? {} : {};

  return (
    <View style={style.profileLayout}>
      <View>
        <Image
          style={style.profileImage}
          source={require("./images/juan.jpg")}
          resizeMode="contain"
        />
      </View>

      <View style={({ overflowWrap: "break-word" }, profileContentWidth)}>
        <Text style={style.h1}>Profile</Text>

        <Text style={style.p}>
          I have extensive experience in web site structure and layout. I have
          developed web sites, print advertisements, financial reports, and data
          management solutions for higher education, non-profit,
          high-tech,manufacturing and small business.
        </Text>
        <Text style={style.p}>
          <Text style={style.bold}>Effective Team Player</Text> – I am known for
          my enthusiasm for complex projects, ability to turn constructive
          criticism into elegant solutions, intuitive ability to sense and
          facilitate client's needs, and finds joy in working with both clients
          and coworkers. A former manager noted: "Juan is indispensable. I rely
          on his ability to see problems from multiple points of view, and
          convert that into client solutions." – Candace Egan, Former Web
          Manager, Fresno State.
        </Text>
        <Text style={style.p}>
          <Text style={style.bold}>UI Philosophies</Text> – I believe that
          simple, semantic structure can be easily optimized to work well in all
          browsers, on all devices, and will allow for excellent SEO. Through
          mutual respect and camaraderie with my coworkers, we can analyze and
          define clear job requirements. This results in well formed and well
          organized finished products.
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  profileLayout: {
    padding: 10,
  },
  h1: {
    fontSize: 20,
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
});
