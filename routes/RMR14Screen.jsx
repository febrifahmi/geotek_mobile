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
import SelectDropdown from 'react-native-select-dropdown'

const { CalcF0, CalcFexcavation, CalcFexcavationNew, CalcICE, CalcFStressStrain, RMRbAdj, RMR14 } = require('geotekppu-js/geotekppu-js/rmr/rmr_celada_etal2014')

export function RMR14Screen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [strikeorientation, onChangeStrike] = React.useState('strike_orientation')
    const [dipangle, onChangedipangle] = React.useState('dip_angle')
    const [f0, onChangeF0] = React.useState(0)
    const [method, onChangeMethod] = React.useState('method')
    const [rmrb, onChangeRMRb] = React.useState('RMRb')
    const [fexc, onChangeFexc] = React.useState(0)
    const [ucs, onChangeucs] = React.useState('ucs')
    const [k0, onChangek0] = React.useState('k0')
    const [h, onChangeH] = React.useState('H')
    const [f, onChangeF] = React.useState('F')
    const [ice, onChangeice] = React.useState(0)
    const [fss, onChangeFss] = React.useState(0)
    const [rmrbadj, onChangermrbadj] = React.useState(0)
    const [rmr14, onChangeRMR14] = React.useState(0)
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <Text style={styles.sectionTitle}>
                        Get RMR14 rating value
                    </Text>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>F0 adjustment factor (<Text style={{ fontWeight: '800' }}>F0</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>F0 is adjustment factor for the orientation of tunnel axis with regard to main set of discontinuities. Input two values: 'strike_orientation' orientation of strike to tunnel axis (if orientation is perpendicular directly input 'dwd' or drive with dip, or 'dad' or drive against dip, or for other orientation type just input 'parallel' or 'irrespective'); and 'dip_angle' dip angle (dwd: 20-45 or 45-90, dad: 20-45 or 45-90, parallel: 45-90 or 20-45, irrespective: 0-20).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>F0(strike,dip):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeStrike}
                                value={strikeorientation}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangedipangle}
                                value={dipangle}
                            />
                        </View>
                        <Button radius='md' title='Calculate F0' onPress={() => onChangeF0(CalcF0(strikeorientation, dipangle))}></Button>
                        <Text>F0 value = <Text style={{ color: 'green', fontWeight: '800' }}>{f0}</Text></Text>
                        {f0 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Fexcavation adjustment factor (<Text style={{ fontWeight: '800' }}>Fexc</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Adjustment factor for RMR considering excavation method (Tunneling Bore Method/TBM, Drill and Blast/D+B, or New Austria Tunneling Method/NATM). Input two values: 'method' the excavation method used ('tbm' for TBM, 'db' for D+B, or 'natm' for NATM), 'rmrb' RMR basic (before adjustment). In the case you use 'db' or 'natm' no need to input the value of 'rmrb'.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>Fexc(method,rmrb):</Text>
                            <SelectDropdown
                                defaultButtonText='select method'
                                data={['tbm', 'db', 'natm']}
                                onSelect={(selectedItem, index) => {
                                    // console.log(selectedItem, index)
                                    onChangeMethod(selectedItem)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                            <TextInput
                                editable={method == 'db' || method == 'natm' ? false : true}
                                style={styles.input}
                                onChangeText={onChangeRMRb}
                                value={rmrb}
                            />
                        </View>
                        <Button radius='md' title='Calculate Fexc' onPress={() => onChangeFexc(CalcFexcavationNew(method,rmrb))}></Button>
                        <Text>Fexc value = <Text style={{ color: 'green', fontWeight: '800' }}>{fexc}</Text></Text>
                        {fexc === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>"Índice de Comportamiento Elástico" (<Text style={{ fontWeight: '800' }}>ICE</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>"Índice de Comportamiento Elástico" (ICE) as proposed by Bieniawski and Celada (2011). Input five values: 'rmrb' RMR basic (before adjustment), 'ucs' uniaxial compressive strength of intact rock (in MPa), 'k0' ratio of the horizontal to vertical virgin stress, 'H' tunnel depth (in meter), and 'F' shape coefficient (circular tunnel d = 6 m then F 1.3 ; circular tunnel d = 10 m then F 1.0 ; coventional tunnel 14 m wide then F 0.75 ; caverns 25 m wide x 60 m high then F 0.55).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>ICE(rmrb,ucs,k0,H,F):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRMRb}
                                value={rmrb}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeucs}
                                value={ucs}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangek0}
                                value={k0}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeH}
                                value={h}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeF}
                                value={f}
                            />
                        </View>
                        <Button radius='md' title='Calculate ICE' onPress={() => onChangeice(CalcICE(rmrb, ucs, k0, h, f))}></Button>
                        <Text>ICE value = <Text style={{ color: 'green', fontWeight: '800' }}>{ice}</Text></Text>
                        {ice === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Fstress-strain adjustment factor (<Text style={{ fontWeight: '800' }}>Fss</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Adjustment factor of stress-strain based on "Índice de Comportamiento Elástico" (ICE) value. Input one value: 'ICE' value.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>Fss(ice):</Text>
                            <Text>ICE value: {ice}</Text>
                        </View>
                        <Button radius='md' title='Calculate Fss' onPress={() => onChangeFss(CalcFStressStrain(ice))}></Button>
                        <Text>Fss value = <Text style={{ color: 'green', fontWeight: '800' }}>{fss}</Text></Text>
                        {fss === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>RMRb adjustment (<Text style={{ fontWeight: '800' }}>RMRbAdj</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Adjustment of RMRb with F0 value. Input two values: 'rmrb' original RMRb value, 'f0' F0 value.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>RMRbAdj(rmrb,f0):</Text>
                            <Text>RMRb (original) value: {rmrb}</Text>
                            <Text>F0 value: {f0}</Text>
                        </View>
                        <Button radius='md' title='Calculate RMRbAdj' onPress={() => onChangermrbadj(RMRbAdj(parseInt(rmrb), parseInt(f0)))}></Button>
                        <Text>RMRbAdj value = <Text style={{ color: 'green', fontWeight: '800' }}>{rmrbadj}</Text></Text>
                        {rmrbadj === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Rock Mass Rating 14 (<Text style={{ fontWeight: '800' }}>RMR14</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>RMR14 as proposed by Celada etal (2014) - RMR with three adjusment factors applied. Input three values: 'rmrb_adj' RMRb adjustment factor for tunnel orientation, 'val_fe' Fexc adjustment factor for excavation, 'val_fs' Fss adjustment factor for stress strain.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>RMR14(rmrb_adj,Fexc,Fss):</Text>
                            <Text>RMRbAdj (adjusted) value: {rmrbadj}</Text>
                            <Text>Fexc value: {fexc}</Text>
                            <Text>Fss value: {fss}</Text>
                        </View>
                        <Button color='success' radius='md' title='Calculate RMR14' onPress={() => onChangeRMR14(RMR14(rmrbadj,fexc,fss))}></Button>
                        <Text style={{ backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16 }}>RMR14 value = <Text style={{ color: 'yellow', fontWeight: '800' }}>{rmr14}</Text></Text>
                        {rmr14 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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