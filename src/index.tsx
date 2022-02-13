import { render, hydrate } from "react-dom";
import "./index.css";
import Container from "./components/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";

const Index = lazy(() => import("./routes/index"));
const About = lazy(() => import("./routes/about"));
const Signup = lazy(() => import("./routes/signup"));
const Team = lazy(() => import("./routes/team"));
const Contact = lazy(() => import("./routes/contact"));

const content = (
  <BrowserRouter>
    <Navbar className="fixed z-50 w-full bg-blue bg-opacity-95 px-2 sm:px-6 lg:px-6" />
    <Container>
      <Suspense fallback={<Spinner color="white" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Container>
  </BrowserRouter>
);

const rootElem = document.getElementById("root");
if (rootElem?.hasChildNodes()) {
  hydrate(content, rootElem);
} else {
  render(content, rootElem);
}
