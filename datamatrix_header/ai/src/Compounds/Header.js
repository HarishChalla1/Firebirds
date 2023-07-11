import React from 'react'
import './Header.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'tippy.js/themes/light.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import dinesh from './template (1).png'

const Header = () => {
  return (
    <div className='header'>
     <div className='logo'>
     <img src='https://groundcontroldata.com.au/wp-content/uploads/2022/07/PI-datametrics.png'
        
        alt=''/>
      
      </div> 
      {/* <div className='header1'> */}
     <div className='header__first'>
      <span>All Projects</span>
      </div> 
     <div className='header__second'>
      <span>Datasets</span>
      </div> 
     <div className='header__third'>
      <span>Tasks</span>
      </div> 
     <div className='header__fourth'>
      <span>Bugs</span>
      </div> 
     <div className='header__fifth'>
     <img src={dinesh}
        
        alt=''/>
        
      <span>ADMIN</span>
      
      <ExpandMoreIcon/>
      
      </div> 
     <div className='header__six'>
     <button type="button" className="logout-desktop-btn" id='btn'>
            Logout
            </button>
      {/* <button> Logout </button> */}
      </div> 
      </div>
    // </div>
  )
}

export default Header
