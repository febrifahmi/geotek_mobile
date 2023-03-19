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


const { RMR02pls, RMR02ucs } = require('geotekppu-js/geotekppu-js/rmr/rmr__sen_sadagah2002')


export function RMRSenSadagahScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [l, onChangeL] = React.useState('l')
    const [strengthpls, onChangeStrengthPLS] = React.useState('strength_pls')
    const [strengthucs, onChangeStrengthUCS] = React.useState('strength_ucs')
    const [g, onChangeG] = React.useState('g')
    const [rj, onChangeRj] = React.useState('rj')
    const [rd, onChangeRd] = React.useState('rd')
    const [rmrpls, onChangeRMRpls] = React.useState(0)
    const [rmrucs, onChangeRMRucs] = React.useState(0)
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <Text style={styles.sectionTitle}>
                        Get RMR2002 rating value
                    </Text>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>RMR2002 point loads (<Text style={{ fontWeight: '800' }}>RMRpls</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate RMR2002 based on point loads strength. Input five values: 'l' lambda or average joint spacing or average intact length (in m), 'strength' point load strength of intact rock material, 'G' groundwater condition, 'rj' conditions of most unfavorable joints, 'rd' joint orientation.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>RMRpls(l,strengthpls,G,rj,rd):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeL}
                                value={l}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeStrengthPLS}
                                value={strengthpls}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeG}
                                value={g}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRj}
                                value={rj}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRd}
                                value={rd}
                            />
                        </View>
                        <Button color='success' radius='md' title='Calculate RMRpls' onPress={() => onChangeRMRpls(RMR02pls(l, strengthpls, g, rj, rd))}></Button>
                        <Text style={{ backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16 }}>RMRpls value = <Text style={{ color: 'yellow', fontWeight: '800' }}>{rmrpls}</Text></Text>
                        {rmrpls === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>RMR2002 UCS (<Text style={{ fontWeight: '800' }}>RMRucs</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate RMR2002 based on UCS strength. Input five values: 'l' lambda or average joint spacing or average intact length (in m), 'strength' UCS strength of intact rock material, 'G' groundwater condition, 'rj' conditions of most unfavorable joints, 'rd' joint orientation.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>RMRucs(l,strengthucs,G,rj,rd):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeL}
                                value={l}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeStrengthUCS}
                                value={strengthucs}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeG}
                                value={g}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRj}
                                value={rj}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRd}
                                value={rd}
                            />
                        </View>
                        <Button color='success' radius='md' title='Calculate RMRucs' onPress={() => onChangeRMRucs(RMR02ucs(l, strengthucs, g, rj, rd))}></Button>
                        <Text style={{ backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16 }}>RMRucs value = <Text style={{ color: 'yellow', fontWeight: '800' }}>{rmrucs}</Text></Text>
                        {rmrucs === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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