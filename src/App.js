import './App.css';
import Navbar from './components/Navbar/Navbar';
//import CategoryItem from './components/Category-item.component';
import Home from './components/Routes/Home';
import { Routes, Route } from 'react-router';
import Shop from './components/Routes/Shop';
import Carts from './components/Routes/Carts';
import Authentication from './components/SignIn/Authentication';



const App = ()=> {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route  index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Carts/>}/>
        </Route>
       <Route path='/signin' element={<Authentication/>}/>
      </Routes>
    </div>
  )
}

export default App;
