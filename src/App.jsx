import './App.css'
import { Routes, Route } from 'react-router';
import About from './Layout/About';
import SignUp from './Layout/SignUp';
import Header from './Component/Header';
import Home from './Layout/Home';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
