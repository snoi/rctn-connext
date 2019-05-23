import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress (url) {
    WebBrowser.openBrowserAsync(url)
  }

  render () {
    return (
      <View style={styles.body}>
        <TouchableOpacity onPress={() => this.handlePress('https://google.com')}>
          <View style={styles.mainView}>
            <Text style={styles.mainFont}>Button 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => this.handlePress('https://github.com')}>
          <View style={styles.secondaryView}>
              <Text style={styles.mainFont}>Button 1</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
   
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainView: {
    flex: 1,
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    maxHeight: 100,
    maxWidth: 100
  },
  secondaryView: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: 'red',
    height: 100,
    width: 100,
    maxHeight: 100,
    maxWidth: 100
  },
  mainFont: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
})