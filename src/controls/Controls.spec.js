import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls'

// USED SNAPSHOT TO CHECK Controls RENDER
test('Controls renders correctly', () => {
  expect(render (<Controls />)).toMatchSnapshot();
});