import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls'

// <Controls
//   locked={locked}
//   closed={closed}
//   toggleLocked={this.toggleLocked}
//   toggleClosed={this.toggleClosed}
// />

// TEST #14: USED SNAPSHOT TO CHECK Controls RENDER
test('Controls renders correctly', () => {
  expect(render (<Controls />)).toMatchSnapshot();
});

// TEST #15: BUTTON TOGGLES CLOSED/OPEN STATES
// test('', () => {
//   const toggleClosedbtn = jest.fn();
//   const { getByText } = render(
//     <Controls toggleClosed={toggleClosedbtn} closed={true} />
//   );
//   fireEvent.click(getByText(/open gate/i));
//   expect(toggleClosedbtn).toHaveBeenCalled();
//   getByText(/close gate/i);
// })



// TEST #16: BUTTON TOGGLES LOCKED/UNLOCKED STATES


// TEST #17: CLOSE GATE BUTTON CHANGES TO OPEN GATE AFTER CLICK


// TEST #18: OPEN GATE BUTTON CHANGES TO CLOSE GATE AFTER CLICK


// TEST #19: LOCK GATE BUTTON CHANGES TO UNLOCK GATE AFTER CLICK


// TEST #20: UNLOCK GATE BUTTON CHANGES TO LOCK GATE AFTER CLICK


// TEST #21: CLOSED TOGGLE BUTTON IS DISABLED IF THE GATE IS LOCKED


// TEST #22: LOCKED TOGGLE BUTTON IS DISABLE IF THE GATE IS OPEN