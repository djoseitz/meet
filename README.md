** USER STORIES **

1. As a **user**, I should be able to **show or hide the details of an event** so that **I can choose which events to view more closely**.

- **Scenario 1: An event element is collapsed by default**
  - **Given:** event details are collapsed
  - **When:** the user opens the app
  - **Then:** the user can expand the event details
- **Scenario 2: User can expand an event to see its details**
  - **Given:** event details are collapsed
  - **When:** the user selects the event
  - **Then:** the event details will expand
- **Scenario 3: User can collapse an event to hide its details**
  - **Given:** event details are expanded
  - **When:** the user clicks on the collapse button
  - **Then:** the event details will collapse

2. As a **user**, I should be able to **specify the number of events I see** so that **I can choose how many events to display**.

- **Scenario 1: When user hasn’t specified a number, 32 is the default number**
  - **Given:** 32 is the default number of events to display
  - **When:** the user selects a city
  - **Then:** the user will see 32 event listings by default for that city
- **Scenario 2: User can change the number of events they want to see**
  - **Given:** the user is able to change the number of events they see
  - **When:** the user selects a city
  - **Then:** the user can specify the number of events to display

3. As a **user**, I should be able to **use the app while offline** so that **I don't have to be online to view events**.

- **Scenario 1: Show cached data when there’s no internet connection**
  - **Given:** the app does not have access to an internet connection
  - **When:** the user opens the app
  - **Then:** the app displays events using cached data
- **Scenario 2: Show error when user changes the settings (city, time range)**
  - **Given:** the app does not have access to an internet connection
  - **When:** the user changes city or time range
  - **Then:** the app displays an error stating that an internet connection is required to make these changes

4. As a **user**, I should be able to **view a chart with the number of upcoming events in a city** so that **I can see at a glance how active a city is**.

- **Scenario 1: Show a chart with the number of upcoming events in each city**
  - **Given:** the app can generate a chart with the number of upcoming events in a city
  - **When:** the user clicks on the event visualization page for their selected city
  - **Then:** the app displays a chart showing the number of upcoming events in the selected city
