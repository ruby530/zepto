import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Pages.jsx/Home'
import Login from './Components/Pages.jsx/Login'
import ViewMore from './Components/Pages.jsx/ViewMore'
import AddCart from './Components/Pages.jsx/AddCart'
import TermsConditions from './Components/Pages.jsx/TermsConditions'
function App(){
  return(
    <>
    <NavBar/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<ViewMore/>} path='/viewmore/:id'/>  
      <Route element={<AddCart/>} path='/addcart'/>
      <Route element={<TermsConditions/>} path='/termsconditions'/>
      
    </Routes>
    </>
  )
}
export default App