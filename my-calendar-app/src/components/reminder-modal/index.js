import React, { useState, useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Divider,
  Input,
  Button
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { GithubPicker } from "react-color";
import isEmpty from "lodash/isEmpty";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import TimePicker from "./timePicker";
import CityInput from "./cityInput";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  field: {
    width: "100%",
    padding: theme.spacing(1)
  },
  disabledInfo: {
    fontSize: "10px",
    color: "#FF0000",
    maxWidth: "250px"
  }
}));

const ReminderModal = ({
  open,
  setOpen,
  updateReminders,
  isEditing,
  setEdit,
  editingReminder,
  setEditingReminder,
  dateClicked
}) => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date(2019, 9, 11));
  const [endDate, setEndDate] = useState(new Date(2019, 9, 11));
  const [reminderName, setReminderName] = useState("");
  const [reminderCity, setReminderCity] = useState("");
  const [startTime, setStartTime] = useState(12);
  const [endTime, setEndTime] = useState(13);
  const [colorPicker, openColorPicker] = useState(false);
  const [color, setColor] = useState("#000");
  const [weather, setWeather] = useState("");

  const clearAll = () => {
    setStartDate(new Date(2019, 9, 11));
    setEndDate(new Date(2019, 9, 11));
    setReminderName("");
    setReminderCity("");
    setStartTime(12);
    setEndTime(13);
    setColor("#000");
  };

  const isButtonDisabled = () =>
    !reminderName || !reminderCity || startDate < endDate || color === "#000";

  useEffect(() => {
    if (dateClicked) {
      setStartDate(dateClicked);
      setEndDate(dateClicked);
    }
  }, [dateClicked]);

  useEffect(() => {
    if (!isEmpty(editingReminder)) {
      setStartDate(
        new Date(
          editingReminder.startYear,
          editingReminder.startMonth,
          editingReminder.startDay
        )
      );
      setEndDate(
        new Date(
          editingReminder.endYear,
          editingReminder.endMonth,
          editingReminder.endDay
        )
      );
      setReminderName(editingReminder.reminderName);
      setReminderCity(editingReminder.reminderCity);
      setStartTime(editingReminder.startTime);
      setEndTime(editingReminder.endTime);
      setColor(editingReminder.color);
    }
  }, [editingReminder]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => {
          setOpen(false);
          clearAll();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" style={{ textAlign: "center" }}>
              Reminder Info
            </h2>
            <Divider />
            <div className={classes.field} style={{ display: "flex" }}>
              <Input
                id="name"
                placeholder="Reminder Name *"
                autoFocus
                inputProps={{ maxLength: 30 }}
                value={reminderName}
                onChange={e => setReminderName(e.target.value)}
              />
              <div>
                <ColorLensIcon
                  style={{ color: color }}
                  onClick={() => openColorPicker(!colorPicker)}
                />
                {colorPicker && (
                  <div style={{ position: "fixed" }}>
                    <GithubPicker
                      onChange={(color, e) => {
                        setColor(color.hex);
                        openColorPicker(false);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={classes.field}>
              <Input
                id="city"
                placeholder="Where ? Select your city: "
                value={reminderCity}
                onChange={() => true}
                disabled
              />
              <CityInput
                city={reminderCity}
                setCity={setReminderCity}
                setWeather={setWeather}
              />
            </div>
            <div className={classes.field}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Start Date"
                    value={startDate}
                    onChange={newDate => setStartDate(newDate)}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </div>
                <div>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline-end"
                    label="End Date"
                    value={endDate}
                    minDate={startDate}
                    onChange={newDate => setEndDate(newDate)}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </div>
              </MuiPickersUtilsProvider>
            </div>
            <div className={classes.field}>
              <div>
                <span>Start Time: </span>
                <TimePicker
                  key="start-time"
                  time={startTime}
                  setTime={setStartTime}
                />
              </div>
              <div>
                <span>End Time: </span>
                <TimePicker
                  key="end-time"
                  time={endTime}
                  setTime={setEndTime}
                />
              </div>
            </div>
            <div className={classes.field}>
              <Button
                disabled={isButtonDisabled()}
                variant="contained"
                color="primary"
                onClick={() => {
                  updateReminders({
                    title: reminderName,
                    city: reminderCity,
                    startYear: startDate.getFullYear(),
                    startMonth: startDate.getMonth(),
                    startDay: startDate.getDate(),
                    startTime: startTime,
                    endYear: endDate.getFullYear(),
                    endMonth: endDate.getMonth(),
                    endDay: endDate.getDate(),
                    endTime: endTime,
                    color
                  });
                  clearAll();
                  if (isEditing) {
                    setEdit(false);
                    setEditingReminder({});
                  }
                }}
              >
                {!isEditing ? "Add" : "Edit"} Reminder
              </Button>
            </div>
            {isButtonDisabled() && (
              <div className={classes.field}>
                <p className={classes.disabledInfo}>
                  Please make sure all fields have valid values and don't forget
                  to choose a color for your reminder
                </p>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ReminderModal;
