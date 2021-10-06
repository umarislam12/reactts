// @ts-nocheck
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
export default function CustomForm() {
  const handleChange = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
  };
  const handleCnicChange = (newValue: Date | null) => {
    setCnicValue(newValue);
    console.log(cnicvalue);
  };
  const handleDobChange = (newValue: Date | null) => {
    setDobValue(newValue);
    console.log(dobvalue);
  };
  const [province, setProvince] = React.useState("");
  // const [cnicvalue, setCnicValue] = React.useState<Date | null>(
  //   new Date('2014-08-18T21:11:54'),
  // );

  // const [dobvalue, setDobValue] = React.useState<Date | null>(
  //   new Date('2015-08-18T21:11:54'),
  // );
  const Form = {
    firstName: "",
    lastName: "",
    cnic: "",
    cnicvalue: "",
    phone: "",
    province: "",
    email: "",
    dobvalue: "",
  };
  const [data, setData] = useState(Form);
  console.log(data);

  //   const onSelectFile = e => {
  //     if (!e.target.files || e.target.files.length === 0) {
  //         setSelectedFile(undefined)
  //         return
  //     }

  //     // I've kept this example simple by using the first image instead of multiple
  //     setSelectedFile(e.target.files[0])
  // }

  // const [firstName, setFirstName] = React.useState("")
  // const [lastName, setLastName] = React.useState("")
  // const [cnic, setCnic] = React.useState("")
  // const [phone, setPhone] = React.useState("")
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-firstname">First name</InputLabel>
              <Input
                value={Form.firstName}
                name="firstName"
                id="my-firstname"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-firstname">
                Please enter first name
              </FormHelperText>
            </FormControl>
          </FormGroup>
          {/* <div>
            <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={preview} /> }
        </div> */}
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-lastname">Last name</InputLabel>
              <Input
                value={Form.lastName}
                name="lastName"
                id="my-lastname"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-lastname">
                Please enter last name
              </FormHelperText>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-cnic">CNIC</InputLabel>
              <Input
                value={Form.cnic}
                name="cnic"
                placeholder="XXXXX-XXXXXXX-X"
                id="my-cnic"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-cnict">Please CNIC</FormHelperText>
            </FormControl>
          </FormGroup>

          {/* <FormGroup>
        <FormControl>
          <InputLabel htmlFor="date-time">CNIC Issued Date and Time</InputLabel>
          <Input type="date/time" id="date" aria-describedby="my-helper-text" />
          <FormHelperText id="my-cnic">Please CNIC</FormHelperText>
        </FormControl>
      </FormGroup> */}
          <DateTimePicker
            name="cnic"
            label="CNIC issued Date and Time"
            value={Form.cnicvalue}
            onChange={handleCnicChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="date-time">Phone number</InputLabel>
              <Input
                name="phone"
                value={Form.phone}
                id="phone"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="phone">Add phone number</FormHelperText>
            </FormControl>
          </FormGroup>
          <br />
          <br />
          <FormGroup>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Please Select your province
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="province"
                value={Form.province}
                label="province"
                onChange={handleChange}
              >
                <MenuItem value={10}>Punjab</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                type="email"
                name="email"
                value={Form.email}
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <DesktopDatePicker
              label="Date of birth"
              inputFormat="MM/dd/yyyy"
              name="dobvalue"
              value={Form.dobvalue}
              onChange={handleDobChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormGroup>
          <FormGroup>
            <Box sx={{ display: "flex" }}>
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
              >
                <FormLabel component="legend">Favourite Languages</FormLabel>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Java Script"
                />
                <FormControlLabel control={<Checkbox />} label="React JS" />
                <FormControlLabel control={<Checkbox />} label="Node JS" />
                <FormControlLabel control={<Checkbox />} label="Python" />
                <FormControlLabel control={<Checkbox />} label="C, C++" />
              </FormControl>
            </Box>
          </FormGroup>
          <FormGroup>
            <TextField
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="filled"
            />
          </FormGroup>
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
