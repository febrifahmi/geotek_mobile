import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HomeScreen } from './routes/HomeScreen'
import { ClassificationScreen } from './routes/ClassificationScreen'
import { GuideScreen } from './routes/GuideScreen'
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

const { CalcR1, CalcR2, CalcR3, CalcDiscontinuityClass } = require('geotekppu-js/geotekppu-js/rmr/rmr__bieniawski1989');



function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home';
                        } else if (route.name === 'Classification') {
                            iconName = focused ? 'fact-check' : 'fact-check';
                        } else if (route.name === 'Guidelines') {
                            iconName = focused ? 'help-center' : 'help-center';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Classification" component={ClassificationScreen} />
                <Tab.Screen name="Guidelines" component={GuideScreen} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}


export default App;