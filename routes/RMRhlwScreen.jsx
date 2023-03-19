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


const { AdjustedR1ucs, AdjustedR2, AdjustedR3, CalcR6, CalcR7, CalcR8, CalcR9, RMRhlw } = require('geotekppu-js/geotekppu-js/rmr/rmr_hlw_tong_etal2022')
const { CalcDiscontinuityClass, CalcR5 } = require('geotekppu-js/geotekppu-js/rmr/rmr__bieniawski1989');

export function RMRhlwScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [strength, onChangeStrength] = React.useState('strength')
    const [r1adj, onChangeR1adj] = React.useState(0)
    const [rqd, onChangeRQD] = React.useState('RQD')
    const [r2adj, onChangeR2adj] = React.useState(0)
    const [spacing, onChangeSpacing] = React.useState('spacing')
    const [r3adj, onChangeR3adj] = React.useState(0)
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
    const [cat, onChangeCat] = React.useState('cat')
    const [favorability, onChangeFav] = React.useState('favorability')
    const [r6, onChangeR6] = React.useState(0)
    const [ri, onChangeRi] = React.useState('ri')
    const [per_i, onChangePeri] = React.useState('per_i')
    const [r7, onChangeR7] = React.useState(0)
    const [permco, onChangePermco] = React.useState('perm_co')
    const [r8, onChangeR8] = React.useState(0)
    const [ph, onChangePH] = React.useState('pH')
    const [tds, onChangeTDS] = React.useState('tds')
    const [cl, onChangeCL] = React.useState('cl')
    const [r9, onChangeR9] = React.useState(0)
    const [rmrhlw, onChangeRMRhlw] = React.useState(0)
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <Text style={styles.sectionTitle}>
                        Get RMRhlw (High Radioactive Level Waste disposal) rating value
                    </Text>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Adjusted R1ucs (<Text style={{ fontWeight: '800' }}>R1 UCS</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Adjusted R1 (adjusted uniaxial compressive rock mass strength incorporating the influence of ground water weakening and temperature environment on deep located excavation project). Input one value: 'strength' uniaxial compressive strength test result of intact rock material/rock mass strength (in MPa).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R1adj(strength):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeStrength}
                                value={strength}
                            />
                        </View>
                        <Button radius='md' title='Calculate R1adj' onPress={() => onChangeR1adj(AdjustedR1ucs(strength))}></Button>
                        <Text>R1adj value = <Text style={{ color: 'green', fontWeight: '800' }}>{r1adj}</Text></Text>
                        {r1adj === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Adjusted R2 (<Text style={{ fontWeight: '800' }}>R2adj</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Adjusted R2 - adjustment of rock quality designation rating. Input one value: 'rqd' RQD rating/value (0-100).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R2adj(rqd):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRQD}
                                value={rqd}
                            />
                        </View>
                        <Button radius='md' title='Calculate R2adj' onPress={() => onChangeR2adj(AdjustedR2(rqd))}></Button>
                        <Text>R2adj value = <Text style={{ color: 'green', fontWeight: '800' }}>{r2adj}</Text></Text>
                        {r2adj === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Adjusted R3 (<Text style={{ fontWeight: '800' }}>R3adj</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Adjusted R3 - adjustment of rating value based on joint spacing. Input one value: 'spacing' space of discontinuity (in m).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R3adj(spacing):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeSpacing}
                                value={spacing}
                            />
                        </View>
                        <Button radius='md' title='Calculate R3adj' onPress={() => onChangeR3adj(AdjustedR3(spacing))}></Button>
                        <Text>R3adj value = <Text style={{ color: 'green', fontWeight: '800' }}>{r3adj}</Text></Text>
                        {r3adj === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Tunnel/foundation/slope fav (<Text style={{ fontWeight: '800' }}>R6</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Adjustment rating for tunnel, foundation and slope based of favorability. Input two values: 'cat' category (tunnel, foundation, slope) (type String), 'favorability' favorability option ('vfav': very favorable; 'fav': favorable; 'fair'; 'unfav': unfavorable; 'vunfav': very unfavorable)</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R6(cat,fav):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeCat}
                                value={cat}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeFav}
                                value={favorability}
                            />
                        </View>
                        <Button radius='md' title='Calculate R6' onPress={() => onChangeR6(CalcR6(cat, favorability))}></Button>
                        <Text>R6 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r6}</Text></Text>
                        {r6 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Geostress correction (<Text style={{ fontWeight: '800' }}>R7</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Geostress correction/strength-stress ratio index/in-situ stress modification index (R7) as proposed in Tong et.al (2022) (a ratio to measure the risk of rock bursts). Input two values: 'ri' score of Ri based on rock burst grade, 'per_i' percentage of different rock burst grade. I (no rock burst): Ri = 0, II (slight rock burst): Ri = -4, III (moderate rock burst): Ri = -8, IV (severe rock burst): Ri = -12.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R7(ri,per_i):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRi}
                                value={ri}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePeri}
                                value={per_i}
                            />
                        </View>
                        <Button radius='md' title='Calculate R7' onPress={() => onChangeR7(CalcR7(ri, per_i))}></Button>
                        <Text>R7 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r7}</Text></Text>
                        {r7 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Rock mass permeability index (<Text style={{ fontWeight: '800' }}>R8</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Rock Mass Permeability Index as main factor influence the water seepage in rocks material. Input one value: 'perm_co' coefficient of permeability value and it should within the range &lt;=10^-9 m/s. If permeability coefficient value == &lt;=10^-9 m/s == 1, then R8 = -12 x (1-1) = 0. Otherwise, when permeability coefficient value == &lt;=10^-9 m/s == 0, R8 is -12. The coefficient is between 0 and 1.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R8(perm_co):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePermco}
                                value={permco}
                            />
                        </View>
                        <Button radius='md' title='Calculate R8' onPress={() => onChangeR8(CalcR8(permco))}></Button>
                        <Text>R8 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r8}</Text></Text>
                        {r8 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Groundwater chemistry index (<Text style={{ fontWeight: '800' }}>R9</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>The groundwater chemistry index as proposed by Tong et.al (2022). Input three values: 'pH' pH (acidity), 'tds' total dissolved solids (g/L), 'cl' non/negatively charged chlorine (g/L).</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={styles.formContainer}>
                            <Text>R9(pH,tds,cl):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePH}
                                value={ph}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeTDS}
                                value={tds}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeCL}
                                value={cl}
                            />
                        </View>
                        <Button radius='md' title='Calculate R9' onPress={() => onChangeR9(CalcR9(ph, tds, cl))}></Button>
                        <Text>R9 value = <Text style={{ color: 'green', fontWeight: '800' }}>{r9}</Text></Text>
                        {r9 === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
                    </View>
                    <Divider />
                    <View style={styles.parameterSection}>
                        <Collapse>
                            <CollapseHeader style={styles.collapseHeader}>
                                <Text style={{ color: isDarkMode ? Colors.darker : Colors.lighter }}>Rock Mass Rating HLW (<Text style={{ fontWeight: '800' }}>RMR HLW</Text>)</Text><Ionicons name='expand-more' size={16} color='yellow' />
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBody}>
                                <Text>Calculate Rock Mass Rating High Level Radioactive Waste Disposal (RMR HLW) as proposed in Tong et.al (2022) from nine parameters above: 'R1adj', 'R2adj', 'R3adj', R4, R5, R6, R7, R8, dan R9.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Button color='success' radius='md' title='Calculate RMR HLW' onPress={() => onChangeRMRhlw(RMRhlw(r1adj,r2adj,r3adj,r4,r5,r6,r7,r8,r9))}></Button>
                        <Text style={{ backgroundColor: 'gray', color: isDarkMode ? Colors.darker : Colors.lighter, padding: 10, fontSize: 16 }}>RMR HLW = <Text style={{ color: 'yellow', fontWeight: '800' }}>{rmrhlw}</Text></Text>
                        {rmrhlw === null ? <Text style={{ color: 'red' }}>Out of bound. Please read the guidelines.</Text> : ''}
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