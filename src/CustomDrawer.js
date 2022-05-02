import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, Icon } from "react-native";

export default function CustomDrawer(props) {
  const { top } = useSafeAreaInsets();

  return(
    <View style={{flex: 1, paddingTop: top}}>
      <View style={{margin: 0, padding: 0}}>
        <Text h2 style={{paddingLeft: 20, fontSize: 18, fontWeight: 'bold'}}>Juan Lucero</Text>
        <Text h3 style={{paddingLeft: 20}}>Web By Juan AKA Webby Juan</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </View>
  )
}