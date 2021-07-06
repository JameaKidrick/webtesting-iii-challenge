import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Controls from './Controls'

// TEST #14: USED SNAPSHOT TO CHECK Controls RENDER
test('Controls renders correctly', () => {
  expect(render (<Controls />)).toMatchSnapshot();
});

// TEST #15: BUTTON TOGGLES CLOSED/OPEN STATES
test('Toggle closed and open', () => {
  const toggleClosedbtn = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleClosedbtn} closed={true} locked={false} />
  );
  fireEvent.click(getByText(/open gate/i));
  expect(toggleClosedbtn).toHaveBeenCalled();
  
});

// TEST #16: BUTTON TOGGLES LOCKED/UNLOCKED STATES
test('Toggle locked and unlocked', () => {
  const toggleLockedbtn = jest.fn();
  const { getByText } = render(
    <Controls toggleLocked={toggleLockedbtn} locked={true} closed={true} />
  );
  fireEvent.click(getByText(/lock gate/i));
  expect(toggleLockedbtn).toHaveBeenCalled();
});

// TEST #17: CLOSE GATE BUTTON CHANGES STATUS TO CLOSED AFTER CLICK
test('Closes gate', async () => {
  const toggleClosedbtn = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleClosedbtn} closed={true} locked={false} />
  );
  const button = getByText(/open gate/i);
  fireEvent.click(button);
  expect(toggleClosedbtn).toHaveBeenCalled();
  await wait (() => expect(getByText(/open/i)));
});

// TEST #18: OPEN GATE BUTTON CHANGES STATUS TO OPEN AFTER CLICK
test('Opens gate', async () => {
  const toggleClosedbtn = jest.fn();
  const { queryByText } = render(
    <Controls toggleClosed={toggleClosedbtn} closed={false} locked={false} />
  );
  const button = queryByText(/close gate/i);
  fireEvent.click(button);
  expect(toggleClosedbtn).toHaveBeenCalled();
  await wait (() => expect(queryByText(/closed/i)));
});

// TEST #19: LOCK GATE BUTTON CHANGES STATUS TO LOCK AFTER CLICK
test('Locks gate', async () => {
  const toggleLockedbtn = jest.fn();
  const { queryByText } = render(
    <Controls toggleLocked={toggleLockedbtn} closed={true} locked={false} />
  );
  const button = queryByText(/lock gate/i);
  fireEvent.click(button);
  expect(toggleLockedbtn).toHaveBeenCalled();
  await wait (() => expect(queryByText(/lock/i)));
});

// TEST #20: UNLOCK GATE BUTTON CHANGES STATUS TO UNLOCK AFTER CLICK
test('Unlocks gate', async () => {
  const toggleLockedbtn = jest.fn();
  const { queryByText } = render(
    <Controls toggleLocked={toggleLockedbtn} closed={true} locked={true} />
  );
  const button = queryByText(/unlock gate/i);
  fireEvent.click(button);
  expect(toggleLockedbtn).toHaveBeenCalled();
  await wait (() => expect(queryByText(/unlocked/i)));
});

// TEST #21: CLOSED TOGGLE BUTTON IS DISABLED IF THE GATE IS LOCKED
test('Closed button disabled', () => {
  const { queryByText } = render(
    <Controls closed={true} locked={true} />
  );
  // const closedGate = queryByText(/open gate/i);
  expect(queryByText(/open gate/i).getAttribute('disabled')).not.toBeNull()
})

// TEST #22: LOCKED TOGGLE BUTTON IS DISABLE IF THE GATE IS OPEN
test('Locked button disabled', () => {
  const { queryByText } = render(
    <Controls closed={false} locked={false} />
  );
  queryByText(/lock gate/i).getAttribute('disabled')
})