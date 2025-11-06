import React, { createContext, useState } from 'react'
import Button from './components/UI/Button'
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import './App.css'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
