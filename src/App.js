import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Nextpage from './Components/Nextpage';
import {Route, Routes} from "react-router-dom";
import Page1 from './Components/Page1';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Home />}/>
        <Route path='next' element={<Nextpage/>}/>
        <Route path='page1' element={<Page1/>}/>
      </Routes>
    </div>
  );
}

export default App;
