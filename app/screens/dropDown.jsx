import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DropDown() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>100</Text>
      <Text style={styles.text}>200</Text>
      <Text style={styles.text}>300</Text>
      <Text style={styles.text}>400</Text>
      <Text style={styles.text}>500</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    width: 100,
  },
  text: {
    marginVertical: 10,
  },
});
