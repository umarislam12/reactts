// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
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
import FormValidate from "./formValidate";
import axios from "axios";
// const useStyle=makeStyles(theme=>({
//   formControl:100
// }))
import { IMaskInput } from "react-imask";

export default function CustomForm() {
  const games = ["GTAV", "Mario", "FarCry", "Sims"];
  const [game, setGame] = useState([]);
  const [error, setError] = useState({});
  const province = [
    "Punjab",
    "Sindh",
    "KPK",
    "Balochistan",
    "Gilgit baltistan",
  ];
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    cnicDate: "",
    image: [],
    cnicvalue: "",
    phone: "",
    province: "punjab",
    game: "",
    email: "",
    dobvalue: "",
    password: "",
    confirmPassword: "",
    gender: "female",
    javascript: false,
    reactjs: false,
    nodejs: false,
    python: false,
    cplusplus: false,
    description: "",
  });
  const imageEl = useRef(inputs.image);
  console.log(imageEl.current);
  // var file = imageEl.current.image.files[0];
  //   var reader = new FileReader();
  //   var url = reader.readAsDataURL(file);

  //    reader.onloadend = function (e) {
  //       setInputs({
  //         image: [reader.result]
  //       })
  //     }.bind(this);
  //   console.log(url)
  // const { javascript, reactjs, nodejs, python, cplusplus } = inputs.favLang;
  // {"javascript":false,"reactjs":false,"nodejs":false,"python":false,"cplusplus":false},

  useEffect(async () => {
    const result = await axios("https://api.publicapis.org/entries");

    setGame(result.data.entries);

    console.log(result.data.entries);
  }, []);
  // console.log(inputs);
  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // const value=target.type==="checkbox"?target.checked:target.type==="file"?....:target.value;

    if (target.type === "file") {
      console.log("We in image");
      // Assuming only image
      // if(imageEl.current.image && imageEl.current.image[0]){
      var file = imageEl.current.files[0];
      var reader = new FileReader();
      var url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        setInputs({
          ...inputs,
          image: [reader.result],
        });
      };
    }
    console.log(inputs);
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));

    console.log(inputs);
    // setInputs((inputs) => ({
    //   ...inputs,
    //   [event.target.name]: event.target.value,
    // }));
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let foralert=false;
    for(let i in inputs){
      if(inputs[i]===""){

        foralert=true;
      }
    }
    if(foralert===true){
      alert("please fill form first")
    }
    setError(FormValidate(inputs));
   

    console.log(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack
            margin={5}
            marginRight={5}
            direction="column"
            sx={{ bgcolor: "294F6D", fontSize: 12 }}
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
                    {/* {error.firstName && ( */}
                    <span
                      style={{
                        display: error.firstName ? "block" : "none",
                        color: "red",
                      }}
                    >
                      {error.firstName}
                    </span>
                    {/* )} */}
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
                    {error.lastName && (
                      <p style={{ color: "red" }}>{error.lastName}</p>
                    )}
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="my-cnic">CNIC</InputLabel>
                    <Input
                      onChange={handleInputChange}
                      value={inputs.cnicvalue}
                      name="cnicvalue"
                      placeholder="XXXXX-XXXXXXX-X"
                      id="my-cnic"
                      aria-describedby="my-helper-text"
                    />
                    {error.cnicvalue && (
                      <span style={{ color: "red" }} id="my-cnic">
                        Please enter CNIC
                      </span>
                    )}
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="cnicDate">
                      CNIC date and time
                    </InputLabel>
                    <Input
                      type="datetime-local"
                      name="cnicDate"
                      id="cnicDate"
                      value={inputs.cnicDate}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </FormGroup>
                {/* <DateTimePicker
                  name="cnicDate"
                  label="CNIC issued Date and Time"
                  value={inputs.cnicDate}
                  onChange={handleInputChange}
                  renderInput={(params) => <TextField {...params} />}
                /> */}
              </Stack>
              <Stack spacing={3} direction="column" width="50%">
                <div>
                  <Box
                    sx={{
                      width: 300,
                      height: 300,
                      margin: 5,
                      border: "1px solid green",
                      bgcolor: "none",
                      textAlign: "center",
                      position: "relative",
                    
                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                        cursor: "pointer",
                      },
                    }}
                  >
                    <input
                      ref={imageEl}
                      type="file"
                      style={{
                        width: 300,
                        height: 300,
                        position: "absolute",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                      accept="image/*"
                      name="image"
                      onChange={handleInputChange}
                      placeholder="Image"
                      multiple={false}
                    />
                    <img
                      src={inputs.image}
                      style={{ width: 300, height: 300 }}
                    />
                  </Box>
                  {/* <input type='file' onChange={onSelectFile} />
                {selectedFile &&  <img src={preview} /> } */}
                </div>
              </Stack>
            </Stack>
            <br />
            <Stack direction="row" spacing={1} width="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  p: 1,
                  m: 1,
                  flexWrap: 'wrap',
                }}
              >
                <Box sx={{ minWidth: 550,margin: '10px' }}>
                  <FormGroup>
                    <FormControl>
                      <InputLabel htmlFor="date-time">Phone number</InputLabel>
                      <Input
                        name="phone"
                        value={inputs.phone}
                        id="phone"
                        onChange={handleInputChange}
                        aria-describedby="my-helper-text"
                      />
                      <FormHelperText id="phone">
                        Add phone number
                      </FormHelperText>
                    </FormControl>
                  </FormGroup>
                </Box>
                <br />
                <Box sx={{ minWidth: 550, margin: '10px' }}>
                  <FormGroup>
                    <FormControl>
                      <InputLabel htmlFor="my-input">Email address</InputLabel>
                      <Input
                        type="text"
                        name="email"
                        value={inputs.email}
                        id="my-input"
                        onChange={handleInputChange}
                        aria-describedby="my-helper-text"
                      />
                      {error.email && (
                        <span style={{ color: "red" }}>{error.email}</span>
                      )}
                    </FormControl>
                  </FormGroup>
                </Box>
              </Box>
            </Stack>
            <br />
            <br />
            <Stack direction="row" spacing={1} width="100%">
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  p: 1,
                  m: 1,
                  flexWrap: 'wrap',
                }}
              >
              <Box sx={{ minWidth: 550,margin: '10px' }}>
                <FormGroup>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple- -label">
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
                      {province.map((prov) => (
                        <MenuItem value={prov} key={prov}>
                          {prov}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </FormGroup>
              </Box>
              <Box sx={{ minWidth: 490,margin: '10px' }}>
                <FormGroup>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Please Select Game
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="game"
                      value={inputs.game}
                      label="game"
                      onChange={handleInputChange}
                    >
                      {games.map((game) => (
                        <MenuItem value={game} key={game}>
                          {game}
                        </MenuItem>
                      ))}
                    </Select>
                    <Button>Select</Button>
                  </FormControl>
                </FormGroup>
              </Box>
              </Box>
              {/* <Box sx={{ minWidth: 30 }}>
                <Button>Select</Button>
              </Box> */}
            </Stack>
            <br />
            <FormGroup>
              {/* <DesktopDatePicker
                label="Date of birth"
                inputFormat="MM/dd/yyyy"
                name="Date of birth"
                type="datetime-local"
                value={inputs.dobvalue}
                onChange={handleInputChange}
                renderInput={(params) => <TextField {...params} />}
              /> */}
              <input
                type="datetime-local"
                name="dobvalue"
                value={inputs.dobvalue}
                onChange={handleInputChange}
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
                    control={
                      <Checkbox
                        checked={inputs.javascript}
                        onChange={handleInputChange}
                        name="javascript"
                      />
                    }
                    label="Java Script"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleInputChange}
                        name="reactjs"
                        checked={inputs.reactjs}
                      />
                    }
                    label="React JS"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleInputChange}
                        name="nodejs"
                        checked={inputs.nodejs}
                      />
                    }
                    label="Node JS"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleInputChange}
                        name="python"
                        checked={inputs.python}
                      />
                    }
                    label="Python"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleInputChange}
                        name="cplusplus"
                        checked={inputs.cplusplus}
                      />
                    }
                    label="C, C++"
                  />
                </FormControl>
              </Box>
            </FormGroup>
            <FormGroup>
              <TextField
                id="filled-multiline-static"
                label="Description"
                multiline
                rows={4}
                name="description"
                value={inputs.description}
                onChange={handleInputChange}
                variant="filled"
              />
            </FormGroup>
            <br />
            <Stack direction="row" spacing={1} width="100%">
              <Box sx={{ minWidth: 610 }}>
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="date-time">Password</InputLabel>
                    <Input
                      type="password"
                      name="password"
                      value={inputs.password}
                      id="phone"
                      onChange={handleInputChange}
                      aria-describedby="my-helper-text"
                    />
                    {error.password && (
                      <p style={{ color: "red" }}>{error.password}</p>
                    )}
                  </FormControl>
                </FormGroup>
              </Box>
              <Box sx={{ minWidth: 610 }}>
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="confirmPassword">
                      Confirm password
                    </InputLabel>
                    <Input
                      type="password"
                      name="confirmPassword"
                      onChange={handleInputChange}
                      value={inputs.confirmPassword}
                      id="confirmPassword"
                      aria-describedby="my-helper-text"
                    />
                    {error.ConfirmPassword && (
                      <p style={{ color: "red" }}>{error.ConfirmPassword}</p>
                    )}
                  </FormControl>
                </FormGroup>
              </Box>
            </Stack>
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="gender"
                value={inputs.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <Button type="Submit" variant="contained" color="success">
              Submit
            </Button>
          </Stack>
        </LocalizationProvider>
      </form>
    </div>
  );
}
