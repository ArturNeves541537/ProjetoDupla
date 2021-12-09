import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import style from './style';

function Shop() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.texto}>The Ruin</Text>
      </View>
      <Text style={{fontSize: 50, textAlign: 'center'}}>Shop</Text>

      <TouchableOpacity>
        <Image style={style.imagem} source={require('../../images/c.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={style.imagem2} source={require('../../images/g.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={style.imagem3} source={require('../../images/s.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={style.imagem4} source={require('../../images/w.png')} />
      </TouchableOpacity>

      <Text style={style.text2}>
        Direitos da aplicação reservados ao Grupo KDRF;
      </Text>
    </View>
  );
}

export default Shop;
