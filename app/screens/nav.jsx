import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Nav() {
  return (
    <View style={styles.container}>
      <Text>100</Text>
      <Text>200</Text>
      <Text>300</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'wheat',
    justifyContent: 'space-evenly',
    height: 50,
    width: '100%',
  },
});
