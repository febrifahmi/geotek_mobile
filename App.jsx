import React, {useState} from 'react';
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
import { HomeStackScreen } from './routes/HomeScreen'
import { AnalysisScreen } from './routes/AnalysisScreen'
import { GuideScreen } from './routes/GuideScreen'
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [status, setStatus] = useState("loaded")

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
                        } else if (route.name === 'Analysis') {
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
                <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}} />
                <Tab.Screen name="Analysis" component={AnalysisScreen} />
                <Tab.Screen name="Guidelines" component={GuideScreen} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default App;