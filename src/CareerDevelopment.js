import { Text, View, FlatList, StyleSheet } from "react-native";
import GCSS from "./GCSS";

export default function CareerDevelopment() {
  const bulletItem = (item) => (
    <View style={GCSS.item}>
      <Text style={GCSS.itemBullet}>{"\u2022"}</Text>
      <Text style={GCSS.itemContent}>{item.key}</Text>
    </View>
  );

  return (
    <View style={style.layout}>
      <Text style={GCSS.h1}>Career Development</Text>

      <Text style={GCSS.h2}>
        CONTENT.ad – IRVINE, CA: 2015-2021 Software Engineer (Front End &amp;
        WordPress)
      </Text>
      <Text style={GCSS.p}>
        Content.ad is a fast paced digital ad provider. They build, manage and
        maintain a network of advertisers and publishers that serve massive
        amounts of digital ads every hour.
      </Text>

      <FlatList
        data={[
          { key: "Assisted with project management" },
          {
            key: "React site development for internal users and Advertiser/Publishers in the ad network",
          },
          {
            key: "Maintain &amp; extend our Ad Widget UI elements using HTML, CSS, &amp; vanilla JavaScript to layout &amp; animate our ad display containers",
          },
          {
            key: "Develop &amp; maintain our easy to use Content.ad WordPress Plugin",
          },
          {
            key: "Maintain several high traffic WordPress sites for our partners and clients including the Cotnent.ad Marketing site at www.content.ad.",
          },
        ]}
        renderItem={({ item }) => bulletItem(item)}
      />

      <Text style={GCSS.h2}>
        Experian Consumer Direct | Costa Mesa, CA: 2012 – 2015 | Front End Web
        Developer
      </Text>
      <Text style={GCSS.p}>
        I worked on white label builds of Experian's FreeCreditReport.com and
        FreeCreditScore.com sites for corporate clients. These custom builds are
        used to provide a vast array of credit report data and monitoring
        services to end users through their robust web services.
      </Text>

      <FlatList
        data={[
          {
            key: `Web Accessibility Expert for one of Experian's biggest clients, Wells Fargo`,
          },
          {
            key: "I utilized tools such as Visual Studio with git, and the Tridion CMS among others.",
          },
          {
            key: `Bootstrap Expert for an intensive 3 month build of USAA's angular Credit Check products.`,
          },
        ]}
        renderItem={({ item }) => bulletItem(item)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  layout: {
    padding: 10,
  },
});
