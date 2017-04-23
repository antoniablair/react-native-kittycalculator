import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { common } from '../utils/common';

import CalcButton from './CalcButton';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  render() {
    let button = null;
    return (
      <View style={styles.container}>
      <CalcButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: common.teal,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  cat: {
    marginTop: '10%',
    width: '50%',
    height: '25%',
  },
  calculatorButton: {
    width: '5%',
    height: '5%',
  },
});