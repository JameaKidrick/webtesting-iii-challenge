import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard'

// USED SNAPSHOT TO CHECK Dashboard RENDER
test('Dashboard renders correctly', () => {
  expect(render (<Dashboard />)).toMatchSnapshot();
});

// CHECKS CONTROLS ARE BEING SHOWN
test('Controls are being shown on dashboard', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/locked/i);
})

// CHECKS DISPLAY IS BEING SHOWN
test('Controls are being shown on dashboard', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/lock gate/i);
  getByText(/close gate/i);
})