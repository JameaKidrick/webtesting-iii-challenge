import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard'

// TEST #1: USED SNAPSHOT TO CHECK Dashboard RENDER
test('Dashboard renders correctly', () => {
  expect(render (<Dashboard />)).toMatchSnapshot();
});

// TEST #2: CHECKS DISPLAY ARE BEING SHOWN
test('Display is being shown on dashboard', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/open/i);
})

// TEST #3: CHECKS CONTROLS IS BEING SHOWN
test('Controls are being shown on dashboard', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/lock gate/i);
  getByText(/close gate/i);
})