import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/home'
import ErrorPage from './pages/404'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
