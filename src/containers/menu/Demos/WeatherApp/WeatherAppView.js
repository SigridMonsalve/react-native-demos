/**
 * WeatherAppView Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/'
import SingleOverview from './SingleOverview'

const API = {
  countryID: 3871336,
  days: 7,
  key:'ffd4de6218eba558dc6b0402c331aa3a'
}
const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?id=${API.countryID}&cnt=${API.days}&APPID=${API.key}`

/* Styles ==================================================================== */
const HEIGHT = AppStyles.windowSize.height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
});

/* Component ==================================================================== */
class WeatherAppView extends Component {
  componentWillMount() {
    console.log('mounting')
    console.log(URL)
    fetch(URL, {
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
    .then((responseJson) => console.log(responseJson))
    .catch((error) => { console.error(error) })
  }

  render() {
    const dummyData = [
      {
        day: 1505865600000,
        id: '01d',
        min: 11,
        max: 23,
      },{
        day: 1505952000000,
        id: '02d',
        min: 12,
        max: 24,
      },{
        day: 1506038400000,
        id: '03d',
        min: 13,
        max: 25,
      },{
        day: 1506124800000,
        id: '04d',
        min: 14,
        max: 26,
      },{
        day: 1506211200000,
        id: '09d',
        min: 15,
        max: 27,
      },{
        day: 1506297600000,
        id: '10d',
        min: 16,
        max: 28,
      },{
        day: 1506384000000,
        id: '11d',
        min: 17,
        max: 29,
      },
    ]

    return (
      <View style={[styles.container]}>
        <ScrollView horizontal bounce>
          {dummyData.map((i, ix ) => (
            <SingleOverview
              key={ix}
              current={ix === 0}
              day={i.day}
              iconID={i.id}
              minTemp={i.min}
              maxTemp={i.max}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default WeatherAppView;
