import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar';
import Home from "./routes/index"

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<div>Sign up!!</div>} />
      <Route path="*" element={<div>404 Error</div>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)