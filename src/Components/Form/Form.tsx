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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

// const useStyle=makeStyles(theme=>({
//   formControl:100
// }))

export default function CustomForm() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    cnic: "",
    cnicvalue: "",
    phone: "",
    provinceId: "punjab",
    game: "",
    email: "",
    dobvalue: "",
  });
  console.log(inputs);
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack
        
          margin={5}
          marginRight={5}
          direction="column"
          sx={{ bgcolor: "white", fontSize: 12 }}
        >
          <Stack direction="row">
            <Stack spacing={3} direction="column" width="50%">
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="my-firstname">First name</InputLabel>
                  <Input
                    sx={{ color: "black" }}
                    onChange={handleInputChange}
                    value={inputs.firstName}
                    name="firstName"
                    id="my-firstname"
                    aria-describedby="my-helper-text"
                  />
                  <FormHelperText id="my-firstname">
                    Please enter first name
                  </FormHelperText>
                </FormControl>
              </FormGroup>

              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="my-lastname">Last name</InputLabel>
                  <Input
                    onChange={handleInputChange}
                    value={inputs.lastName}
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
                    onChange={handleInputChange}
                    value={inputs.cnic}
                    name="cnic"
                    placeholder="XXXXX-XXXXXXX-X"
                    id="my-cnic"
                    aria-describedby="my-helper-text"
                  />
                  <FormHelperText id="my-cnict">
                    Please enter CNIC
                  </FormHelperText>
                </FormControl>
              </FormGroup>

              <DateTimePicker
                name="cnic"
                label="CNIC issued Date and Time"
                value={inputs.cnicvalue}
                onChange={handleInputChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
            <Stack spacing={3} direction="column" width="50%">
              <div>
                <Box 
                  sx={{
                    width: 300,
                    height: 300,
                    margin: 5,
                    border: '1px solid green',
                    bgcolor: "none",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                ><Button >Upload</Button></Box>
                {/* <input type='file' onChange={onSelectFile} />
                {selectedFile &&  <img src={preview} /> } */}
              </div>
            </Stack>
          </Stack>
          <br />
          <Stack direction="row" spacing={1} width="100%">
            <Box sx={{ minWidth: 610 }}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="date-time">Phone number</InputLabel>
                  <Input
                    name="phone"
                    value={inputs.phone}
                    id="phone"
                    aria-describedby="my-helper-text"
                  />
                  <FormHelperText id="phone">Add phone number</FormHelperText>
                </FormControl>
              </FormGroup>
            </Box>
            <br />
            <Box sx={{ minWidth: 610 }}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input
                    type="email"
                    name="email"
                    value={inputs.inputs}
                    id="my-input"
                    aria-describedby="my-helper-text"
                  />
                  <FormHelperText id="my-helper-text">
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
              </FormGroup>
            </Box>
          </Stack>
          <br />
          <br />
          <Stack direction="row" spacing={1} width="100%">
            <Box sx={{ minWidth: 610 }}>
              <FormGroup>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Please Select your province
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="province"
                    value={inputs.province}
                    label="province"
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"Punjab"}>Punjab</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </Box>
            <Box sx={{ minWidth: 550 }}>
              <FormGroup>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Please Select Game
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="province"
                    value={inputs.game}
                    label="game"
                    onChange={handleInputChange}
                  >
                    <MenuItem value={10}>GTA V</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </Box>
            <Box sx={{ minWidth: 30 }}>
              <Button>Select</Button>
            </Box>
          </Stack>
          <br />
          <FormGroup>
            <DesktopDatePicker
              label="Date of birth"
              inputFormat="MM/dd/yyyy"
              name="dobvalue"
              value={inputs.dobvalue}
              onChange={handleInputChange}
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
          <Stack direction="row" spacing={1} width="100%">
            <Box sx={{ minWidth: 610 }}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="date-time">Password</InputLabel>
                  <Input
                    name="password"
                    value={inputs.password}
                    id="phone"
                    aria-describedby="my-helper-text"
                  />
                  <FormHelperText id="password">Enter password</FormHelperText>
                </FormControl>
              </FormGroup>
            </Box>
            <Box sx={{ minWidth: 610 }}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="confirmpassword">
                    Confirm password
                  </InputLabel>
                  <Input
                    name="confirmpassword"
                    onChange={handleInputChange}
                    value={inputs.confirmpassword}
                    id="confirmpassword"
                    aria-describedby="my-helper-text"
                  />
                  <FormHelperText id="password">
                    Confirm password
                  </FormHelperText>
                </FormControl>
              </FormGroup>
            </Box>
          </Stack>

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
