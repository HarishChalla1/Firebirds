import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Statistics.css";
import CurrentTime from "./CurrentTime";
import CurrentDate from './CurrentDate';
import { DonutChart } from './DonutChart';
import { AiFillCaretRight } from "react-icons/ai";

const Statistics = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChartHover = () => {
    setIsHovered(true);
  };

  const handleChartLeave = () => {
    setIsHovered(false);
  };


  return (
    <>
    <div style={{height:"475px",width:"60%",backgroundColor:"white",position:"fixed"}}>
      
              <p><select className='dr'>
                {/* <option hidden value=""></option> */}
                <option value="option1">PROJECT NAME</option>
                <option value="option2">PROJECT A</option>
                <option value="option3">PROJECT B</option>
                <option value="option4">PROJECT C</option>
                <option value="option5">PROJECT D</option>
                
              </select></p>
           
          
        

       
          <div className='d-flex flex-column'>
            <p className='par1'>Last Accessed</p>
            <div className='d-flex spa'>
              <CurrentTime />
              <CurrentDate />
            </div>
          </div>
      
     
      <br/>

   
<div className='d-flex ti'>
  <div className='circle'></div>
  <span className="text">Total Images</span>
  <p type='type' class="timg"  id="timg"><b>456</b></p>
</div>


<div className='d-flex submi'>
  <div className='circle'></div>
  <span className="text">Submitted</span>
  <p type='type' class="subm"  id="subm"><b>56</b></p>
</div>
<br/>

<div className='d-flex ts'>
  <div className='circle'></div>
  <span className="text">Test Status</span>
  <p type='type' class="tst"  id="tst">Nill</p>
</div>


<div className='d-flex rm'>
  <div className='circle'></div>
  <span className="text">Remaining</span>
  <p type='type' class="rem"  id="rem"><b>400</b></p>
</div>
<br/>
<br/>
<br/>



  <div className='d-flex cont'>
  <div className='circle'></div>
  <span className="text1">Contributors</span> 
<select id="contri" className="contri">
  <option value="FireBirds">All</option>
  <option value="hc">Harish Challa</option>
  <option value="sl">Shivani Lakkakula</option>
  <option value="sk">Sneha Kallam</option>
  <option value="od">Olipilli Dinesh</option>
  <option value="my">Mekala Yogeshwar</option>
  <option value="scs">Chandra Sekhar</option>
  <option value="nb">Nikhil Bathala</option>
</select>
  </div>
 
  <br/>
  <br/>
  <br/>
  

  

   <div className='d-flex btn'>
        Project Details<AiFillCaretRight className='arbtn' id="arbtn"/>
   </div>
    
   <div className='don' style={{ width: '350px', height: '350px' ,marginLeft:"60%",marginTop:"-50%",marginLeft:"55%"}}>
        <DonutChart />
      </div>



<div className='d-flex fstr'>
<div className='circle poly' id="poly"></div>
<span id="pol">Polygon</span>
<div className='circle rec' id="rec"></div>
<span id="rect">Rectangle</span>
<div className='circle cir' id="cir"></div>
<span  id="circ">Circle</span>
</div><br/>
<div className='d-flex secr'>
<div className='circle lin' id="lin"></div>
<span id="li" >Line</span>
<div className='circle bru' id="bru"></div>
<span id="bu" >Brush</span>
<div className='circle do' id="do"></div>
<span  id="d">Dot</span>
</div>


</div>

    </>
  );
};

export default Statistics;
