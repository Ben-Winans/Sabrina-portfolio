import NavBar from "./components/NavBar";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Works from "./components/Works";
// import Contact from "./components/Contact";
import Home from "./components/pages/Home"; 

function App() {
  return (
    <>
      <NavBar />
      <div id ="home"> 
        <Home />
      </div>
      {/* <div id ="About" className={styles.About}> 
        <Home />
      </div>
      <div id ="Experience" className={styles.Experience}> 
        <Home />
      </div>
      <div id ="footer" className={styles.Footer}> 
        <Home />
      </div> */}
      {/* <div id="about" className={styles.About}>
        <About />
      </div>
      <div id="skills" className={styles.Skills}>
        <Skills />
      </div>
      <div id="projects" className={styles.Works}>
        <Works />
      </div>
      <div id="contact" className={styles.Contact}>
        <Contact />
      </div> */}
    </>
  )
}

export default App
