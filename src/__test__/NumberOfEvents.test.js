import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberofEvents';

describe('NumberofEvent component', () => {
  let NumberofEventsWrapper;
  beforeAll(() => {
    NumberofEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render NumberOfEvent input form', () => {
    expect(NumberofEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    expect(NumberofEventsWrapper.find('.numberInput')).toHaveLength(1);
  });

  test('submitting entered number changes numberOfEvents state', () => {
    const eventObject = { target: { value: 32 } };
    NumberofEventsWrapper.find('.numberInput')
      .at(0)
      .simulate('change', eventObject);
    expect(NumberofEventsWrapper.state('numberOfEvents')).toBe(32);
  });
});