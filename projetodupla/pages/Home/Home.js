import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import style from './styles';

function Home() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.texto}>The Ruin</Text>
        <Image style={style.icons} source={require('../../images/dm.png')} />
      </View>

      <Image style={style.imagem} source={require('../../images/c.png')} />

      <Text style={style.text1}>
        Venda de arte digital Produtos 100% originais com todas as permissões e
        direitos autorais! NFT’s de raridade alta e qualidade. Ganhe guerras de
        montrinhos com a nossa vasta coleção de “cartas”.
      </Text>
      <TouchableOpacity>
        <Text style={style.next}>Next</Text>
      </TouchableOpacity>

      <Text style={style.text2}>
        Produtos direcionados ao público adepto a esquemas de pirâmide e
        batalhas de criaturas virtuais que só vão te destruir!
      </Text>
    </View>
  );
}

export default Home;
