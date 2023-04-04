import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { Divider } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

import { RMR89Screen } from './RMR89Screen'
import { RMRbScreen } from './RMRbScreen'
import { RMR14Screen } from './RMR14Screen'
import { RMRhlwScreen } from './RMRhlwScreen'
import { RMRSenSadagahScreen } from './RMRSenSadagahScreen'


const HomeStack = createStackNavigator();


function TitleSection({ children, title, subtitle }) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#0042c7', '#0080f9', '#4cabff']} >
            <View style={styles.sectionContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoGeotek} source={require('../android/app/src/main/res/mipmap-hdpi/icon.png')} />
                </View>
                <View>
                    <Text
                        style={[
                            styles.sectionTitle,
                        ]}>
                        {title}
                    </Text>
                    <Text
                        style={[
                            styles.sectionSubTitle,
                        ]}
                    >
                        {subtitle}
                    </Text>
                    <Text
                        style={[
                            styles.sectionDescription,
                            {
                                color: isDarkMode ? Colors.light : Colors.dark,
                            },
                        ]}>
                        {children}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

function BodySection({ children, title, subtitle, screenname }) {
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screenname)}
        >
            <View style={styles.bodySectionContainer}>
                <Text
                    style={[
                        styles.bodySectionTitle,
                        {
                            color: isDarkMode ? Colors.white : Colors.black,
                        },
                    ]}>
                    {title}
                </Text>
                <Text
                    style={[
                        styles.bodySectionSubTitle,
                        {
                            color: isDarkMode ? Colors.light : Colors.dark,
                        },
                    ]}
                >
                    {subtitle}
                </Text>
                <Text
                    style={[
                        styles.bodySectionDescription,
                        {
                            color: isDarkMode ? Colors.light : Colors.dark,
                        },
                    ]}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


export function HomeScreen() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View>
                    <TitleSection title="GeotekPPU" subtitle="A simple geotechnical analysis app">
                        <Text style={{ fontSize: 10, color: 'white' }}>&#169; 2023 Daru Jaka Sasangka & Febri Fahmi Hakim</Text>
                    </TitleSection>
                </View>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <BodySection title="Get RMR89 (Bieniawski 1989)" screenname='RMR89'>
                        <Text>Get RMR89 by providing data such as strength of intact rock material, and so on.</Text>
                    </BodySection>
                    <BodySection title="Get RMRb (Geocontrol 2012)" screenname='RMRb'>
                        Get RMRb (RMR basic) by providing data such as: uniaxial compressive strength (UCS) of intact rock material, RQD, and so on.
                    </BodySection>
                    <BodySection title="Get RMR14 (Celada et.al 2014) (tunnel)" screenname='RMR14(tunnel)'>
                        For tunnel works, get RMR14 by providing data such as: strike orientation, dip angle, RMRb, and so on.
                    </BodySection>
                    <BodySection title="Get RMRhlw (Tong et.al 2022)" screenname='RMRhlw'>
                        Get RMR for High-Level Radioactive Waste Disposal (HLW) by providing data such as: UCS of intact rock material, rock quality designation (RQD), space of discontinuity, etc.
                    </BodySection>
                    <BodySection title="Get RMR2002 (Sen-Bahaeldin 2002)" screenname='RMRSen-Bahaeldin'>
                        Get RMR 2002 by providing data such as: UCS of intact rock material, rock quality designation (RQD) and so on.
                    </BodySection>
                    <Divider />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: true
            }}
        >
            <HomeStack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
            <HomeStack.Screen name='RMR89' component={RMR89Screen} />
            <HomeStack.Screen name='RMRb' component={RMRbScreen} />
            <HomeStack.Screen name='RMR14(tunnel)' component={RMR14Screen} />
            <HomeStack.Screen name='RMRhlw' component={RMRhlwScreen} />
            <HomeStack.Screen name='RMRSen-Bahaeldin' component={RMRSenSadagahScreen} />
        </HomeStack.Navigator>
    )
}


const styles = StyleSheet.create({
    logoGeotek: {
        height: 64,
        width: 64
    },
    logoContainer: {
        shadowColor: '#white',
        shadowOpacity: 0.5,
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        elevation: 3
    },
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 24,
        paddingVertical: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    sectionSubTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
        flex: 1,
        flexWrap: 'wrap',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    bodySectionContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 20,
    },
    bodySectionTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    bodySectionSubTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'red'
    },
    bodySectionDescription: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
        flex: 1,
    },
    highlight: {
        fontWeight: '700',
    },
});

