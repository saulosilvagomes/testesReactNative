import {StyleSheet} from 'react-native'

//width e height ocupam 100% da tela
//bottom 0 ocupa a tela ate embaixo
//margintop afasta um pouco do titulo
//borderTopXXRadius serve para arredondar as bordas
const styles = StyleSheet.create({
   formContext: {
      flex:1,
      backgroundColor:"#ffffff",
      alignItems:"center",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingTop:30,
    },
    form: {
        width:"100%",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    formInput:{
        width:"90%",
        height:40,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:10,
    },
    textButtonCalc:{
        fontSize:20,
        color:"#ffffff"
    },
    buttonCalc:{
        width:"90%",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:15,
        },
    errorMessage:{
        fontSize:12,
        fontWeight:"bold",
        color:"red",
        paddingLeft:20,
    },
    exibeImc:{
        width:"100%",
        height:"50%",
    },
    itemsListaImc:{
        fontSize:22,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    listaImc:{
        marginTop: 20,
    },
    textItemsListaImc:{
        color:"red",
        fontSize:14,
    },

  });
   
  export default styles
