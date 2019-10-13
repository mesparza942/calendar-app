import React from "react";
import { shallow } from "enzyme";
import App from "../../App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("add new reminder successfully", () => {
  const component = shallow(<App />);

  component
    .find("ReminderModal")
    .props()
    .updateReminders({
      title: "test",
      city: "Quito",
      startYear: 2019,
      startMonth: 10,
      startDay: 10,
      startTime: 10,
      endYear: 2019,
      endMonth: 10,
      endDay: 10,
      endTime: 11,
      color: "#fff"
    });

  expect(
    component
      .find("Calendar")
      .at(0)
      .props().events.length
  ).toBeTruthy();
});

test("reminder name should have less than 30 chars", () => {
  const component = shallow(<App />);
  component
    .find("ReminderModal")
    .props()
    .updateReminders({
      title: "test",
      city: "Quito",
      startYear: 2019,
      startMonth: 10,
      startDay: 10,
      startTime: 10,
      endYear: 2019,
      endMonth: 10,
      endDay: 10,
      endTime: 11,
      color: "#fff"
    });
  expect(
    component
      .find("Calendar")
      .at(0)
      .props().events[0].title.length < 30
  ).toBeTruthy();
});
