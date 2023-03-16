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
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

const { CalcR1, CalcR2, CalcR3, CalcDiscontinuityClass } = require('geotekppu-js/geotekppu-js/rmr/rmr__bieniawski1989');

export function RMR89Screen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [prjname, onChangePrjName] = React.useState('newproject');
    const [idx, onChangeIdx] = React.useState('idx');
    const [strength, onChangeStrength] = React.useState('strength');
    const [r1, onChangeR1] = React.useState(0);
    const [drillcoreRQD, onChangeRQD] = React.useState('RQD');
    const [r2, onChangeR2] = React.useState(0)
    const [spacing, onChangeSpacing] = React.useState('spacing');
    const [r3, onChangeR3] = React.useState(0)
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
                        <View style={styles.formContainer}>
                            <Text>Project Name:</Text>
                            <TextInput
                                style={styles.inputPrjName}
                                onChangeText={onChangePrjName}
                                value={prjname}
                            />
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Strength of intact rock (<Text style={{ fontWeight: '800' }}>R1</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate Parameter R1 (Strength of intact rock material rating). Input two values: selected index (idx) either 'pls' for point loads strength or 'ucs' for uniaxial compressive strength, and the 'strength' value itself.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R1(idx, strength):</Text>
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
                        <Button radius='md' title='Calculate R1' onPress={() => onChangeR1(CalcR1(idx, strength))}></Button>
                        <Text>R1 value = <Text style={{color:'green', fontWeight: '800'}}>{r1}</Text></Text>
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Drill core RQD rating (<Text style={{ fontWeight: '800' }}>R2</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate Parameter R2 (drill core RQD rating). Input one value: drillcoreRQD drill core quality or rock quality designation (in percent).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R2(drillcoreRQD):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRQD}
                                value={drillcoreRQD}
                            />
                        </View>
                        <Button radius='md' title='Calculate R2' onPress={() => onChangeR2(CalcR2(drillcoreRQD))}></Button>
                        <Text>R2 value = <Text style={{color:'green', fontWeight: '800'}}>{r2}</Text></Text>
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Space of discontinuity rating (<Text style={{ fontWeight: '800' }}>R3</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate Parameter R3 (space of discontinuity rating). Input one value: 'spacing'/value of rock spacing (in m, float/decimal).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R3(spacing):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeSpacing}
                                value={spacing}
                            />
                        </View>
                        <Button radius='md' title='Calculate R3' onPress={() => onChangeR3(CalcR3(spacing))}></Button>
                        <Text>R3 value = <Text style={{color:'green', fontWeight: '800'}}>{r3}</Text></Text>
                    </View>
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
    inputPrjName: {
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 12,
        width: 200
    },
    collapseHeader: {
        backgroundColor: 'gray',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    collapseBody:{
        backgroundColor: 'lightgray',
        padding: 10,
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    parameterSection: {
        paddingVertical: 10,
        gap: 10,
    },
    buttonStyle: {
        borderRadius: 8,
    },
});