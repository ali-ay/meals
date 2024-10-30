import { useState } from 'react'
import Home from '../components/Home/Home'
import DetailsPage from '../components/DetailPage/DetailPage'
import CategoryPage from '../components/CategoryPage/CategoryPage'
import ErrorPage from '../components/ErrorPage/ErrorPage'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detay-sayfasi/:id' element={<DetailsPage />} />
        <Route path='/kategori/:name' element={<CategoryPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
