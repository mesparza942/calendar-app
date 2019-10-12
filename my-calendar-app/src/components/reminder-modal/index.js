import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Divider,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { GithubPicker } from "react-color";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import TimePicker from "./TimePicker";

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
  }
}));

const ReminderModal = ({ open, setOpen, updateReminders }) => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date(2019, 9, 11));
  const [endDate, setEndDate] = useState(new Date(2019, 9, 11));
  const [reminderName, setReminderName] = useState("");
  const [reminderCity, setReminderCity] = useState("");
  const [startTime, setStartTime] = useState(12);
  const [endTime, setEndTime] = useState(1);
  const [colorPicker, openColorPicker] = useState(false);
  const [color, setColor] = useState("#000");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
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
            <p
              id="transition-modal-description"
              style={{ textAlign: "center" }}
            >
              Fill the information below about the reminder
            </p>
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
                placeholder="Where ? (City)"
                value={reminderCity}
                onChange={e => setReminderCity(e.target.value)}
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
                    onChange={newEndDate => setEndDate(newEndDate)}
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
                disabled={!reminderName}
                variant="contained"
                color="primary"
                onClick={() =>
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
                  })
                }
              >
                Add Reminder
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ReminderModal;
