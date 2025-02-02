import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import ReelScreen from '../screens/reel';
import ShopScreen from '../screens/shop';
import ProfileScreen from '../screens/profile';
import {SCREENS} from '../utils/router';

const TabNavigation = createBottomTabNavigator();

//obje dağıtma
const {HOMESCREEN, PROFILESCREEN, SEARCHSCREEN, REELSCREEN, SHOPSCREEN} =
  SCREENS;

const BottomTabsNavigation = () => {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name={HOMESCREEN} component={HomeScreen} />
      <TabNavigation.Screen name={SEARCHSCREEN} component={SearchScreen} />
      <TabNavigation.Screen name={REELSCREEN} component={ReelScreen} />
      <TabNavigation.Screen name={SHOPSCREEN} component={ShopScreen} />
      <TabNavigation.Screen name={PROFILESCREEN} component={ProfileScreen} />
    </TabNavigation.Navigator>
  );
};

export default BottomTabsNavigation;
