/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MenuView from '@containers/menu/MenuView';

it('MenuView renders correctly', () => {
  const tree = renderer.create(
    <MenuView />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
