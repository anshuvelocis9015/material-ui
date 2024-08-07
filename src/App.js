// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, Radio } from '@mui/material';
import {Stack} from '@mui/material';
import { Delete,Favorite,FavoriteBorder } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
function App() {
  const[color,setColor] = useState("primary");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const[name,setName] = useState([]);
  const[gender,setGender] = useState("male");
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

    </div>
  );
}
export default App;
