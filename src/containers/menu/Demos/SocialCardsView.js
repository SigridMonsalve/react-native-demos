/**
 * SocialCardsView Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

/* Styles ==================================================================== */
const HEIGHT = AppStyles.windowSize.height

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: '#EAEAEA',
  },

  // Main SocialCardsView
  cardContainer: {
    borderRadius: 10,
    backgroundColor: '#FFA003',
    flex: 1,
    margin: 10,

  },
  position: {
    alignSelf: 'flex-start',
    backgroundColor: '#353535',
    margin: 15,
    padding: 10,
  },
  positionText: {
    color: '#EEEEEE',
    fontWeight: 'bold',
  },
  area: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  areaText: {
    alignSelf: 'center',
    fontSize: HEIGHT/10,
    lineHeight: HEIGHT/8,
    color: '#FFFFFF',
  },
  user: {
    backgroundColor: '#FFF',
    padding: 5,
    margin: 15,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 60,
  },
  userText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#FFA003',
    marginRight: 2,
  }
});

/* Component ==================================================================== */
class SocialCardsView extends Component {
  static defaultProps = {
    users: [
      {
        name: 'Sigrid Monsalve',
        position: 'J-DEV',
        area: 'React Native FTW.',
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkWAAAAJDA0MjQ5NmUwLTU5YzAtNDA1Zi05MjU1LTYyMjZmMWZmY2E4Nw.jpg',
      },
      {
        name: 'Trinimar Acevedo',
        position: 'S-DEV',
        area: 'Angular 2 FTW.',
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAY-AAAAJDcyY2FiNzYyLWMyOWEtNDJiMy05MDQ4LWJjYzYyMDQyZjI4NQ.jpg',
      },
      {
        name: 'Victor Suniaga',
        position: 'J-DEV',
        area: 'React FTW.',
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAi0AAAAJGM0OWNhMDM5LWYwZjMtNDk4OS05ZjQyLTg0YTRiMjcwOWEwZA.jpg',
      },
      {
        name: 'Erwin ????',
        position: '?-DEV.',
        area: 'React Native FTW',
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAduAAAAJDU1MmY0OGY2LTQzOWYtNDQzMC1hYWZjLWEwOTZjYzU1OTI4MA.jpg',
      },
    ]
  }

  render = () => {
    const techInfo = ( userIndex ) => {
      const fields = ['position', 'area']
      return fields.map((i, ix) => (
        <View key={ix} style={[styles[i]]}>
          <Text style={[styles[i+'Text']]}>{this.props.users[userIndex][i]}</Text>
        </View>
        )
      )
    };

    const randomUser = Math.floor(Math.random() * (this.props.users.length))

    return (
      <View style={[styles.container]}>
        <View style={[styles.menuContainer]}>
          <View style={[styles.cardContainer]}>

            {techInfo(randomUser)}
            <View style={[styles.user]}>
              <Text style={[styles.userText]}>
                {this.props.users[randomUser].name}
              </Text>
              <Image
                source={{uri: this.props.users[randomUser].img}}
                style={{width: 50, height: 50}}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default SocialCardsView;
