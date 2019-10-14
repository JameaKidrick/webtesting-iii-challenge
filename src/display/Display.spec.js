import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

// TEST #4: USED SNAPSHOT TO CHECK DISPLAY RENDER
test('Display renders correctly', () => {
  expect(render (<Display />)).toMatchSnapshot();
});

// TEST #5: DISPLAYS DEFAULT
test('Display is being shown', () => {
  const { getByText } = render(<Display />);
  getByText(/unlocked/i);
  getByText(/open/i);
})

// TEST #6: DISPLAYS CLOSED WHEN CLOSED = TRUE
test('Display closed when closed', () => {
  const { getByText } = render(<Display closed={true} />)

  getByText(/closed/i)
});

// TEST #7: DISPLAYS OPEN WHEN CLOSED = FALSE
test('Display open when closed is false', () => {
  const { getByText } = render(<Display closed={false} />)

  getByText(/open/i)
});

// TEST #8: DISPLAYS LOCKED WHEN LOCKED = TRUE
test('Display locked when locked', () => {
  const { getByText } = render(<Display locked={true} />)

  getByText(/locked/i)
});

// TEST #9: DISPLAYS UNLOCKED WHEN LOCKED = FALSE
test('Display unlocked when locked is false', () => {
  const { getByText } = render(<Display locked={false} />)

  getByText(/unlocked/i)
});


/*************************** HOW TO FIND/TEST CLASS??? ******************************/

// TEST #10: LOCKEDCLASS CONTAINS RED-LED CLASS WHEN LOCKED
test('LockedClass has red-led when locked', () => {
  const { getByText } = render(<Display locked={true} />);
  const lock = getByText(/locked/i)
  expect(lock).toHaveClass('red-led')
});

// TEST #11: LOCKEDCLASS CONTAINS GREEN-LED CLASS WHEN UNLOCKED
test('LockedClass has green-led when unlocked', () => {
  const { getByText } = render(<Display locked={false} />);
  const unlock = getByText(/unlocked/i)
  expect(unlock).toHaveClass('green-led')
});

// TEST #12: CLOSEDCLASS CONTAINS RED-LED CLASS WHEN CLOSED
test('ClosedClass has red-led when closed', () => {
  const { getByText } = render(<Display closed={true} />);
  const close = getByText(/closed/i)
  expect(close).toHaveClass('red-led')
});

// TEST #13: CLOSEDCLASS CONTAINS GREEN-LED CLASS WHEN OPEN
test('ClosedClass has green-led when open', () => {
  const { getByText } = render(<Display closed={false} />);
  const open = getByText(/open/i)
  expect(open).toHaveClass('green-led')
});
