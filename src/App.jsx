import { Fragment } from "react";
import { Navigation, Hero, About, Projects, Services, Footer } from "./section/index.js";

function App() {

  return (
    <Fragment>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
    </Fragment>
  )
}

export default App
