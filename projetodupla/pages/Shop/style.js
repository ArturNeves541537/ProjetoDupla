import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    text1: {
      fontSize: 18,
      width: 150,
      height: 300, 
      position: 'absolute',
      left: 250,
      top: 225,
      textAlign: 'center',
      color: '#333'
    },

    text2: {
      fontSize: 18,
      width: 400,
      height: 300, 
      position: 'absolute',
      top: 730,
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#333',
      margin: 0,
      fontFamily:'Josefin Sans',
    },
  
    header:{
      justifyContent: 'space-around',
      fontSize: 90,
      backgroundColor: '#fff'
    },
  
    container: {
        flex: 1, 
        backgroundColor: '#EBEBEB',        
    },

    imagem:{
            width: 160,
            height: 160,
            left: 20,
            top: 71,
            borderRadius: 10,        
    },
    imagem2:{
            width: 160,
            height: 160,
            left: 231,
            top: -90,
            borderRadius: 10,        
    },

    imagem3:{
            width: 160,
            height: 160,
            left: 20,
            top: -10,
            borderRadius: 10,        
    },

    imagem4:{
            width: 160,
            height: 160,
            left: 231,
            top: -169,
            borderRadius: 10,        
    },
    
    texto: {
      fontSize: 50, 
      color: '#333',
      textAlign: 'center',
    },

    icons:{
      
        width: 90,
        height: 90 
    },
    
    next: {
      fontSize: 24,
      left: 105,
      top: 140,
    }
    
});

export default style; 
