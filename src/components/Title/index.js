//imports padrao
import React from "react";
import {View, Text} from 'react-native';
import styles from "./styles";

//definindo a funcao Title
export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculadora de IMC</Text>
        </View>
    );
}
