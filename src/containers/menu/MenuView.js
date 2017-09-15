/**
 * Menu Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  whiteText: {
    color: '#FFF',
  },
  title: {
    fontSize: 24,
  }
});

/* Component ==================================================================== */
class Menu extends Component {
  static componentName = 'Menu';

  render = () => (
    <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
      <Text style={[styles.title, styles.whiteText]}> React Native Demos </Text>
      <Spacer size={10} />
      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Social Cards'}
            icon={{ name: 'face' }}
            onPress={Actions.socialCardsDemo}
            backgroundColor={'#EDD400'}
          />
        </View>
      </View>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Weather App'}
            icon={{ name: 'wb-sunny' }}
            onPress={Actions.weatherAppDemo}
            backgroundColor={'#75D4F4'}
          />
        </View>
      </View>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Hacker Hunt'}
            icon={{ name: 'developer-board' }}
            onPress={Actions.hackerHuntDemo}
            backgroundColor={'#FF9E0C'}
          />
        </View>
      </View>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Calculator'}
            icon={{ name: 'dialpad' }}
            onPress={Actions.calculatorDemo}
            backgroundColor={'#F2274F'}
          />
        </View>
      </View>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Github Issues'}
            icon={{ name: 'people' }}
            onPress={Actions.githubIssuesDemo}
            backgroundColor={'#212121'}
          />
        </View>
      </View>

      <Spacer size={15} />

      <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
        - or -
      </Text>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]} />
        <View style={[AppStyles.flex2]}>
          <Button
            small
            title={'Random'}
            onPress={[
              Actions.githubIssuesDemo,
              Actions.socialCardsDemo,
              Actions.weatherAppDemo,
              Actions.hackerHuntDemo,
              Actions.calculatorDemo][Math.floor(Math.random()*5)]}
            raised={false}
            backgroundColor={'rgba(255,255,255,0.2)'}
          />
        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <Spacer size={40} />
    </View>
  )
}

/* Export Component ==================================================================== */
export default Menu;
