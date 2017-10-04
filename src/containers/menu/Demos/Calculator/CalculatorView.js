import React, { Component } from 'react'
// React Native components
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/'
import { Spacer} from '@ui/';

/* Styles ==================================================================== */

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column',

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row3: {
    flex: 3,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col3: {
    flex: 3,
  },
  bgBlack: {
    backgroundColor: 'black',
  },
  bgGrey: {
    backgroundColor: 'grey',
  },
  padNumber: {
    margin: 5,
    color: 'whitesmoke',
    fontSize: 30,
  },
  padCalc: {
    margin: 5,
    color: 'white',
    fontSize: 30,
  },
  screen: {
    color: 'grey',
    fontSize: 30,
  }

});

/* Component ================================================================= */
class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
        firstParam: '',
        secondParam: '',
        operation: '',
        result: '',
    }
    this.onPress = this.onPress.bind(this)
  }
  onPress(key) {
    if (key === 'CE') {
      this.setState({
        firstParam: '',
        operation: '',
        secondParam: '',
        result: '',
      })
      return
    }
    if (key === '=') {
      this.setState({
        firstParam: this.state.result,
        operation: '',
        secondParam: '',
        result: '',
      })
      return
    }
    if (this.state.operation === '') {
      if (typeof key === 'number' || key === '.') {
        this.setState((prevState, props) => {
          return {
            firstParam: prevState.firstParam + key,
          }
        })
      } else {
        this.setState({
          operation: key,
        })
      }
    } else {
      console.log('secondParam')
      this.setState((prevState, props) => {
        return {
          secondParam: prevState.secondParam + key,
          result: prevState.operation === '+'
            ? Number(prevState.firstParam) + Number(prevState.secondParam + key)
            : prevState.operation === '-'
              ? Number(prevState.firstParam) - Number(prevState.secondParam + key)
              : prevState.operation === '÷'
                ? Number(prevState.firstParam) / Number(prevState.secondParam + key)
                : Number(prevState.firstParam) * Number(prevState.secondParam + key)
        }
      })
    }
  }

  render() {
    const { operation, result, firstParam, secondParam } = this.state
    const padNumber = (items) => items.map((item, ix) => (
        <TouchableOpacity key={ix} onPress={() => this.onPress(item)}>
          <Text style={[styles.padNumber]}>{item}</Text>
        </TouchableOpacity>
    ))
    const padCalc = (items) => items.map((item, ix) => (
        <TouchableOpacity key={ix} onPress={() => this.onPress(item)}>
          <Text style={[styles.padCalc]}>{item}</Text>
        </TouchableOpacity>
    ))

    return (
      <View style={[styles.container]}>
        <View style={[styles.column]}>
          <View style={[styles.row]}>
            <Text style={[styles.screen]}>{firstParam} {operation} {secondParam}</Text>
          </View>
          <View style={[styles.row]}>
            <Text style={[styles.screen]}>{result}</Text>
          </View>
        </View>
        <View style={[styles.row, styles.row3, styles.bgBlack]}>
          <View style={[styles.column]}>
            {padNumber([7, 4, 1, '.'])}
          </View>
          <View style={[styles.column]}>
            {padNumber([8, 5, 2, 0])}
          </View>
          <View style={[styles.column]}>
            {padNumber([9, 6, 3, '='])}
          </View>
          <View style={[styles.column, styles.bgGrey]}>
            <View style={[styles.column]}>
              {padCalc(['CE', '÷', '×', '-', '+'])}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

/* Export Component ========================================================== */
export default Calculator;
