import { render, hydrate } from 'react-dom'
import "./index.css"
import Index from "./routes/index"
import Container from './components/Container'
import { lazy, Suspense } from 'react'
import Spinner from './components/Spinner'
import smoothscroll from "smoothscroll-polyfill"

const About = lazy(() => import("./routes/about"))
const Signup = lazy(() => import("./routes/signup"))
const Contact = lazy(() => import("./routes/contact"))

const content =
  <Container>
    <section id="home">
      <Index />
    </section>
    <section id="signup" className="pt-14 mt-[2px]">
      <Suspense fallback={<Spinner color="white" />}>
        <Signup />
      </Suspense>
    </section>
    <section id="about" className="pt-14 mt-[2px]">
      <Suspense fallback={<Spinner color="white" />}>
        <About />
      </Suspense>
    </section>
    <section id="contact" className="pt-14 mt-[2px]">
      <Suspense fallback={<Spinner color="white" />}>
        <Contact />
      </Suspense>
    </section>
  </Container>

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
smoothscroll.polyfill()