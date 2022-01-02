import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import Navbar from './components/Navbar'
import Index from "./routes/index"
import Signup from './routes/signup'
import Contact from './routes/contact'
import About from './routes/about'

const rootElem = document.getElementById('root')
if (rootElem?.hasChildNodes()) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
  )
} else {
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
  )
}