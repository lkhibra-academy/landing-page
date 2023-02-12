import React from 'react';
import Learn from './Learn';
import Includes from './Includes';


export default function DoubleSecond() {
  
  return (
    <div className='flex flex-col md:flex-row 
    relative max-w-7xl
        md:mx-auto md:justify-center'>
        <Learn language="Arabic"/>
        <Includes language="Arabic"/>
    </div>
    
  );
}
