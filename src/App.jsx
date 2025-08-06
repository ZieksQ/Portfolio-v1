import { Fragment } from "react";
import { Navigation, Hero, About, Projects, Services, Contact, Footer } from "./section/index.js";

function App() {

  return (
    <Fragment>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App
