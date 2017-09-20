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
    color: '#31e981',
    fontWeight: 'bold',
  }

});

/* Component ================================================================= */
const SinglePost = ({ post }) => {
  const age = (Date.now() - post.date * 1000) / 1000 / 60 / 60
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
  <View style={[styles.container]} key={post.id}>
    <View style={[styles.column]}>
      <View style={[styles.row]}>
        <Icon color='#31e981' name='arrow-upward' />
        <Text style={[styles.greenText]}>{post.votes}</Text>
      </View>
      <View style={[styles.row]}>
        <Icon name='textsms' />
        <Text>{post.comments}</Text>
      </View>
    </View>
    <View style={[styles.column, styles.col3]}>
      <Text style={[styles.title]} onPress={() => Linking.openUrl(post.link)}>{post.title}</Text>
      <Text>{post.desc}</Text>
      <Text>{ageString} by {post.author}</Text>
      <ScrollView horizontal style={{paddingVertical: 5}}>
        {post.tags.split(',').map((i, ix) => <Text key={ix} style={[styles.tag]}>{i}</Text>)}
      </ScrollView>
    </View>
  </View>
)}

/* Export Component ========================================================== */
export default SinglePost;
