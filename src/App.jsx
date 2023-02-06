import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <div className="App">
      

      <Routes>
      <Route  path= "/" element ={<Home/>}/>
      <Route path= "/login" element ={<Login/>}/>
      <Route path= "/signup" element ={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
