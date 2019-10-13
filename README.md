# Calendar Demo Application
This calendar allows you to schedule reminders for the following three cities - Quito, Bogota and New York

### Mandatory Features (ALL DONE)

- Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also,
include a city. - DONE
- Display reminders on the calendar view in the correct time order. - DONE
- Allow the user to select color when creating a reminder and display it appropriately. - DONE
- Ability to edit reminders – including changing text, city, day, time and color. - DONE
- Add a weather service call from a free API such as ​ Open Weather Map​ , and get the
weather forecast (ex. Rain) for the date of the calendar reminder based on the city. - DONE
- Unit test the functionality: ​ Ability to add a new "reminder" (max 30 chars) for a user
entered day and time. Also, include a city. - DONE

### Bonus 

- None

## ADD REMINDER

- Click on + button on your right OR click directly on any day on the calendar, a modal should open with a form of reminder info.
- Reminder name should not allow more than 30 chars
- Click on the Icon next to the reminder name and choose a color for your reminder 
- City has to be selected from a dropdown (Quito, Bogota or New York)
- Notice the reminder can't be created until Name, City, Color are selected.

## CORRECT ORDER

- Reminders are added to the calendar in the correct order automatically

## COLOR

- Next to the reminder name in the modal, there should be an icon that let the user selects a color

## EDIT REMINDER

- Click on any reminder on the calendar and the modal should open with all the information of the reminder
- Edit any information you want to edit and click on the EDIT REMINDER button

## WEATHER SERVICE

- After a city has been chosen, text info about the weather should show at the bottom of the modal

## UNIT TEST

File: `calendar-app/my-calendar-app/src/components/reminder-modal/index.test.js`

- TEST 1: Verify the Reminder is been created succesfully
- TEST 2: Verify the Reminder have less than 30 chars

## SCRIPTS

- `yarn start` to start the application
- `yarn test` to run unit tests

### Tools and Libraries used

- "@date-io/date-fns": "^1.3.11", (used for calendar date handler)
- "@material-ui/core": "^4.5.0", (Material UI Components)
- "@material-ui/icons": "^4.4.3", (Material UI Icons)
- "@material-ui/pickers": "^3.2.6", (Material UI Pickers)
- "axios": "^0.19.0", (Fetch handler library used for weather service)
- "babel-jest": "^24.9.0", (babel jest, for jest testing)
- "date-fns": "^2.0.0-beta.5", (used for calendar date handler)
- "enzyme": "^3.10.0", (used for Unit test)
- "enzyme-adapter-react-16": "^1.15.1", (configuration for enzyme)
- "jest": "^24.9.0", (used for Unit testing)
- "lodash": "^4.17.15", (isEmpty function used)
- "moment": "2.21.0", (usefull for calendar date)
- "react": "^16.10.2", (React)
- "react-big-calendar": "0.18.0", (Calendar)
- "react-color": "^2.17.3", (Color picker)
- "react-dom": "^16.10.2", (React DOM)
- "styled-components": "^4.4.0", (styled components)
- "uuid": "^3.3.3" (generating unique ui for each reminder)
