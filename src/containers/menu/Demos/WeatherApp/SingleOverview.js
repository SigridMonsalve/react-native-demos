import React, { Component } from 'react'
// React Native components
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/'

/* Styles ==================================================================== */

const styles = StyleSheet.create({
  container: {
    margin: 10,
    maxHeight: 200,
    overflow: 'hidden',
  },
  overviewCard: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    minWidth: 150,
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  current: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  temps: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: 'grey',
    fontSize: 16,
  },
  darkText: {
    color: '#353535',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

/* Component ================================================================= */
const SingleOverview = ({day, iconID, maxTemp, minTemp, current}) => (
  <View style={[styles.container]}>
    <View style={[styles.overviewCard, current ? styles.current : null]}>
      <Text style={[styles.text]}>
        {new Date(day).getDay() === 0
          ? 'LUNES'
          : new Date(day).getDay() === 1
            ? 'MARTES'
            : new Date(day).getDay() === 2
              ? 'MIÉRCOLES'
              : new Date(day).getDay() === 3
                ? 'JUEVES'
                : new Date(day).getDay() === 4
                  ? 'VIERNES'
                  : new Date(day).getDay() === 5
                    ? 'SÁBADO'
                    : 'DOMINGO'}
      </Text>


        <Image
        source={{uri: `http://openweathermap.org/img/w/${iconID}.png`}}
        style={[styles.image]}/>

      <View style={[styles.temps]}>
        <Text style={[styles.darkText]}> {maxTemp}° </Text>
        <Text style={[styles.text]}>/ {minTemp}° </Text>
      </View>
    </View>
  </View>
)

/* Export Component ========================================================== */
export default SingleOverview;
