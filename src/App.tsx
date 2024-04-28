import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
/* START import page */
import Home from "./pages/Home";
import Connection_404 from "./pages/404";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Connection_404 />} />
      </Routes>
    </Router>
  )
}

export default App
