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

const { CalcRMRucs, CalcRMRrqdSpacing, RMRb } = require('geotekppu-js/geotekppu-js/rmr/rmr_b_geocontrol2012')
const { CalcDiscontinuityClass, CalcR5Simple } = require('geotekppu-js/geotekppu-js/rmr/rmr__bieniawski1989');



export function RMRbScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [strength, onChangeStrength] = React.useState('strength')
    const [rmrucs, onChangeRMRucs] = React.useState(0)
    const [joints, onChangeJoints] = React.useState('joints')
    const [rmrrqdspacing, onChangeRMRRQDspacing] = React.useState(0)
    const [dl, onChangedl] = React.useState('dl')
    const [sep, onChangesep] = React.useState('sep')
    const [rough, onChangerough] = React.useState('rough')
    const [gouge, onChangegouge] = React.useState('gouge')
    const [weather, onChangeweather] = React.useState('weather')
    const [r4, onChangeR4] = React.useState(0)
    const [wcond, onChangeWcond] = React.useState('wcond')
    const [r5, onChangeR5] = React.useState(0)
    const [rmrb, onChangeRMRb] = React.useState(0)
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <Text style={styles.sectionTitle}>
                        Get RMRb (basic) rating value
                    </Text>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>RMR(1) UCS of intact rock (<Text style={{ fontWeight: '800' }}>RMR(1)</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Parameter R1 (Uniaxial Compressive Strength of intact rock). Input one value: 'strength' of intact rock material (UCS of intact rock (in kg/cm2, for consistency it will be converted automatically by this app to MPa)).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R1(strength):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeStrength}
                                value={strength}
                            />
                        </View>
                        <Button radius='md' title='Calculate R1' onPress={() => onChangeRMRucs(CalcRMRucs(strength))}></Button>
                        <Text>R1 value = <Text style={{ color: 'green', fontWeight: '800' }}>{rmrucs}</Text></Text>
                        {rmrucs === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>RQD and spacing of joints (<Text style={{ fontWeight: '800' }}>R(2+3)</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Parameter R(2+3) (RQD and spacing of joints). Input one value: number of 'joints' per meter.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R2+3(joints):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeJoints}
                                value={joints}
                            />
                        </View>
                        <Button radius='md' title='Calculate RMR(2+3)' onPress={() => onChangeRMRRQDspacing(CalcRMRrqdSpacing(joints))}></Button>
                        <Text>R(2+3) value = <Text style={{ color: 'green', fontWeight: '800' }}>{rmrrqdspacing}</Text></Text>
                        {rmrrqdspacing === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Classification of discontinuity condition (<Text style={{ fontWeight: '800' }}>R4</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Parameter R4 (classification of discontinuity condition). Input four values: 'dl' discontinuity length (in m), 'sep' separation (in mm), 'rough' roughness ('very_rough', 'rough', 'slightly_rough', 'smooth', 'slickensided'), 'gouge' infilling ('None', 'hl&lt;5',hl&gt;5, 'sl&lt;5', 'sl&gt;5'), 'weather' weathering ('unweathered'; 'slightly_weathered'; 'moderately_weathered'; 'highly_weathered'; 'decomposed').</Text>
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
                            <SelectDropdown
                                defaultButtonText='select roughness'
                                data={['very_rough', 'rough', 'slightly_rough', 'smooth', 'slickensided']}
                                onSelect={(selectedItem, index) => {
                                    // console.log(selectedItem, index)
                                    onChangerough(selectedItem)
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
                            <SelectDropdown
                                defaultButtonText='select gouge'
                                data={['none', 'hl<5', 'hl>5', 'sl<5', 'sl>5']}
                                onSelect={(selectedItem, index) => {
                                    // console.log(selectedItem, index)
                                    onChangegouge(selectedItem)
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
                            <SelectDropdown
                                defaultButtonText='select weathering'
                                data={['unweathered', 'slightly_weathered', 'moderately_weathered', 'highly_weathered', 'decomposed']}
                                onSelect={(selectedItem, index) => {
                                    // console.log(selectedItem, index)
                                    onChangeweather(selectedItem)
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
                        </View>
                        <Button radius='md' title='Calculate R4' onPress={() => onChangeR4(CalcDiscontinuityClass(dl, sep, rough, gouge, weather))}></Button>
                        <Text>R4 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r4}</Text></Text>
                        {r4 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Groundwater condition (<Text style={{ fontWeight: '800' }}>R5</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Parameter R5 (groundwater condition). Input one value: 'wcond' general conditions of rock material ('dry', 'damp', 'wet', 'dripping', or 'flowing'). Other values such as 'inflow' inflow per 10 m tunnel length (i/m) (None or number) and 'wpress' joint water pressure / major principal will be considered automatically from the general condition.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R5(wcond):</Text>
                            <SelectDropdown
                                defaultButtonText='select wcond'
                                data={['dry', 'damp', 'wet', 'dripping', 'flowing']}
                                onSelect={(selectedItem, index) => {
                                    // console.log(selectedItem, index)
                                    onChangeWcond(selectedItem)
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
                        </View>
                        <Button radius='md' title='Calculate R5' onPress={() => onChangeR5(CalcR5Simple(wcond))}></Button>
                        <Text>R5 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r5['val_r5']}</Text></Text>
                        {r5['val_r5'] === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Rock Mass Rating basic (<Text style={{ fontWeight: '800' }}>RMRb</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Rock Mass Rating basic (RMRb) as proposed in Geocontrol (2012) from four parameters above: 'r1' strength rating, 'r2+3' RQD and spacing of joints, 'r4' condition of discontinuity rating, and 'r5' groundwater rating.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Button color='success' radius='md' title='Calculate RMRb' onPress={() => onChangeRMRb(RMRb(rmrucs, rmrrqdspacing, r4, r5['val_r5']))}></Button>
                        <Text style={{ backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16 }}>RMRb = <Text style={{ color: 'yellow', fontWeight: '800' }}>{rmrb}</Text></Text>
                        {rmrb === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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