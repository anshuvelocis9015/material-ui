// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, Radio, Select, Slider, MenuItem, TextField, Switch, Box, Container, Grid, Hidden, Tab, Tabs, AppBar } from '@mui/material';
import {Stack} from '@mui/material';
import { Delete,Favorite,FavoriteBorder } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
function App() {
  const[color,setColor] = useState("primary");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const[name,setName] = useState([]);
  const[gender,setGender] = useState("male");
  const[val,setVal] = useState([40,70]);
  const[value,setValue]=useState(0);
  const[course,setCourse] = useState("");

  const mark = [
    {
      value: 0,
      label: 'start',
    },
    {
      value: 100,
      label: 'middle',
    },
    {
      value: 200,
      label: 'end',
    },

]
  function customMe(){
    setColor("secondary");
    setDisabledBtn(true);
    console.log("function called");
  }
  function getValue(e){
    const data = name;
    data.push(e.target.value);
    // console.log(e.target.value);
    console.log(data);
  }
  function radioFunction(e){
    console.log(e.target.value);
    setGender(e.target.value);
  }
  function getValueSlider(e){
    console.log(e.target.value);
    setVal(e.target.value);
  }
  function updateCourse(e){
    setCourse(e.target.value);
  }
  function getText(e){
    console.log(e.target.value);
    console.log("anshu kumar");
  }
  function getSwitch(e){
    console.log(e.target.checked);
    console.log("anshu");
  }
  function getTable(e){
    console.log(e.target.value);
    setValue(e.target.value);
  }
  return (
    <div className="App">
      <h1>React Material-UI</h1>
      {/* <button>click me</button> */}
      <Button 
      color={color}
      variant='primary'
      disabled={disabledBtn}
      size='small'
      startIcon={<Delete />}  // Material-UI Icon
      onClick={()=>{customMe()}}
      >Click me</Button>
      <ButtonGroup color='primary' variant='outlined' orientation='horizontal' >
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      </ButtonGroup>
      <Stack spacing={2} direction="column">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Checkbox color='secondary' variant='contained' value='Anshu' onChange={(e) =>{getValue(e)}} />

      <Checkbox color='secondary' variant='contained' value='Ansh' onChange={(e) =>{getValue(e)}} />

      <Checkbox color='secondary' variant='contained' value='Ans' onChange={(e) =>{getValue(e)}} />

      <Checkbox color='secondary' variant='contained' value='An' indeterminate onChange={(e) =>{getValue(e)}} />
      <Checkbox color='secondary' variant='contained' value='Anshu kumar' icon={<Favorite />} checkedIcon={<FavoriteBorder />} onChange={(e) =>{getValue(e)}} />
      <Checkbox color='secondary' variant='contained' value='Anshuman' icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={(e) =>{getValue(e)}} />
      <div>
        <span>Male</span>
      <Radio 
      value="male"
      color='primary'
      checked={gender === 'male'}
      onChange={(e)=>radioFunction(e)} 
      />
      </div>
      <div>
        <span>Female</span>
      <Radio 
      value="female"
      color='primary'
      checked={gender === 'female'}
      onChange={(e)=>radioFunction(e)} 
       />
      </div>
      <div style={{width:"300px",margin:"100px"}}>
        <Slider
        color='secondary'
        // defaultValue={50}
        value={val}
        orientation='horizontal'
        step={20}
        max={200}
        marks={mark}
        valueLabelDisplay='auto'
        onChange={(e)=>{getValueSlider(e)}} 
        />
      </div>
      <Select 
      value={course}
      onChange={(e) => {updateCourse(e)}}
       displayEmpty>
      <MenuItem value="">Select Course</MenuItem>
        <MenuItem value={1}>java</MenuItem>
        <MenuItem value={2}>c++</MenuItem>
        <MenuItem value={3}>javascript</MenuItem>
        <MenuItem value={4}>Node</MenuItem>
        <MenuItem value={5}>Vuejs</MenuItem>
      </Select>
      <TextField 
      color='secondary'
      variant='outlined'
      label='enter your name'
      onChange={(e) =>getText(e)}
      />

      <Switch 
      color='secondary'
      size='medium'
      // checked={false}
      onChange={(e) => getSwitch(e)}
      />
      <Box component="span" style={{color:'red'}}>
        <Button>Hire Me</Button>
      </Box>
      <Container maxWidth="lg" style={{backgroundColor:"chocolate",margin:"20px"}} >My name is Anshu Kumar</Container>
      <Container maxWidth="md" style={{backgroundColor:"chocolate",margin:"20px"}} >My name is Anshu Kumar</Container>
      <Container maxWidth="sm" style={{backgroundColor:"chocolate",margin:"20px"}} >My name is Anshu Kumar</Container>
      <Container maxWidth="xs" style={{backgroundColor:"chocolate",margin:"20px"}} >My name is Anshu Kumar</Container>
      <Container fixed style={{backgroundColor:"chocolate",margin:"20px"}} >My name is Anshu Kumar</Container>
      <Grid item container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div style={{backgroundColor:"lightblue",padding:"20px",margin:"10px"}}>Grid 1</div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{backgroundColor:"lightgreen",padding:"20px",margin:"10px"}}>Grid 2</div>
        </Grid>
        <Hidden only="md">
        <Grid item xs={12} sm={6} md={3}>
          <div style={{backgroundColor:"lightpink",padding:"20px",margin:"10px"}}>Grid 3</div>
        </Grid>
        </Hidden>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{backgroundColor:"lightyellow",padding:"20px",margin:"10px"}}>Grid 4</div>
        </Grid>
      </Grid>
      <AppBar position='static'>
        <Tabs value={value} onChange={(e) => getTable(e)} >
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        About
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contact
      </TabPanel>
      
    </div>
  );
}
function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>
     {
      value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )
     }
    </div>
  );
}

export default App;
