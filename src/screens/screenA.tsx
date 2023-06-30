import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

export function ScreenA() {
  return (
    <View style={styles.container}>
      <IconMaterialCom size={100} name='leaf' color='#3DA6A6' style={styles.logo}>
      </IconMaterialCom>
      <Text style={styles.title}>
        iPlant
      </Text>
      <Text style={styles.description}>
        O iPlant é um app no qual você pode acessar informações sobre qualquer espécie de planta, comprar, vender ou até mesmo ver
        qual floricultura está mais próxima de você! Além disso, você ainda pode doar para ONG's que visam combater o desmatamento.
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#215959",
        justifyContent: 'center'
    },
    title: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 30,
    },
    logo: {
      alignSelf: 'center',
      marginBottom: 20
    },
    description: {
      textAlign: 'justify',
      color: 'white',
      margin: 40,
      fontSize: 20
    }
}) 