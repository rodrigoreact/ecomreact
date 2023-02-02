import { useEffect, useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import ProductsId from './pages/ProductsId'
import AppNavBar from './components/AppNavBar'
import Loading from './components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from './store/slices/products.slice'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'

function App() {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <>
    <HashRouter>
      <AppNavBar />
      {loading && <Loading />}
      <Container className='my-5'>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/products/:id"} element={<ProductsId />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={"/purchases"} element={<Purchases />} />
          </Route>
        
        </Routes>
        
  
      </Container>
  
    </HashRouter>
    <Footer />
    </>
  )
}

export default App;


