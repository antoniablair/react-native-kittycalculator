import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { common } from '../utils/common';

import ButtonRow from './ButtonRow';
import Total from './Total';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  render() {
    let button = null;
    return (
      <View style={styles.container}>
        <Total />
        <ButtonRow />
        <ButtonRow />
        <ButtonRow />
        <ButtonRow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: common.teal,
    width: '100%',
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
});