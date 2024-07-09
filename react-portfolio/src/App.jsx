import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
const App = () => {

  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-cyan-300 selection:text-cyan-950">
      {/* background color */}
      <div className="fixed top-0 -z-10 h-full w-full">

        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto p-5">
        <Navbar />
        <Introduction />
        <About />
        <Technologies />
        <Experience/>
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;