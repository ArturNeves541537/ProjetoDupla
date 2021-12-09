import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    text1: {
      fontSize: 18,
      width: 150,
      height: 300, 
      position: 'absolute',
      left: 250,
      top: 225,
      textAlign: 'center',
      color: '#333',
      fontFamily: 'Josefin Sans'
    },

    text2: {
      fontSize: 18,
      width: 400,
      height: 300, 
      position: 'absolute',
      top: 605,
      textAlign: 'center',
      color: '#333',
      fontFamily: 'Josefin Sans'
    },
  
    header:{
      justifyContent: 'space-between',
      fontSize: 90,
      backgroundColor: '#fff',
     
    },
  
    container: {
        flex: 1, 
        backgroundColor: '#EBEBEB',        
    },

    imagem:{
            width: 240,
            height: 300,
            left: 10,
            top: 140,
            borderRadius: 10,        
    },
    texto: {
      fontSize: 50, 
      color: '#333'
    },

    icons:{
      
        width: 40,
        height: 40 
    },
    
    next: {
      fontSize: 24,
      left: 105,
      top: 140,
    }
    
});

export default style; 
  