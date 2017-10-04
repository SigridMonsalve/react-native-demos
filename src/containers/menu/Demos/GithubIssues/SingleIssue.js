import React, { Component } from 'react'
// React Native components
import {
  View,
  Image,
  Text,
  ScrollView,
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
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'row',

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  col3: {
    flex: 3,
  },
  tag: {
    borderColor: '#455',
    borderWidth: 1,
    margin: 1,
    paddingHorizontal: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  greenText: {
    color: '#279f43',
    fontWeight: 'bold',
  },
});

/* Component ================================================================= */
const SingleIssue = ({ issue }) => {
  const age = (Date.now() - Date.parse(issue.created_at)) / 1000 / 60 / 60
  const ageString = age >= 48
  ? `${Math.ceil(age / 24)} days ago`
  : age === 24
    ? `${Math.ceil(age / 24)} day ago`
    : age > 1
      ? `${Math.ceil(age)} hours ago`
      : age === 1
        ? `An hour ago`
        : age > 0.016
          ? `${Math.ceil(age * 60)} minutes ago`
            : `A minute ago`
  return (
  <View style={[styles.container]} key={issue.id}>
    <View style={[styles.column]}>
      <View style={[styles.row]}>
        <Icon color='#279f43' name='info-outline' />
        <Text style={[styles.greenText]}>{issue.state}</Text>
      </View>
      <View style={[styles.row]}>
        <Icon color='#455' name='textsms' />
        <Text>{issue.comments}</Text>
      </View>
    </View>
    <View style={[styles.column, styles.col3]}>
      <Text
        style={[styles.title]}
        /*onPress={() => Linking.openUrl(issue.link)}*/>
        {issue.title}
      </Text>
      <Text>#{issue.number} opened {ageString} by {issue.user.login}</Text>
    </View>
  </View>
)}

/* Export Component ========================================================== */
export default SingleIssue;
