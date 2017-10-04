/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import Menu from '@containers/menu/MenuView';
import LoginForm from '@containers/menu/Demos/LoginContainer';
import SignUpForm from '@containers/menu/Demos/SignUpContainer';
import SocialCardsDemo from '@containers/menu/Demos/SocialCardsContainer';
import WeatherAppDemo from '@containers/menu/Demos/WeatherApp';
import GithubIssuesDemo from '@containers/menu/Demos/GithubIssues';
import HackerHuntDemo from '@containers/menu/Demos/HackerHunt';
import CalculatorDemo from '@containers/menu/Demos/Calculator';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'menu'}>
    <Scene
      hideNavBar
      key={'menuLanding'}
      component={Menu}
      type={ActionConst.RESET}
      analyticsDesc={'Menu'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'login'}
      title={'Login'}
      clone
      component={LoginForm}
      analyticsDesc={'Login'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'signUp'}
      title={'Sign Up'}
      clone
      component={SignUpForm}
      analyticsDesc={'Sign Up'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'socialCardsDemo'}
      title={'Social Cards Demo'}
      clone
      component={SocialCardsDemo}
      analyticsDesc={'Social Cards Demo'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'weatherAppDemo'}
      title={'Weather App Demo'}
      clone
      component={WeatherAppDemo}
      analyticsDesc={'Weather App Demo'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'hackerHuntDemo'}
      title={'Hacker Hunt Demo'}
      clone
      component={HackerHuntDemo}
      analyticsDesc={'Hacker Hunt Demo'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'calculatorDemo'}
      title={'Calculator Demo'}
      clone
      component={CalculatorDemo}
      analyticsDesc={'Calculator Demo'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'githubIssuesDemo'}
      title={'Github Issues Demo'}
      clone
      component={GithubIssuesDemo}
      analyticsDesc={'Github Issues Demo'}
    />
  </Scene>
);

export default scenes;
