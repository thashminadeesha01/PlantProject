import React from 'react';
import "./index.css";
import Upper from './components/Upper';
import Middle from './components/Middle';
import Bottom from './components/Bottom';


function App() {
  return <div className="max-w-[1700px] min-w-[675px] items-center self-center m-auto"> 
    <Upper/>
    <Middle/>
    <Bottom/>
    
  </div>;
}


export default App;