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
import { Loading } from '@components/general/Loading'
import { Button } from '@ui/'
import SingleIssue from './SingleIssue'

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 1,
    height: 45,
  },
  blueText: {
    color: '#004ba8',
    margin: 10,
  }
});

/* Component ==================================================================== */
class GithubIssuesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      needsFetch: true,
    }
  }
  componentWillMount() {
  fetch('https://api.github.com/repos/facebook/react-native/issues', {
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
    .then((responseJson) => this.setState({ data: responseJson, needsFetch: false }))
    .catch((error) => { console.error(error) })
  }
  render() {
    const { data, needsFetch } = this.state
    return (
      <View style={[styles.container]}>
        {!needsFetch && <Text style={[styles.blueText]}>{data[0].repository_url.slice(29)}</Text>}
        {!needsFetch
          ? <FlatList data={data} renderItem={({item}) => <SingleIssue key={item.key} issue={item} />}/>
          : <View style={[styles.container]}><Text>Loading</Text></View>
        }
      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default GithubIssuesView;
