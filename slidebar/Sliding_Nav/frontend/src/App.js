
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sliding from './components/Sliding';
import Sidebar from './components/Sidebar';
import Side from './components/side';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Sliding/>}></Route>
    
    <Route path='/side' element={<Side/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
