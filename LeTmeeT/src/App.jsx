import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from './Authentication/Authentication';
import NeonCursor from './neontest/Neon';
import Email from './EmailComponent/Email';
import Home from './Home/home';

const App = () => {
  return (
    <div>
      <div className='Background-cover'>

     
      <Routes>
        <Route path="/Authentication" element={<Authentication />} />
      </Routes>
      <Routes>
          <Route path='/neon' element ={<NeonCursor/>}Route/>
      </Routes>
      <Routes>
          <Route path='/Email' element ={<Email/>}Route/>
      </Routes>
      <Routes>
          <Route path='/' element ={<Home/>}Route/>
      </Routes>


    </div>

    </div>
  );
};

export default App;
