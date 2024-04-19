import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './Components/Header/Index.tsx'
import Home from './Components/Pages/Home/Index.tsx'
import Login from './Components/Pages/Login/Index.tsx'
import Cadastro from './Components/Pages/Cadastro/Index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
