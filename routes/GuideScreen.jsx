import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Divider } from '@rneui/themed';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/base';

export function GuideScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <Text style={styles.sectionTitle}>
                        How to use this app
                    </Text>
                    <Divider />
                    <Text style={{backgroundColor:'cyan',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Rock Mass Rating 89 (<Text style={{ fontWeight: '800' }}>RMR89</Text>)</Text>
                    <Text>Calculate Rock Mass Rating (RMR) 89 as proposed by Bieniawski (1989) from five parameters above: 'r1' strength rating, 'r2' Rock Quality Designation (RQD) rating, 'r3' space of discontinuity rating, 'r4' condition of discontinuity rating, and 'r5' groundwater rating.</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Strength of intact rock (<Text style={{ fontWeight: '800' }}>R1</Text>)</Text>
                    <Text>Calculate Parameter R1 (Strength of intact rock material rating). Input two values: selected index (idx) either 'pls' for point loads strength or 'ucs' for uniaxial compressive strength, and the 'strength' value itself.</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Drill core RQD rating (<Text style={{ fontWeight: '800' }}>R2</Text>)</Text>
                    <Text>Calculate Parameter R2 (drill core RQD rating). Input one value: drillcoreRQD drill core quality or rock quality designation (in percent).</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Space of discontinuity rating (<Text style={{ fontWeight: '800' }}>R3</Text>)</Text>
                    <Text>Calculate Parameter R3 (space of discontinuity rating). Input one value: 'spacing'/value of rock spacing (in m, float/decimal).</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Classification of discontinuity condition (<Text style={{ fontWeight: '800' }}>R4</Text>)</Text>
                    <Text>Calculate Parameter R4 (classification of discontinuity condition). Input four values: 'dl' discontinuity length (in m), 'sep' separation (in mm), 'rough' roughness ('very_rough', 'rough', 'slightly_rough', 'smooth', 'slickensided'), 'gouge' infilling ('None', 'hl&lt;5',hl&gt;5, 'sl&lt;5', 'sl&gt;5'), 'weather' weathering ('unweathered'; 'slightly_weathered'; 'moderately_weathered'; 'highly_weathered'; 'decomposed').</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Groundwater condition (<Text style={{ fontWeight: '800' }}>R5</Text>)</Text>
                    <Text>Calculate Parameter R5 (groundwater condition). Input three values: 'inflow' inflow per 10 m tunnel length (i/m) (None or number), 'wpress' joint water pressure / major principal, 'cond' general conditions ('dry', 'damp', 'wet', 'dripping', or 'flowing').</Text>
                    <Divider />
                    <Text style={{backgroundColor:'cyan',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Rock Mass Rating basic (<Text style={{ fontWeight: '800' }}>RMRb</Text>)</Text>
                    <Text>Calculate Rock Mass Rating basic (RMRb) as proposed in Geocontrol (2012) from four parameters: 'r1' strength rating, 'r2+3' RQD and spacing of joints, 'r4' condition of discontinuity rating, and 'r5' groundwater rating.</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RMR(1) UCS of intact rock (<Text style={{ fontWeight: '800' }}>RMR(1)</Text>)</Text>
                    <Text>Calculate Parameter R1 (Uniaxial Compressive Strength of intact rock). Input one value: 'strength' of intact rock material (UCS of intact rock (in kg/cm2, for consistency it will be converted automatically by this app to MPa)).</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RQD and spacing of joints (<Text style={{ fontWeight: '800' }}>R(2+3)</Text>)</Text>
                    <Text>Calculate Parameter R(2+3) (RQD and spacing of joints). Input one value: number of 'joints' per meter.</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Classification of discontinuity condition (<Text style={{ fontWeight: '800' }}>R4</Text>)</Text>
                    <Text>Calculate Parameter R4 (classification of discontinuity condition). Input four values: 'dl' discontinuity length (in m), 'sep' separation (in mm), 'rough' roughness ('very_rough', 'rough', 'slightly_rough', 'smooth', 'slickensided'), 'gouge' infilling ('None', 'hl&lt;5',hl&gt;5, 'sl&lt;5', 'sl&gt;5'), 'weather' weathering ('unweathered'; 'slightly_weathered'; 'moderately_weathered'; 'highly_weathered'; 'decomposed').</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Groundwater condition (<Text style={{ fontWeight: '800' }}>R5</Text>)</Text>
                    <Text>Calculate Parameter R5 (groundwater condition). Input three values: 'inflow' inflow per 10 m tunnel length (i/m) (None or number), 'wpress' joint water pressure / major principal, 'cond' general conditions ('dry', 'damp', 'wet', 'dripping', or 'flowing').</Text>
                    <Divider />
                    <Text style={{backgroundColor:'cyan',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Rock Mass Rating 14 (<Text style={{ fontWeight: '800' }}>RMR14</Text>)</Text>
                    <Text>RMR14 as proposed by Celada etal (2014) - RMR with three adjusment factors applied. Input three values: 'rmrb_adj' RMRb adjustment factor for tunnel orientation, 'val_fe' Fexc adjustment factor for excavation, 'val_fs' Fss adjustment factor for stress strain.</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>F0 adjustment factor (<Text style={{ fontWeight: '800' }}>F0</Text>)</Text>
                    <Text>F0 is adjustment factor for the orientation of tunnel axis with regard to main set of discontinuities. Input two values: 'strike_orientation' orientation of strike to tunnel axis ('dwd' or drive with dip, 'dad' or drive against dip, 'parallel', 'irrespective'); and 'dip_angle' dip angle (dwd, dad, parallel: 45-90 or 20-45, irrespective: 0-20).</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Fexcavation adjustment factor (<Text style={{ fontWeight: '800' }}>Fexc</Text>)</Text>
                    <Text>Adjustment factor for RMR considering excavation method (Tunneling Bore Method/TBM or Drill and Blast/D+B). Input one value: 'rmrb' RMR basic (before adjustment).</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>"Índice de Comportamiento Elástico" (<Text style={{ fontWeight: '800' }}>ICE</Text>)</Text>
                    <Text>"Índice de Comportamiento Elástico" (ICE) as proposed by Bieniawski and Celada (2011). Input five values: 'rmrb' RMR basic (before adjustment), 'ucs' uniaxial compressive strength of intact rock (in MPa), 'k0' ratio of the horizontal to vertical virgin stress, 'H' tunnel depth (in meter), and 'F' shape coefficient (circular tunnel d = 6 m then F 1.3 ; circular tunnel d = 10 m then F 1.0 ; coventional tunnel 14 m wide then F 0.75 ; caverns 25 m wide x 60 m high then F 0.55).</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Fstress-strain adjustment factor (<Text style={{ fontWeight: '800' }}>Fss</Text>)</Text>
                    <Text>Adjustment factor of stress-strain based on "Índice de Comportamiento Elástico" (ICE) value. Input one value: 'ICE' value.</Text>
                    <Text style={{backgroundColor:'darkgray',paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RMRb adjustment (<Text style={{ fontWeight: '800' }}>RMRbAdj</Text>)</Text>
                    <Text>Adjustment of RMRb with F0 value. Input two values: 'rmrb' original RMRb value, 'f0' F0 value.</Text>
                    
                    
                    
                    
                    
                    <Divider />
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