import React, {useState} from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import { Button } from '../components/Button';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
    const [visible, setVisible] = useState(true);
    function handleVisibility(){
        setVisible(!visible);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'} 
                suas plantas de{'\n'}
                forma fácil.
            </Text>
            {
                visible &&
                <Image style={styles.image} source={wateringImg} />
            }
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. {'\n'} 
                Nós cuidamos de lembrar você {'\n'} 
                sempre que precisar.
            </Text>
            
            <Button title=">" onPress={handleVisibility}/>

        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 68,
        color: colors.heading
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image:{
        width: 292,
        height: 284,
    },
});

