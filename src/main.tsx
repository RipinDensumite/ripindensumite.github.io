import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
