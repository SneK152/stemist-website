import { render, hydrate } from "react-dom";
import "./index.css";
import Index from "./routes/index";
import Container from "./components/Container";
import smoothscroll from "smoothscroll-polyfill";

import About from "./routes/about";
import Signup from "./routes/signup";
import Contact from "./routes/contact";

const content = (
  <Container>
    <section id="home">
      <Index />
    </section>
    <section id="signup" className="mt-[2px] scroll-mt-14 py-4">
      <Signup />
    </section>
    <section id="about" className="mt-[2px] scroll-mt-14 py-4">
      <About />
    </section>
    <section id="contact" className="mt-[2px] scroll-mt-14 py-4">
      <Contact />
    </section>
  </Container>
);

const rootElem = document.getElementById("root");
if (rootElem?.hasChildNodes()) {
  hydrate(content, rootElem);
} else {
  render(content, rootElemen);
}
smoothscroll.polyfill();
