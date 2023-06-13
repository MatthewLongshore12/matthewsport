import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './userviews/Home';
import Projects from './userviews/Projects';
import NavBar from './userviews/NavBar';



function App() {



  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects'element={<Projects/>}/>
        <Route path='/skills'/>
      </Routes>
    </div>
  )
}



export default App;