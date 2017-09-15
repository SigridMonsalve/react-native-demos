/**
 * Menu Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import MenuRender from './MenuView';

// Menud User Menu
const authMenu = [
  { title: 'Social Cards Demo', onPress: () => { Actions.socialCards(); } },
  { title: 'Hacker Hunt Demo', onPress: () => { Actions.hackerHunt(); } },
  { title: 'Github Issues Demo', onPress: () => { Actions.githubIssues(); } },
  { title: 'Weather App Demo', onPress: () => { Actions.weatherApp(); } },
  { title: 'Calculator Demo', onPress: () => { Actions.calculator(); } },
];

// Unmenud User Menu
const unauthMenu = [
  { title: 'Login', onPress: () => { Actions.login(); } },
  { title: 'Sign Up', onPress: () => { Actions.signUp(); } },
];

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
  unauthMenu,
  authMenu,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  logout: UserActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuRender);
