import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import './App.css'
import PrivateLayout from './layout/PrivateLayout';
import Auth from './pages/Auth';
import Info from './pages/Info';
import Product from './pages/Product';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='product/:productId'  element={<Product/>}/>
      </Route>
      <Route path='/about' element={<PrivateLayout />}>
        <Route index element={<About />} />
        <Route path='info' element={<Info />} />
      </Route>
      <Route path='/auth' element={<Auth />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
