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
                    <Text style={{backgroundColor:'cyan', color: isDarkMode? Colors.darker: Colors.darker, paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Rock Mass Rating 89 (<Text style={{ fontWeight: '800' }}>RMR89</Text>)</Text>
                    <Text>Calculate Rock Mass Rating (RMR) 89 as proposed by Bieniawski (1989) from five parameters above: 'r1' strength rating, 'r2' Rock Quality Designation (RQD) rating, 'r3' space of discontinuity rating, 'r4' condition of discontinuity rating, and 'r5' groundwater rating.</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Strength of intact rock (<Text style={{ fontWeight: '800' }}>R1</Text>)</Text>
                    <Text>Calculate Parameter R1 (Strength of intact rock material rating). Input two values: selected index (idx) either 'pls' for point loads strength or 'ucs' for uniaxial compressive strength, and the 'strength' value itself.</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Drill core RQD rating (<Text style={{ fontWeight: '800' }}>R2</Text>)</Text>
                    <Text>Calculate Parameter R2 (drill core RQD rating). Input one value: drillcoreRQD drill core quality or rock quality designation (in percent).</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Space of discontinuity rating (<Text style={{ fontWeight: '800' }}>R3</Text>)</Text>
                    <Text>Calculate Parameter R3 (space of discontinuity rating). Input one value: 'spacing'/value of rock spacing (in m, float/decimal).</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Classification of discontinuity condition (<Text style={{ fontWeight: '800' }}>R4</Text>)</Text>
                    <Text>Calculate Parameter R4 (classification of discontinuity condition). Input four values: 'dl' discontinuity length (in m), 'sep' separation (in mm), 'rough' roughness ('very_rough', 'rough', 'slightly_rough', 'smooth', 'slickensided'), 'gouge' infilling ('None', 'hl&lt;5',hl&gt;5, 'sl&lt;5', 'sl&gt;5'), 'weather' weathering ('unweathered'; 'slightly_weathered'; 'moderately_weathered'; 'highly_weathered'; 'decomposed').</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Groundwater condition (<Text style={{ fontWeight: '800' }}>R5</Text>)</Text>
                    <Text>Calculate Parameter R5 (groundwater condition). Input three values: 'inflow' inflow per 10 m tunnel length (i/m) (None or number), 'wpress' joint water pressure / major principal, 'cond' general conditions ('dry', 'damp', 'wet', 'dripping', or 'flowing').</Text>
                    <Divider />
                    <Text style={{backgroundColor:'cyan', color: isDarkMode? Colors.darker: Colors.darker, paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Rock Mass Rating basic (<Text style={{ fontWeight: '800' }}>RMRb</Text>)</Text>
                    <Text>Calculate Rock Mass Rating basic (RMRb) as proposed in Geocontrol (2012) from four parameters: 'r1' strength rating, 'r2+3' RQD and spacing of joints, 'r4' condition of discontinuity rating, and 'r5' groundwater rating.</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RMR(1) UCS of intact rock (<Text style={{ fontWeight: '800' }}>RMR(1)</Text>)</Text>
                    <Text>Calculate Parameter R1 (Uniaxial Compressive Strength of intact rock). Input one value: 'strength' of intact rock material (UCS of intact rock (in kg/cm2, for consistency it will be converted automatically by this app to MPa)).</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RQD and spacing of joints (<Text style={{ fontWeight: '800' }}>R(2+3)</Text>)</Text>
                    <Text>Calculate Parameter R(2+3) (RQD and spacing of joints). Input one value: number of 'joints' per meter.</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Classification of discontinuity condition (<Text style={{ fontWeight: '800' }}>R4</Text>)</Text>
                    <Text>Calculate Parameter R4 (classification of discontinuity condition). Input four values: 'dl' discontinuity length (in m), 'sep' separation (in mm), 'rough' roughness ('very_rough', 'rough', 'slightly_rough', 'smooth', 'slickensided'), 'gouge' infilling ('None', 'hl&lt;5',hl&gt;5, 'sl&lt;5', 'sl&gt;5'), 'weather' weathering ('unweathered'; 'slightly_weathered'; 'moderately_weathered'; 'highly_weathered'; 'decomposed').</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Groundwater condition (<Text style={{ fontWeight: '800' }}>R5</Text>)</Text>
                    <Text>Calculate Parameter R5 (groundwater condition). Input three values: 'inflow' inflow per 10 m tunnel length (i/m) (None or number), 'wpress' joint water pressure / major principal, 'cond' general conditions ('dry', 'damp', 'wet', 'dripping', or 'flowing').</Text>
                    <Divider />
                    <Text style={{backgroundColor:'cyan', color: isDarkMode? Colors.darker: Colors.darker, paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Rock Mass Rating 14 (<Text style={{ fontWeight: '800' }}>RMR14</Text>)</Text>
                    <Text>RMR14 as proposed by Celada etal (2014) - RMR with three adjusment factors applied. Input three values: 'rmrb_adj' RMRb adjustment factor for tunnel orientation, 'val_fe' Fexc adjustment factor for excavation, 'val_fs' Fss adjustment factor for stress strain.</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>F0 adjustment factor (<Text style={{ fontWeight: '800' }}>F0</Text>)</Text>
                    <Text>F0 is adjustment factor for the orientation of tunnel axis with regard to main set of discontinuities. Input two values: 'strike_orientation' orientation of strike to tunnel axis (if orientation is perpendicular directly input 'dwd' or drive with dip, or 'dad' or drive against dip, or for other orientation type just input 'parallel' or 'irrespective'); and 'dip_angle' dip angle (dwd: 20-45 or 45-90, dad: 20-45 or 45-90, parallel: 45-90 or 20-45, irrespective: 0-20).</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Fexcavation adjustment factor (<Text style={{ fontWeight: '800' }}>Fexc</Text>)</Text>
                    <Text>Adjustment factor for RMR considering excavation method (Tunneling Bore Method/TBM, Drill and Blast/D+B, or New Austria Tunneling Method/NATM). Input two values: 'method' the excavation method used ('tbm' for TBM, 'db' for D+B, or 'natm' for NATM), 'rmrb' RMR basic (before adjustment). In the case you use 'db' or 'natm' no need to input the value of 'rmrb'.</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>"Índice de Comportamiento Elástico" (<Text style={{ fontWeight: '800' }}>ICE</Text>)</Text>
                    <Text>"Índice de Comportamiento Elástico" (ICE) as proposed by Bieniawski and Celada (2011). Input five values: 'rmrb' RMR basic (before adjustment), 'ucs' uniaxial compressive strength of intact rock (in MPa), 'k0' ratio of the horizontal to vertical virgin stress, 'H' tunnel depth (in meter), and 'F' shape coefficient (circular tunnel d = 6 m then F 1.3 ; circular tunnel d = 10 m then F 1.0 ; coventional tunnel 14 m wide then F 0.75 ; caverns 25 m wide x 60 m high then F 0.55).</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Fstress-strain adjustment factor (<Text style={{ fontWeight: '800' }}>Fss</Text>)</Text>
                    <Text>Adjustment factor of stress-strain based on "Índice de Comportamiento Elástico" (ICE) value. Input one value: 'ICE' value.</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RMRb adjustment (<Text style={{ fontWeight: '800' }}>RMRbAdj</Text>)</Text>
                    <Text>Adjustment of RMRb with F0 value. Input two values: 'rmrb' original RMRb value, 'f0' F0 value.</Text>
                    <Divider />
                    <Text style={{backgroundColor:'cyan', color: isDarkMode? Colors.darker: Colors.darker, paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RMR2002 Sen-Bahaeldin (<Text style={{ fontWeight: '800' }}>RMR2002</Text>)</Text>
                    <Text>Calculate RMR based on point loads strength and RMR based on Uniaxial Compressive Strength (UCS) as proposed by Sen-Bahaeldin (2002)</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RMR2002 point loads (<Text style={{ fontWeight: '800' }}>RMRpls</Text>)</Text>
                    <Text>Calculate RMR2002 based on point loads strength. Input five values: 'l' lambda or average joint spacing or average intact length (in m), 'strength' point load strength of intact rock material, 'G' groundwater condition, 'rj' conditions of most unfavorable joints, 'rd' joint orientation.</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>RMR2002 UCS (<Text style={{ fontWeight: '800' }}>RMRucs</Text>)</Text>
                    <Text>Calculate RMR2002 based on UCS strength. Input five values: 'l' lambda or average joint spacing or average intact length (in m), 'strength' UCS strength of intact rock material, 'G' groundwater condition, 'rj' conditions of most unfavorable joints, 'rd' joint orientation.</Text>
                    <Divider style={{ marginTop: 30}} />
                    <Text style={{ backgroundColor: 'brown', color: 'white', fontSize: 16, fontWeight: '800', paddingTop: 15, paddingBottom: 10, textAlign: 'center'}}>ANALYSIS TAB</Text>
                    <Divider />
                    <Text style={{backgroundColor:'pink', color: isDarkMode? Colors.darker: Colors.darker, paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Slope Mass Rating (SMR) Classification (Romana, et.al, 1985, 2015) (<Text style={{ fontWeight: '800' }}>SMR</Text>)</Text>
                    <Text>Calculate Slope Mass Rating (SMR) by calculating Paralellism factor, Probability of discontinuity shear strength, Slope and discontinuity dip, and Excavation method as proposed by Romana et.al (1985, 2015)</Text>
                    <Divider />
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Parallelism factor (<Text style={{ fontWeight: '800' }}>F1</Text>)</Text>
                    <Text>Correction factor F1 which depends on parallelism (denoted by "A") between discontinuity dip direction (alpha j) and slope dip (alpha s). Input three values: 'ftype' type of slope failure (P = planar, T = Toppling), 'dis_dd' discontinuity dip direction, 'slope_d' slope dip.</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Probability of discontinuity shear strength (<Text style={{ fontWeight: '800' }}>F2</Text>)</Text>
                    <Text>Correction factor F2 related to the probability of discontinuity shear strength (B) (Romana, 1993), depends on the discontinuity dip. In case of failure type Planar: B = beta j ; in case of Toppling: B = 1.0. Input two values: 'ftype' type of slope failure (P = planar, T = Toppling), 'dis_dip' discontinuity dip angle (&lt;=90).</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Slope & discontinuity dip (<Text style={{ fontWeight: '800' }}>F3</Text>)</Text>
                    <Text>Correction factor F3 indicates relationship (C) between slope (beta s) discontinuity dips (beta j) that is probability of the discontinuity to outcrop on the slope face (Romana, 1993) for planar failure (Romana, 2015). Input three values: 'ftype' type of slope failure (P = planar, T = Toppling),'slope' slope angle,'ddips' discontinuity dips. C = slope - ddips should be lower than 90 degree, C = slope + ddips max is 180.</Text>
                    <Text style={{backgroundColor:'darkgray', color: isDarkMode? Colors.darker: Colors.darker,paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15}}>Excavation method (<Text style={{ fontWeight: '800' }}>F4</Text>)</Text>
                    <Text>Correction factor F4 considering the excavation method. Input one value: 'method' excavation methods option ("pre": Presplitting; "sb": Smooth blasting; "ns": Natural slope; "bm": Blasting or mechanical).</Text>
                    <Divider />
                    <Text style={{backgroundColor:'yellow', color: isDarkMode? Colors.darker: Colors.darker , paddingHorizontal: 8, paddingVertical: 4, marginVertical: 15, fontWeight:600}}>References:</Text>
                    <Text>[1] Bieniawski, Z.T. 1989. Engineering rock mass classifications. New York: Wiley.</Text>
                    <Text>[2] B. Celada, I. Tardáguila, P. Varona, A. Rodríguez, and Z. T. Bieniawski, “Innovating Tunnel Design by an Improved Experience-based RMR System.,” Proc. World Tunn. Congr. 2014 – Tunnels a better Life, vol. 3, pp. 1–9, 2014.</Text>
                    <Text>[3] Y. Tong, Y. Yue, Z. Huang, L. Zhu, Z. Li, and W. Zhang, “Modified RMR Rock Mass Classification System for Preliminary Selection of Potential Sites of High-Level Radioactive Waste Disposal Engineering,” Sustain., vol. 14, no. 23, pp. 1–17, 2022, doi: 10.3390/su142315596.</Text>
                    <Text>[4] Romana, M., Tomás, R., Serón, J.B. (2015). Slope Mass Rating (SMR) geomechanics classification: thirty years review. ISRM Congress 2015 Proceedings - International Symposium on Rock Mechanics, Quebec Canada, May 10 to 13 2015. ISBN: 978-1-926872-25-4, 10 pp.</Text>
                    <Text>[5] Z. Şen and B. H. Bahaaeldin, “Modified rock mass classification system by continuous rating,” Eng. Geol., vol. 67, no. 3–4, pp. 269–280, 2003, doi: 10.1016/S0013-7952(02)00185-0.</Text>
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