import React, { useState } from 'react';
import './Bar.css';

const App = () => {

    return (
            <div className="container">
               <div className="card" style={{height:'flex'}}>
                <div>
                    <h4>Completion Date </h4>
                    </div>

                <div className='division1'>
               <div className='id1'><span className='for-span'>for</span>
                <select style={{marginLeft:'2px'}}>
                  <option value="option1">December 2019</option>
                  <option value="option2">March 2020</option>
                  <option value="option3">April 2020</option>
                </select>


              <div className='sp1'>
                <span className="span0">
                   0%{' '}
                <span className="span">
                  25%{' '}
                <span className="span">
                  50%{' '}
                <span className="span">
                  75% 
                <span className="span">100%</span>
              </span>
            </span>
          </span>
        </span>
        <hr style={{marginLeft:'-130px'}} />


        <div className="grid-container">
          <canvas className="box">GfG</canvas>
          <span className="span1">63%</span>
        </div>
        <br />
        <div className="grid-container">
          <canvas className="box1">GfG</canvas>
          <span className="span1">47%</span>
        </div>
        <br />
        <div className="grid-container">
          <canvas className="box2">GfG</canvas>
          <span className="span1">52%</span>
        </div>
        <br />
        <div className="grid-container">
          <canvas className="box3">GfG</canvas>
          <span className="span1">81%</span>
        </div>
        <hr style={{marginLeft:'-130px'}} />



       
          <div className="grid-container">
            <canvas className="circle">GfG</canvas>
            <span className="names">
              Project Name <span className="span2">81.57%</span>
            </span>
          </div>
          <br />
          <div className="grid-container">
            <canvas className="circle1">GfG</canvas>
            <span className="names">
              Project Name <span className="span2">63.25%</span>
            </span>
          </div>
          <br />
          <div className="grid-container">
            <canvas className="circle2">GfG</canvas>
            <span className="names">
              Project Name <span className="span2">52.95%</span>
            </span>
          </div>
          <br />
          <div className="grid-container">
            <canvas className="circle3">GfG</canvas>
            <span className="names">
              Project Name <span className="span2">47.29%</span>
            </span>
          </div>
       
        </div>
        </div>
        </div>
        </div>
    </div>
   );
 }

export default App;

