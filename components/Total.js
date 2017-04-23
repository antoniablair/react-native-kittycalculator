import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { common } from '../utils/common';

import CalcButton from './CalcButton';

export default class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  render() {
    return (
      <View style={styles.total}>
        <Text style={styles.text}>Total</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  total: {
    flexDirection: 'row',
    backgroundColor: common.darkBlue,
    height: '12%',
    width: '80%',
    marginBottom: '5%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  text: {
    fontSize: 30,
    color: common.white,
    lineHeight: 40,
  }
});