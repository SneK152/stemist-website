import { render, hydrate } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import Index from "./routes/index"
import Container from './components/Container'
import { lazy, Suspense } from 'react'
import Spinner from './components/Spinner'

// import Contact from './routes/contact'
// import Signup from './routes/signup'
// import About from './routes/about'
const About = lazy(() => import("./routes/about"))
const Signup = lazy(() => import("./routes/signup"))
const Contact = lazy(() => import("./routes/contact"))


const content =
  <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="signup" element={
          <Suspense fallback={<Spinner color="white" />}>
            <Signup />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<Spinner color="white" />}>
            <Contact />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<Spinner color="white" />}>
            <About />
          </Suspense>
        } />
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