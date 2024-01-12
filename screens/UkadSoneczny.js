import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import TopNav_2 from '../components/TopNav_2';
import BottomNav from '../components/BottomNav';


const { width, height } = Dimensions.get('window');

const UkadSloneczny = () => {

  return (
    <>
      <WebView
        style={styles.container}
        source={{ uri: 'https://y8zp6y.csb.app/' }}
      />
      <TopNav_2 />
      <BottomNav />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    top: '5%',
  }
});

export default UkadSloneczny;
