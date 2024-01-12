
import Navbar from './components/Navbar';
import Allstudent from './components/Allstudent';
import Addstudent from './components/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css'
import Viewstudent from './components/Viewstudent';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
      {/* <Route path="/" element={<div></div>}/> */}
      <Route path="/" element={<Home/>}/>

<Route path="addstudent" element={<Addstudent/>}/>
<Route path="allstudent" element={<Allstudent/>}/>
<Route path="viewstudent" element={<Viewstudent/>}/>
</Routes>
</BrowserRouter>
     
    </div>
  );
}

export default App;
