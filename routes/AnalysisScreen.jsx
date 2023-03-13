import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { Divider } from '@rneui/themed';


export function AnalysisScreen({ navigation }) {
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
            <Collapse>
                <CollapseHeader>
                    <Text style={{fontSize: 18,textAlign: 'center', backgroundColor: 'lightgray'}}>RMR89</Text>
                    <Divider color='black' />
                </CollapseHeader>
                <CollapseBody>
                    <Text>Kesatu</Text>
                    <Divider color='gray' />
                    <Text>Kedua</Text>
                    <Divider color='gray' />
                </CollapseBody>
            </Collapse>
            <Collapse>
                <CollapseHeader>
                    <Text style={{fontSize: 18,textAlign: 'center', backgroundColor: 'lightgray'}}>RMRb</Text>
                    <Divider color='black' />
                </CollapseHeader>
                <CollapseBody>
                    <Text>Kesatu</Text>
                    <Divider color='gray' />
                    <Text>Kedua</Text>
                    <Divider color='gray' />
                </CollapseBody>
            </Collapse>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        paddingVertical: 20
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
    buttonSection: {
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'green',
        borderColor: 'white',
        borderRadius: 5,
        padding: 10
    }
});