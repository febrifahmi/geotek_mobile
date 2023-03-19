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
import { Button } from '@rneui/base';


const { FactorF1, FactorF2, FactorF3, FactorF4, SMR2015 } = require('geotekppu-js/geotekppu-js/smr/smr__romana_ts2015')


export function AnalysisScreen({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [ftype, onChangeFtype] = React.useState('ftype')
    const [disdd, onChangeDisdd] = React.useState('dis_dd')
    const [sloped, onChangeSloped] = React.useState('slope_d')
    const [f1, onChangeF1] = React.useState(0)
    const [disdip, onChangeDisdip] = React.useState('dis_dip')
    const [f2, onChangeF2] = React.useState(0)
    const [slope, onChangeSlope] = React.useState('slope')
    const [ddips, onChangeDdips] = React.useState('ddips')
    const [f3, onChangeF3] = React.useState(0)
    const [method, onChangeMethod] = React.useState('method')
    const [f4, onChangeF4] = React.useState(0)
    const [rmrb, onChangeRMRb] = React.useState('RMRb')
    const [smr, onChangeSMR] = React.useState(0)
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <Text style={styles.sectionTitle}>
                        Get Slope Mass Rating (SMR)
                    </Text>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Parallelism factor (<Text style={{ fontWeight: '800' }}>F1</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Correction factor F1 which depends on parallelism (denoted by "A") between discontinuity dip direction (alpha j) and slope dip (alpha s). Input three values: 'ftype' type of slope failure (P = planar, T = Toppling), 'dis_dd' discontinuity dip direction, 'slope_d' slope dip.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>FactorF1(ftype,dis_dd,slope_d):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeFtype}
                                value={ftype}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeDisdd}
                                value={disdd}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeSloped}
                                value={sloped}
                            />
                        </View>
                        <Button radius='md' title='Calculate Factor F1' onPress={() => onChangeF1(FactorF1(ftype, disdd, sloped))}></Button>
                        <Text>Factor F1 value = <Text style={{ color: 'green', fontWeight: '800' }}>{f1}</Text></Text>
                        {f1 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Probability of discontinuity shear strength (<Text style={{ fontWeight: '800' }}>F2</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Correction factor F2 related to the probability of discontinuity shear strength (B) (Romana, 1993), depends on the discontinuity dip. In case of failure type Planar: B = beta j ; in case of Toppling: B = 1.0. Input two values: 'ftype' type of slope failure (P = planar, T = Toppling), 'dis_dip' discontinuity dip angle (&lt;=90).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>FactorF2(ftype,dis_dip):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeFtype}
                                value={ftype}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeDisdip}
                                value={disdip}
                            />
                        </View>
                        <Button radius='md' title='Calculate Factor F2' onPress={() => onChangeF2(FactorF2(ftype, disdip))}></Button>
                        <Text>Factor F2 value = <Text style={{ color: 'green', fontWeight: '800' }}>{f2}</Text></Text>
                        {f2 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Slope & discontinuity dip (<Text style={{ fontWeight: '800' }}>F3</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Correction factor F3 indicates relationship (C) between slope (beta s) discontinuity dips (beta j) that is probability of the discontinuity to outcrop on the slope face (Romana, 1993) for planar failure (Romana, 2015). Input three values: 'ftype' type of slope failure (P = planar, T = Toppling),'slope' slope angle,'ddips' discontinuity dips. C = slope - ddips should be lower than 90 degree, C = slope + ddips max is 180.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>FactorF3(ftype,slope,ddips):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeFtype}
                                value={ftype}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeSlope}
                                value={slope}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeDdips}
                                value={ddips}
                            />
                        </View>
                        <Button radius='md' title='Calculate Factor F3' onPress={() => onChangeF3(FactorF3(ftype, slope, ddips))}></Button>
                        <Text>Factor F3 value = <Text style={{ color: 'green', fontWeight: '800' }}>{f3}</Text></Text>
                        {f3 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Excavation method (<Text style={{ fontWeight: '800' }}>F4</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Correction factor F4 considering the excavation method. Input one value: 'method' excavation methods option ("pre": Presplitting; "sb": Smooth blasting; "ns": Natural slope; "bm": Blasting or mechanical).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>FactorF4(method):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeMethod}
                                value={method}
                            />
                        </View>
                        <Button radius='md' title='Calculate Factor F4' onPress={() => onChangeF4(FactorF4(method))}></Button>
                        <Text>Factor F4 value = <Text style={{ color: 'green', fontWeight: '800' }}>{f4}</Text></Text>
                        {f4 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Calculate SMR (Romana 1985,2015) (<Text style={{ fontWeight: '800' }}>SMR</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Slope Mass Rating (SMR) as proposed by Romana (1985, 2015). Input five values: 'rmrb', 'F1', 'F2', 'F3', and 'F4'.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>SMR(rmrb,f1,f2,f3,f4):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRMRb}
                                value={rmrb}
                            />
                            <Text>Factor F1: {f1}</Text>
                            <Text>Factor F2: {f2}</Text>
                            <Text>Factor F3: {f3}</Text>
                            <Text>Factor F4: {f4}</Text>
                        </View>
                        <Button color='success' radius='md' title='Calculate SMR' onPress={() => onChangeSMR(SMR2015(parseFloat(rmrb),parseFloat(f1),parseFloat(f2),parseFloat(f3),parseFloat(f4)))}></Button>
                        <Text style={{ backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16 }}>SMR = <Text style={{ color: 'yellow', fontWeight: '800' }}>{smr}</Text></Text>
                        {smr === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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
    collapseBody: {
        backgroundColor: 'lightgray',
        padding: 10,
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    parameterSection: {
        paddingVertical: 10,
        gap: 10,
    },
    buttonStyle: {
        borderRadius: 8,
    },
});