import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>입당성가</Text>
      <Text>봉헌성가</Text>
      <Text>성체성가</Text>
      <Text>파견성가</Text>
      <Text>기타</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'wheat',
    // width: '100%',
  },
});
