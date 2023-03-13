import { Button } from '@rneui/base';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Divider } from '@rneui/themed';


const { CalcR1, CalcR2, CalcR3, CalcDiscontinuityClass } = require('geotekppu-js/geotekppu-js/rmr/rmr__bieniawski1989');

export function RMR89Screen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [idx, onChangeIdx] = React.useState('idx');
    const [strength, onChangeStrength] = React.useState('strength');
    const [r1, onChangeR1] = React.useState(0)
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <Text style={styles.sectionTitle}>
                        Get RMR89 rating value
                    </Text>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Text>Calculate Parameter R1 (Strength of intact rock material rating). Input two value: selected index (idx) either 'pls' for point loads strength or 'ucs' for uniaxial compressive strength, and the 'strength' value itself.</Text>
                        <View style={styles.formContainer}>
                            <Text>R1(idx, strength)</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeIdx}
                                value={idx}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeStrength}
                                value={strength}
                            />
                        </View>
                        <Button title='Calculate R1' onPress={() => onChangeR1(CalcR1(idx, strength))}></Button>
                        <Text>R1 value = {r1}</Text>
                    </View>
                    <Divider />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 12,
        width: 80
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    parameterSection: {
        paddingVertical: 10
    }
});