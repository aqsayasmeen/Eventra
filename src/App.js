
import './App.css';
import Home from './pages/Home';
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Accounts/Login';
import SignUp from './Accounts/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </>
      );
}

export default App;
