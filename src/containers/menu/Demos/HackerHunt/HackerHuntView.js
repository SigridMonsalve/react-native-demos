/**
 * HackerHuntView Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/'

// Components
import { Button } from '@ui/';
import SinglePost from './SinglePost'

/* Styles ==================================================================== */
const HEIGHT = AppStyles.windowSize.height
const TOPICS = [
  {
    name: 'Development',
    icon: 'healing',
  },{
    name: 'System',
    icon: 'local-library',
  },{
    name: 'Tools',
    icon: 'build',
  },{
    name: 'Data science',
    icon: 'memory',
  },{
    name: 'Blockchain',
    icon: 'link',
  },{
    name: 'Mobile',
    icon: 'developer-mode',
  },{
    name: 'Awesome lists',
    icon: 'stars',
  },{
    name: 'Social',
    icon: 'people',
  },{
    name: 'Visual',
    icon: 'format-paint',
  },{
    name: 'Open source',
    icon: 'free-breakfast',
  },{
    name: 'All topics',
    icon: 'select-all',
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 1,
    height: 45,
  }
});

/* Component ==================================================================== */
class HackerHuntView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentWillMount() {
  fetch('https://hackerhunt.co/api/daily/0', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   firstParam: 'yourValue',
      //   secondParam: 'yourOtherValue',
      // })
    })
    .then((response) => response.json())
    .then((responseJson) => this.setState({ data: responseJson.data}))
    .catch((error) => { console.error(error) })
  }
  render() {
    return (
      <View style={[styles.container]}>
        <ScrollView horizontal bounce>
        {TOPICS.map((i, ix) => (
          <View style={[styles.button]} key={ix}>
            <Button
              title={i.name}
              icon={{name: i.icon}}
              backgroundColor={'#455'}
            />
          </View>)
        )}
        </ScrollView>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <SinglePost key={item.key} post={item} />}/>
      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default HackerHuntView;
