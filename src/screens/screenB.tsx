import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function ScreenB() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login
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
      fontSize: 20
    }

}) 