import { createDrawerNavigator } from '@react-navigation/drawer';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';



const Drawer = createDrawerNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';
import { ScreenC } from '../screens/screenC';

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#235E5E',
        width: 240,
      },
      headerStyle: {
        backgroundColor: '#184040',
      },
      headerTransparent: true,
      headerTintColor: 'white',
      drawerInactiveTintColor: 'black',
      drawerActiveTintColor: 'white'
    }}>
      <Drawer.Screen name="Home" component={ScreenA}
      options={{
        drawerIcon: config => <IconEntypo
            size={23}
            name="home">
            </IconEntypo>,
            headerTitle: 'iPlant'
    }}
      />
      <Drawer.Screen name="Login" component={ScreenB} 
      options={{
        drawerIcon: config => <IconEntypo
            size={23}
            name="login"> 
            </IconEntypo>,
            headerTitle: 'Login'
    }}
      
      />
      <Drawer.Screen name="Profile" component={ScreenC}
      options={{
        drawerIcon: config => <IconIon
            size={23}
            name="person">
            </IconIon>,
            headerTitle: 'Profile'
    }}
      />
    </Drawer.Navigator>

    
  );
}