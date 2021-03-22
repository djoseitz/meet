// import React, { Component } from 'react';
// import NumberOfEvents from './NumberOfEvents';
// import CitySearch from './CitySearch';
// import EventList from './EventList';
// // import DataVisualization from './DataVisualization';
// import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
// import { WarningAlert } from './Alert';
// import EventGenre from './EventGenre';
// import { getEvents } from './api';
// import './styles/App.css';
// import './styles/nprogress.css';
// import {
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// class App extends Component {
//   state = {
//     events: [],
//     locations: [],
//     currentLocation: 'all',
//     numberOfEvents: '10',
//     warningText: '',
//     isLoading: false,
//   };

//   async componentDidMount() {
//     this.mounted = true;
//     if (!navigator.onLine) {
//       this.setState({
//         warningText:
//           'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
//       });
//     } else {
//       this.setState({ warningText: '' });
//     }

//     if (this.mounted) {
//       this.updateEvents();
//     }
//   }

//   componentWillUnmount() {
//     this.mounted = false;
//   }

//   // Filters events based on location and number given in user input
//   updateEvents = (location, eventCount) => {
//     this.setState({ isLoading: true }); // Start loading gif

//     const { currentLocation, numberOfEvents } = this.state;
//     // If user selects a location from input
//     if (location) {
//       getEvents().then((response) => {
//         // Applies new filter for location
//         const locationEvents =
//           location === 'all'
//             ? response.events
//             : response.events.filter((event) => event.location === location);
//         const events = locationEvents.slice(0, numberOfEvents);
//         return this.setState({
//           events: events,
//           currentLocation: location,
//           locations: response.locations,
//           isLoading: false,
//         });
//       });
//     } else {
//       getEvents().then((response) => {
//         // Persists location filter from state
//         const locationEvents =
//           currentLocation === 'all'
//             ? response.events
//             : response.events.filter(
//                 (event) => event.location === currentLocation
//               );
//         const numEvents = eventCount || numberOfEvents;
//         const events = locationEvents.slice(0, numEvents);
//         if (this.mounted) {
//           return this.setState({
//             events: events,
//             numberOfEvents: eventCount,
//             locations: response.locations,
//             isLoading: false,
//           });
//         }
//       });
//     }
//   };


//   getData = () => {
//     const {locations, events} = this.state;
//     const data = locations.map((location)=>{
//       const number = events.filter((event) => event.location === location).length
//       const city = location.split(' ').shift()
//       return {city, number};
//     })
//     return data;
//   };

//   // Renders loading spinner while live data is being rendered
//   renderData = () => {
//     const { events, locations, isLoading } = this.state;

//     return isLoading ? (
//       <LoadingSpinner />
//     ) : (
//       <div>
//         {/* <DataVisualization events={events} locations={locations} /> */}
//         <EventList events={events} />
//       </div>
//     );
//   };

//   render() {
//     const { numberOfEvents, locations, warningText } = this.state;
//     const data = this.getData().sort((a, b) => (a.city > b.city ? 1 : -1));

//     return (
//       <div className='App'>
//         <h1>MeetApp</h1>
//         <CitySearch locations={locations} updateEvents={this.updateEvents} />
//         <NumberOfEvents
//           numberOfEvents={numberOfEvents}
//           updateEvents={this.updateEvents}
//         />
//         <WarningAlert text={warningText} />
// <div className="data-vis-wrapper">
//           <ResponsiveContainer height={400}>
//             <EventGenre events={this.state.events} />
//           </ResponsiveContainer>
//           <ResponsiveContainer height={400}>
//             <ScatterChart
//               margin={{
//                 top: 20,
//                 right: 20,
//                 bottom: 20,
//                 left: 20,
//               }}
//             >
//               <CartesianGrid />
//               <XAxis type="category" dataKey="city" name="City" />
//               <YAxis
//                 type="number"
//                 dataKey="number"
//                 name="Number of events"
//                 allowDecimals={false}
//               />
//               <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//               <Scatter data={data} fill="#8884d8" />
//             </ScatterChart>
//           </ResponsiveContainer>
//         </div>
//         {this.renderData()}
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './styles/App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents } from './api';
import './styles/nprogress.css';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    currentLocation: 'all',
    locations: [],
    numberOfEvents: 32,
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((response) => {
        const locationEvents =
          location === 'all'
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
        });
      });
    } else {
      getEvents().then((response) => {
        const locationEvents =
          currentLocation === 'all'
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const events = locationEvents.slice(0, eventCount);
        return this.setState({
          events: events,
          numberOfEvents: eventCount,
          locations: response.locations,
        });
      });
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((response) => {
      if (this.mounted) {
        this.setState({
          events: response.events,
          locations: response.locations,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const data = this.getData().sort((a, b) => (a.city > b.city ? 1 : -1));

    return (
      <div className="App">
        <CitySearch
          updateEvents={this.updateEvents}
          locations={this.state.locations}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <div className="data-vis-wrapper">
          <ResponsiveContainer height={400}>
            <EventGenre events={this.state.events} />
          </ResponsiveContainer>
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="City" />
              <YAxis
                type="number"
                dataKey="number"
                name="Number of events"
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
