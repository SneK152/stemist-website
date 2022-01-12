import { render, hydrate } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import Index from "./routes/index"
import Signup from './routes/signup'
import Contact from './routes/contact'
import About from './routes/about'
import Container from './components/Container'

const content =
  <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </Container>
  </BrowserRouter>

const rootElem = document.getElementById('root')
if (rootElem?.hasChildNodes()) {
  hydrate(
    content,
    document.getElementById('root')
  )
} else {
  render(
    content,
    document.getElementById('root')
  )
}