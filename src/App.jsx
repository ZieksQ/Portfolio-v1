import { Fragment } from "react";
import { Navigation, Hero, About, Projects, Footer } from "./section/index.js";

function App() {

  return (
    <Fragment>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </Fragment>
  )
}

export default App
