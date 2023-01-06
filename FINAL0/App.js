import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import SearchSongScreen from './screens/SearchSongScreen';
import {Button, Image, PermissionsAndroid, StyleSheet} from 'react-native';
import AppProvider from './context/AppProvider';
import {Component} from 'react';
import SearchSongLovedBody from './components/SearchLovedSongs';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppProvider>
          <Tab.Navigator initialRouteName={'SearchSongScreen'}>
            <Tab.Screen
              name="Search"
              component={SearchSongScreen}
              options={{
                tabBarIcon: ({size, focused, color}) => {
                  return (
                    <Image
                      style={styles.tinyLogo}
                      source={require('./android/app/src/main/res/drawable/search.png')}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Loved Songs"
              component={SearchSongLovedBody}
              options={{
                tabBarIcon: ({size, focused, color}) => {
                  return (
                    <Image
                      style={styles.tinyLogo}
                      source={require('./android/app/src/main/res/drawable/heart.png')}
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </AppProvider>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 24,
    height: 24,
  },
  tinyLogoMusic: {
    width: 40,
    height: 40,
  },
  tinyLogoMap: {
    width: 34,
    height: 34,
  },
});
export default App;
