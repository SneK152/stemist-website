import { render, hydrate } from "react-dom"
import "./index.css"
import Index from "./routes/index"
import Container from "./components/Container"
import smoothscroll from "smoothscroll-polyfill"

import About from "./routes/about"
import Signup from "./routes/signup"
import Contact from "./routes/contact"

const content = (
	<Container>
		<section id="home">
			<Index />
		</section>
		<section id="signup" className="scroll-mt-14 mt-[2px]">
			<Signup />
		</section>
		<section id="about" className="scroll-mt-14 mt-[2px]">
			<About />
		</section>
		<section id="contact" className="scroll-mt-14 mt-[2px]">
			<Contact />
		</section>
	</Container>
)

const rootElem = document.getElementById("root")
if (rootElem?.hasChildNodes()) {
	hydrate(content, document.getElementById("root"))
} else {
	render(content, document.getElementById("root"))
}
smoothscroll.polyfill()
