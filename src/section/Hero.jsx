import { profile } from "../assets/index.js"
import { techstackLinks } from "../static/index.js"

const Hero = () => {
  return (
    <section id="home" className={`mt-15 w-full py-20 lg:py-30 lg:max-w-screen-lg  flex flex-col md:flex-row m-auto justify-center lg:items-center`}>
        <div className={`px-6 lg:px-0 lg:w-[50%] order-2 mt-6 lg:mt-0`}>

            <h1 className={`text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent uppercase`}>Laren Jay Acob</h1>
            <p className={`text-md text-gray-500 font-bold font-mono`}>Web Developer, Student, BSIT</p>
            <button className={`mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 active:from-cyan-700 active:to-violet-700 text-white font-medium rounded-md shadow-lg cursor-pointer`}>Download CV</button>
            <div className={`mt-1 flex space-x-2`}>
              {techstackLinks.map((e, index) => (
                <a key={index} href={e.link} target="_blank" rel="noopener noreferrer" title={e.title}>
                  <img src={e.img} className={`size-4 cursor-pointer`}/>
                </a>
                
              ))}
            </div>
        </div>

        <div className={`lg:w-[50%] flex items-center justify-center md:order-2`}>
            <img src={profile} alt="" className={`w-50 lg:w-80 rounded-[50%] shadow-lg border-2 border-cyan-800`}/>
        </div>
    </section>
  )
}   

export default Hero