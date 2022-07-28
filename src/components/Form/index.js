//imports padrao
import React, {useState} from "react";
import {
    Dismiss, 
    FlatList, 
    Keyboard, 
    Pressable, 
    TouchableOpacity, 
    Text, 
    TextInput, 
    View, 
    Vibration } from 'react-native';

import ResultadoIMC from "./ResultadoIMC";
import styles from "./styles";

//Form terá a definição de formulários
export default function Form(){
    //definindo constantes para cálculo do IMC e fornecimento de mensagem
    const[altura, setAltura] = useState(null);
    const[peso, setPeso] = useState(null);
    const[msg, setMsg] = useState("Preencha a altura e o peso");
    const[imc, setImc] = useState(null);
    const[textButton,setTextButton] = useState("Calcular");
    const[msgErro,setmsgErro] = useState(null);
    const[imcList,setImcList] = useState([]);

    function calculaIMC(){
        //formatando para substituir virgulas por ponto
        let alturaFormatada = altura.replace(",",".");
        let pesoFormatado = peso.replace(",",".");
        //toFixed declara quantas casas decimais a resposta terá
        let totalImc =((pesoFormatado/(alturaFormatada*alturaFormatada)).toFixed(2));
        //setando um array com o valor calculado do imc, e com id = hora atual em milissegundos
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc:totalImc } ] );
        setImc(totalImc);
    }

    //verifica se altura e peso não estão vazios
    function validaIMCValues(){
        console.log(imcList);
            if(altura != null && peso != null){
                setAltura(null); //limpa o valor atual
                setPeso(null); //limpa o valor atual
                calculaIMC();
                setMsg("IMC: ");
                setTextButton("Novo Calculo");
                setmsgErro(null);
            }else{
                if(imc == null){
                    setmsgErro("*Campo Obrigatório*");
                    Vibration.vibrate(1000);
                }
                setImc(null);
                setTextButton("Calcular");
                setMsg("Preencha a altura e o peso");
            }
    }

    return(
        <View style={styles.formContext}>

            {imc == null ? 

        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{msgErro}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex.: 1.84"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{msgErro}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex.: 64.3"
                    keyboardType="numeric"   
                />
                
                <TouchableOpacity
                style={styles.buttonCalc}
                    onPress={() => validaIMCValues()}
                
                ><Text style={styles.textButtonCalc}>{textButton}</Text>
                
                </TouchableOpacity>
            </Pressable>

            :
            <View style={styles.exibeImc}>
                <ResultadoIMC mensagemResultado={msg} calculaResultado={imc}/>
                <TouchableOpacity
                style={styles.buttonCalc}
                    onPress={() => validaIMCValues()}
                
                ><Text style={styles.textButtonCalc}>{textButton}</Text>
                
                </TouchableOpacity>
            </View>
            }

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={styles.listaImc}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return(    
                        <Text style={styles.itemsListaImc}>                  
                            <Text style={styles.textItemsListaImc}>IMC = </Text> 
                            {item.imc}  
                        </Text>               
                    )
                 } }
                 keyExtractor={(item) => item.id}
            />
        </View>
    );
}