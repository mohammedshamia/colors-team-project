import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Providers} from'./providers'
import  {HiOutlineMail} from'react-icons/hi'
import { InputController } from './Components/Form/InputController/InputController';
function App() {
  return (
    <div>

    
                  <InputController icon={<HiOutlineMail/>} errors='' placeholder='some  title'  label="enter" type="email" name={'some '}/>

      
     <Providers />
    </div>
  );
}

export default App;
