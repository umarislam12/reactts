// @ts-nocheck
import React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function CustomForm() {
  const [province, setProvince] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
  };
  return (
    <div>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-firstname">First name</InputLabel>
          <Input id="my-firstname" aria-describedby="my-helper-text" />
          <FormHelperText id="my-firstname">
            Please enter first name
          </FormHelperText>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-lastname">Last name</InputLabel>
          <Input id="my-lastname" aria-describedby="my-helper-text" />
          <FormHelperText id="my-lastname">
            Please enter last name
          </FormHelperText>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-cnic">CNIC</InputLabel>
          <Input
            placeholder="XXXXX-XXXXXXX-X"
            id="my-cnic"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-cnict">Please CNIC</FormHelperText>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="date-time">CNIC Issued Date and Time</InputLabel>
          <Input type="date/time" id="date" aria-describedby="my-helper-text" />
          <FormHelperText id="my-cnic">Please CNIC</FormHelperText>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="date-time">Phone number</InputLabel>
          <Input id="phone" aria-describedby="my-helper-text" />
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
            value={province}
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
          <Input type="email" id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-dob">Choose your date of birth</InputLabel>
          <Input type="date" id="my-dob" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </FormGroup>
   
    </div>
  );
}
