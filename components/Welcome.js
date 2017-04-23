// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import { common } from '../utils/common';
//
// import Calculator from './Calculator';
//
//
// export default class Welcome extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//     headerLeft: null,
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//       <Text style={styles.body}>KittyCalculator</Text>
//       <Text style={styles.body}>
//         Let's do some math
//       </Text>
//       <Button
//         title='See Calculator'
//         onPress={() => navigate('Calculator')}
//       />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: common.teal,
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   body: {
//     color: common.white,
//     fontSize: 20,
//     marginRight: 10,
//     marginLeft: 10,
//     marginTop: 10,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
// });

import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { common } from '../utils/common';
import Calculator from './Calculator';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
  }

  static navigationOptions = {
    title: 'Mathtastic',
  };
  render() {
    let button = null;

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} onPress={this._touchAnywhere}>
        <Image style={styles.cat} source={require('./catface.png')} />
        <Calculator />
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