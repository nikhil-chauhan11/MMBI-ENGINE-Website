import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App(){
  return(
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/technology' element={<Technology/>}></Route> 
      <Route path='/solutions' element={<Solutions/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}

    </Routes>
    </BrowserRouter>

  );
}
 
export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;