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

const { CalcR1, CalcR2, CalcR3, CalcDiscontinuityClass, CalcR5, CalcRMR89 } = require('geotekppu-js/geotekppu-js/rmr/rmr__bieniawski1989');

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
    const [dl, onChangedl] = React.useState('dl')
    const [sep, onChangesep] = React.useState('sep')
    const [rough, onChangerough] = React.useState('rough')
    const [gouge, onChangegouge] = React.useState('gouge')
    const [weather, onChangeweather] = React.useState('weather')
    const [r4, onChangeR4] = React.useState(0)
    const [inflow, onChangeinflow] = React.useState('inflow')
    const [wpress, onChangewpress] = React.useState('wpress')
    const [cond, onChangecond] = React.useState('cond')
    const [r5, onChangeR5] = React.useState(0)
    const [rmr89, onChangeRMR89] = React.useState(0)
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
                        <Text>R1 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r1}</Text></Text>
                        {r1 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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
                        <Text>R2 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r2}</Text></Text>
                        {r2 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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
                        <Text>R3 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r3}</Text></Text>
                        {r3 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Classification of discontinuity condition (<Text style={{ fontWeight: '800' }}>R4</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate Parameter R4 (classification of discontinuity condition). Input four values: 'dl' discontinuity length (in m), 'sep' separation (in mm), 'rough' roughness ('very_rough', 'rough', 'slightly_rough', 'smooth', 'slickensided'), 'gouge' infilling ('None', 'hl&lt;5',hl&gt;5, 'sl&lt;5', 'sl&gt;5'), 'weather' weathering ('unweathered'; 'slightly_weathered'; 'moderately_weathered'; 'highly_weathered'; 'decomposed').</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R4(dl,sep,rough,gouge,weather):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangedl}
                                value={dl}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangesep}
                                value={sep}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangerough}
                                value={rough}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangegouge}
                                value={gouge}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeweather}
                                value={weather}
                            />
                        </View>
                        <Button radius='md' title='Calculate R4' onPress={() => onChangeR4(CalcDiscontinuityClass(dl, sep, rough, gouge, weather))}></Button>
                        <Text>R4 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r4}</Text></Text>
                        {r4 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Groundwater condition (<Text style={{ fontWeight: '800' }}>R5</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate Parameter R5 (groundwater condition). Input three values: 'inflow' inflow per 10 m tunnel length (i/m) (None or number), 'wpress' joint water pressure / major principal, 'cond' general conditions ('dry', 'damp', 'wet', 'dripping', or 'flowing').</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R5(inflow,wpress,cond):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeinflow}
                                value={inflow}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangewpress}
                                value={wpress}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangecond}
                                value={cond}
                            />
                        </View>
                        <Button radius='md' title='Calculate R5' onPress={() => onChangeR5(CalcR5(inflow, wpress, cond))}></Button>
                        <Text>R5 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r5}</Text></Text>
                        {r5 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Rock Mass Rating 89 (<Text style={{ fontWeight: '800' }}>RMR89</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate Rock Mass Rating (RMR) 89 as proposed by Bieniawski (1989) from five parameters above: 'r1' strength rating, 'r2' Rock Quality Designation (RQD) rating, 'r3' space of discontinuity rating, 'r4' condition of discontinuity rating, and 'r5' groundwater rating.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Button color='success' radius='md' title='Calculate RMR89' onPress={() => onChangeRMR89(CalcRMR89(r1,r2,r3,r4,r5))}></Button>
                        <Text style={{backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16}}>RMR89 = <Text style={{ color: 'yellow', fontWeight: '800' }}>{rmr89}</Text></Text>
                        {rmr89 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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