import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display'

// USED SNAPSHOT TO CHECK DISPLAY RENDER
test('Display renders correctly', () => {
  expect(render (<Display />)).toMatchSnapshot();
});

