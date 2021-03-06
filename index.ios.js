import React, { Component } from 'react-native';
import Main from './App/components/Main';

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
