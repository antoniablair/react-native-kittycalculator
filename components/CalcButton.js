import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { common } from '../utils/common';

export default class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  render() {
    return (
      <View style={styles.button}>
        <View style={styles.row}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: common.button,
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    lineHeight: 40,
    textAlign: 'center',
    alignItems: 'center',
  }
});