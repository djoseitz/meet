import React from 'react';
import { shallow, mount } from 'enzyme';
// import { mockData } from '../mock-data';
import App from '../App';
import EventList from '../EventList';
// import CitySearch from '../CitySearch';
// import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  // test('render CitySearch', () => {
  //   expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  // });
  // test('render NumberOfEvent', () => {
  //   expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  // });
});