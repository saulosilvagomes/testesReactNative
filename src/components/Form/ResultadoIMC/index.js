//imports padrao
import React from "react";
import {View, Share, Text , TouchableOpacity} from 'react-native';
import styles from "./styles";

//definindo a funcao Title
export default function ResultadoIMC(valores){
    //definindo constante para compartilhamento
    const onShare = async () => {
          const result = await Share.share({
            message:
              "Meu IMC é: "+valores.calculaResultado,
          });
    }
    /*  Para criar o botão Share, criamos uma regra com operador ternário que consite em: 
            se valores.calculaResultado não é nulo, apresenta o botão de share
            senão, apresenta uma view vazia
    */
    return(
        <View style={styles.resultImc}>
            <View style={styles.boxShared}>
                <Text style={styles.informacao}>{valores.mensagemResultado}</Text>
                <Text style={styles.nroImc}>{valores.calculaResultado}</Text>
                    <TouchableOpacity 
                        style={styles.botaoShared}
                        onPress={onShare}
                    >
                        <Text style={styles.textShared}>Share</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}