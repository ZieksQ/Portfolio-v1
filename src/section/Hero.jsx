
const Hero = () => {
  return (
    <section id="hero" className={`mt-15 w-full py-20 lg:py-30 lg:max-w-screen-lg  flex flex-col md:flex-row m-auto justify-center lg:items-center`}>
        <div className={`px-6 lg:px-0 lg:w-[50%] order-2 mt-6 lg:mt-0`}>

            <h1 className={`text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent uppercase`}>Laren Jay Acob</h1>
            <p className={`text-md text-gray-500 font-bold font-mono`}>Web Developer, Student, BSIT</p>
            <button className={`mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 active:from-cyan-700 active:to-violet-700 text-white font-medium rounded-md shadow-lg`}>Download CV</button>
        </div>

        <div className={`lg:w-[50%] flex items-center justify-center md:order-2`}>
            <img src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/471604616_3963444427309629_81555885307029041_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH_bjCjhpOCwGVxrYg6g0XEhRqG5APbQ-mFGobkA9tD6ZCUAWnH3GunKBmn-l6FDNtws8yPdYFL31pbVICXibVD&_nc_ohc=gkwbg5AHj9AQ7kNvwE72jGU&_nc_oc=Adl2nRq6bBUymb-iYBlMvap_5nfqEI_KIdIdg1wUL3_JUcCG5k8rnCUJdY3gCPmJHvg&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=k2TS517pOIgfaDWKvDUsNQ&oh=00_AfVKEqGtKf2TmAOhxZmA-1eUsCWcK97Ulper60iREPc2dg&oe=6897D6F1" alt="" className={`w-50 lg:w-80 rounded-[50%] shadow-lg border-2 border-cyan-800`}/>
        </div>
    </section>
  )
}   

export default Hero