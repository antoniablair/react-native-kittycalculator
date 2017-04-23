import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { common } from '../utils/common';

import CalcButton from './CalcButton';

export default class ButtonRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  render() {
    return (
      <View style={styles.row}>
        <CalcButton/>
        <CalcButton/>
        <CalcButton/>
        <CalcButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: common.darkBlue,
    height: '14%',
    width: '80%',
    marginBottom: '5%',
  },
});