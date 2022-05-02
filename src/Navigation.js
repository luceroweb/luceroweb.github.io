import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Home from "./Home";
import Education from "./Education";
import Proficiencies from "./Proficiencies";
import CareerDevelopment from "./CareerDevelopment";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Education" component={Education} />
      <Drawer.Screen name="Proficiencies" component={Proficiencies} />
      <Drawer.Screen name="CareerDevelopment" component={CareerDevelopment} />
    </Drawer.Navigator>
  );
}
