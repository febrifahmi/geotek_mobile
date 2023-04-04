import { Button } from '@rneui/base';
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Dimensions
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Divider } from '@rneui/themed';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown'
import { openDatabase } from 'react-native-sqlite-storage';
import { FlatList } from 'react-native-gesture-handler';

// get screen width
var screenwidth = Dimensions.get('window').width
var screenheight = Dimensions.get('window').height


function openCB() {
    console.log('Database open!')
}
function errorCB(err) {
    console.log(err)
}

var db = openDatabase({ name: 'ObservationDatabase.db' }, openCB, errorCB);


const { CalcR1, CalcR2, CalcR3, CalcDiscontinuityClass, CalcR5, CalcR5Simple, CalcRMR89 } = require('geotekppu-js/geotekppu-js/rmr/rmr__bieniawski1989');


export function RMR89Screen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [prjname, onChangePrjname] = React.useState('project_name')
    const [selectedprjname, setProjectName] = React.useState('')
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
    const [wcond, onChangeWcond] = useState();
    const [r5, onChangeR5] = React.useState(0)
    const [rmr89, onChangeRMR89] = React.useState(0)
    const [datapointname, onChangeDatapointname] = React.useState('datapoint_name')
    const [observationdata, onChangeObsData] = React.useState([])
    const [existingtable, onChangeExistingTable] = React.useState([])
    const [selectedtable, onChangeSelectedTable] = React.useState()

    // check if table name already exist
    function checkTableExist() {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT * FROM sqlite_master WHERE type='table' and name LIKE 'RMR89%'",
                [],
                function (tx, res) {
                    let temp = []
                    console.log('item:', res.rows.length);
                    if (res.rows.length >= 0) {
                        for (i = 0; i < res.rows.length; i++) {
                            console.log(res.rows.item(i))
                            temp.push(res.rows.item(i)['name'])
                        }
                    }
                    console.log(temp)
                    onChangeExistingTable(temp)
                }
            );
        });
    }
    useEffect(() => {
        checkTableExist();
    }, []);
    // Create Table rmr89_observation
    const createTableRMR89 = () => {
        if (selectedprjname) {
            db.transaction(function (txn) {
                txn.executeSql(
                    `SELECT name FROM sqlite_master WHERE type='table' AND name='rmr89_observation_${selectedprjname}'`,
                    [],
                    function (tx, res) {
                        console.log('item:', res.rows.length);
                        if (res.rows.length == 0) {
                            txn.executeSql(`DROP TABLE IF EXISTS rmr89_observation_${selectedprjname}`, []);
                            txn.executeSql(
                                `CREATE TABLE IF NOT EXISTS rmr89_observation_${selectedprjname}(obs_id INTEGER PRIMARY KEY AUTOINCREMENT, datapoint_name VARCHAR(30), r1_idx VARCHAR(25), r1_strength INT(15), r1 INT(15), r2_rqd INT(15), r2 INT(15), r3_spacing INT(15), r3 INT(15), r4_dl INT(15), r4_sep INT(15), r4_rough VARCHAR(25), r4_gouge VARCHAR(25), r4_weather VARCHAR(25), r4 INT(15), r5_wcond VARCHAR(25), r5 INT(15), rmr89 INT(15))`,
                                []
                            );
                        }
                    }
                );
            })
            Alert.alert(`Successfully Created Table rmr89_observation_${selectedprjname}...`);
        }
    };

    const insertData = (datapoint_name, r1_idx, r1_strength, r1, r2_rqd, r2, r3_spacing, r3, r4_dl, r4_sep, r4_rough, r4_gouge, r4_weather, r4, r5_wcond, r5, rmr89) => {
        console.log("Isi data: " + datapoint_name, r1_idx, r1_strength, r1, r2_rqd, r2, r3_spacing, r3, r4_dl, r4_sep, r4_rough, r4_gouge, r4_weather, r4, r5_wcond, r5, rmr89)
        db.transaction(function (txn) {
            txn.executeSql(
                `INSERT INTO rmr89_observation_${selectedprjname} (datapoint_name, r1_idx, r1_strength, r1, r2_rqd, r2, r3_spacing, r3, r4_dl, r4_sep, r4_rough, r4_gouge, r4_weather, r4, r5_wcond, r5, rmr89) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [datapoint_name, r1_idx, r1_strength, r1, r2_rqd, r2, r3_spacing, r3, r4_dl, r4_sep, r4_rough, r4_gouge, r4_weather, r4, r5_wcond, r5, rmr89],
                (tx, results) => {
                    console.log('Results', results);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Data Inserted Successfully....');
                    } else Alert.alert('Failed....');
                }
            );
        });

        displayObservationData();

    }

    const displayObservationData = (tablename) => {
        // console.log(`rmr89_observation_${selectedprjname}`)
        db.transaction(function (txn) {
            txn.executeSql(
                `SELECT * FROM ${tablename}`,
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    console.log(temp);
                    onChangeObsData(temp)
                }
            );
        })
    }


    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.projectSection}>
                    <Collapse>
                        <CollapseHeader style={styles.collapseHeaderProject}>
                            <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Config Project (<Text style={{ fontWeight: '800' }}>Project</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                        </CollapseHeader>
                        <CollapseBody style={styles.collapseBody}>
                            <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Set project name and create observation table for RMR89.</Text>
                        </CollapseBody>
                    </Collapse>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            style={styles.inputFullWidth}
                            onChangeText={onChangePrjname}
                            value={prjname}
                        />
                        <Button radius='md' width={150} title='Set' onPress={() => setProjectName(prjname)}></Button>
                    </View>
                    {selectedprjname ? <Text style={{ fontWeight: '800' }}>Project Name: {selectedprjname}</Text> : ""}
                    <Button disabled={selectedprjname ? false : true} color='secondary' radius='md' title='Create Observation Table' onPress={() => createTableRMR89()}></Button>
                </View>
                <Divider />
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
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Strength of intact rock (<Text style={{ fontWeight: '800' }}>R1</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Parameter R1 (Strength of intact rock material rating). Input two values: selected index (idx) either 'pls' for point loads strength or 'ucs' for uniaxial compressive strength, and the 'strength' value itself.</Text>
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
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Drill core RQD rating (<Text style={{ fontWeight: '800' }}>R2</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Parameter R2 (drill core RQD rating). Input one value: drillcoreRQD drill core quality or rock quality designation (in percent).</Text>
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
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Space of discontinuity rating (<Text style={{ fontWeight: '800' }}>R3</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Parameter R3 (space of discontinuity rating). Input one value: 'spacing'/value of rock spacing (in m, float/decimal).</Text>
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
                                data={['None', 'hl<5', 'hl>5', 'sl<5', 'sl>5']}
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
                                <Text style={{ color: isDarkMode ? Colors.lighter : Colors.lighter }}>Rock Mass Rating 89 (<Text style={{ fontWeight: '800' }}>RMR89</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.darker }}>Calculate Rock Mass Rating (RMR) 89 as proposed by Bieniawski (1989) from five parameters above: 'r1' strength rating, 'r2' Rock Quality Designation (RQD) rating, 'r3' space of discontinuity rating, 'r4' condition of discontinuity rating, and 'r5' groundwater rating.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Button color='success' radius='md' title='Calculate RMR89' onPress={() => onChangeRMR89(CalcRMR89(r1, r2, r3, r4, r5['val_r5']))}></Button>
                        <Text style={{ backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16 }}>RMR89 = <Text style={{ color: 'yellow', fontWeight: '800' }}>{rmr89}</Text></Text>
                        {rmr89 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                </View>
                <Divider />
                <View style={styles.projectSection}>
                    <Text style={{ fontWeight: '800', marginBottom: 20 }}>Insert Observation Data into Database</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeDatapointname}
                            value={datapointname}
                        />
                        <Button color='green' radius='md' title='Save Result' onPress={() => insertData(datapointname, idx, strength, r1, drillcoreRQD, r2, spacing, r3, dl, sep, rough, gouge, weather, r4, wcond, r5['val_r5'], rmr89)}></Button>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: '800', marginBottom: 10 }}>Select existing table to display data:</Text>
                        <Divider />
                        <View style={{ marginTop: 10 }}>
                            <View style={{ marginBottom: 10}}>
                                <SelectDropdown
                                    defaultButtonText='select existing table'
                                    data={existingtable}
                                    onSelect={(selectedItem, index) => {
                                        // console.log(selectedItem, index)
                                        console.log(selectedItem)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        onChangeSelectedTable(selectedItem)
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                />
                                {selectedtable ? "" : <Text style={{ color: 'red' }}>(select project table to display existing data.)</Text>}
                            </View>
                            {selectedtable ? <Button radius={8} title='Display Data' onPress={() => displayObservationData(selectedtable)} /> : ""}
                            <ScrollView
                                horizontal
                            >
                                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', flexWrap: 'nowrap', gap: 10 }}>
                                    {observationdata.length != 0 ?
                                        observationdata.map((item) => {
                                            // console.log(observationdata)
                                            return (
                                                <View key={item.obs_id} style={styles.dataItem}>
                                                    <Text style={{ fontWeight: "800", fontStyle: 'italic' }}>Observation Id: {item.obs_id}</Text>
                                                    <Divider />
                                                    <Text>Data point name: {item.datapoint_name}</Text>
                                                    <View>
                                                        <Text style={{ fontWeight: '800', color: 'brown' }}>Parameter R1</Text>
                                                        <Text>idx: {item.r1_idx}</Text>
                                                        <Text>strength: {item.r1_strength}</Text>
                                                        <Text>R1: {item.r1}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontWeight: '800', color: 'brown' }}>Parameter R2</Text>
                                                        <Text>drillcoreRQD: {item.r2_rqd}</Text>
                                                        <Text>R2: {item.r2}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontWeight: '800', color: 'brown' }}>Parameter R3</Text>
                                                        <Text>spacing: {item.r3_spacing}</Text>
                                                        <Text>R3: {item.r3}</Text>
                                                    </View>
                                                </View>
                                            )
                                        }) : <Text>There is no data yet in this table.</Text>}
                                </View>
                            </ScrollView>
                        </View>
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
    },
    inputFullWidth: {
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 12,
        width: 200
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
    collapseHeaderProject: {
        backgroundColor: 'brown',
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
    projectSection: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 10,
        backgroundColor: 'darkgray'
    },
    buttonStyle: {
        borderRadius: 8,
    },
    dataItem: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: 'gainsboro',
        borderRadius: 8,
        marginVertical: 2,
        width: 250
    }
});