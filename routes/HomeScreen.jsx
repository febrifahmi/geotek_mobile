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
import LinearGradient from 'react-native-linear-gradient';


function TitleSection({ children, title, subtitle }) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#0042c7', '#0080f9', '#00d5a4']} >
            <View style={styles.sectionContainer}>
                <Text
                    style={[
                        styles.sectionTitle,
                        {
                            color: isDarkMode ? Colors.white : Colors.black,
                        },
                    ]}>
                    {title}
                </Text>
                <Text
                    style={[
                        styles.sectionSubTitle,
                        {
                            color: isDarkMode ? Colors.light : Colors.dark,
                        },
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
        </LinearGradient>
    );
}

function BodySection({ children, title, subtitle }) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
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
                    <TitleSection title="GeotekPPU" subtitle="Simple geotechnical analysis app">
                        <Text style={{ fontSize: 10, color: 'white' }}>&#169; 2023 Daru Jaka Sasangka & Febri Fahmi Hakim</Text>
                    </TitleSection>
                </View>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <BodySection title="Get RMR89 (Bieniawski 1989)">
                        Get RMR89 by providing data such as strength of intact rock material, and so on.
                    </BodySection>
                    <BodySection title="Get RMRb (Geocontrol 2012)">
                        Get RMRb (RMR basic) by providing data such as: uniaxial compressive strength (UCS) of intact rock material, RQD, and so on.
                    </BodySection>
                    <BodySection title="Get RMR14 (Celada et.al 2014)">
                        Get RMR14 by providing data such as: strike orientation, dip angle, RMRb, and so on.
                    </BodySection>
                    <BodySection title="Get RMRhlw (Tong et.al 2022)">
                        Get RMR for High-Level Radioactive Waste Disposal (HLW) by providing data such as: UCS of intact rock material, rock quality designation (RQD), space of discontinuity, etc.
                    </BodySection>
                    <BodySection title="Get RMR2002 (Sen-Sadagah 2002)">
                        Get RMR 2002 by providing data such as: UCS of intact rock material, rock quality designation (RQD) and so on.
                    </BodySection>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionSubTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'red'
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
        borderRadius: 10,
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
    },
    highlight: {
        fontWeight: '700',
    },
});

