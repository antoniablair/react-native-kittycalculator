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
        <Text>+</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: common.button,
  },
});