import { facebook, github, linkedin, inbox } from "../assets/index.js";

const About = () => {
  return (
    <section id="about" className={`bg-gray-100 scroll-mt-10`}>
      <div className={`lg:max-w-screen-lg m-auto py-5 md:py-10 px-4 md:flex`}>
        <div className={`md:flex-1 order-1`}>
          <h3 className={`text-2xl text-gray-400 font-medium`}>About Me</h3>
          <p className={`text-sm`}>
            I'm a passionate developer, interested in building modern,
            user-friendly web applications. I enjoy exploring and learning
            various technologies to improve my skills. I aim to to be full stack
            developer. I am also interested in Game Development.
          </p>
        </div>

        {/* Social Section Container */}
        <div className={`flex-1 space-y-2 mt-10 md:mt-0`}>
          <h3 className={`text-2xl text-gray-400 font-medium`}>Social</h3>
          <a
            href="mailto:acoblaren2006@gmail.com"
            className={`flex items-center`}
          >
            <img src={inbox} alt="email logo" className={`size-8`} />
            <p className={`ml-2`}>acoblaren2006@gmail.com</p>
          </a>
          <a
            href="https://web.facebook.com/laren.jay.acob/"
            className={`flex items-center`}
          >
            <img src={facebook} alt="facebook logo" className={`size-8`} />
            <p className={`ml-2`}>Laren Jay Acob</p>
          </a>
          <a
            href="https://www.linkedin.com/in/laren-jay-acob-642824314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className={`flex items-center`}
          >
            <img src={linkedin} alt="linkedin logo" className={`size-8`} />
            <p className={`ml-2`}>Laren Jay Acob</p>
          </a>
          <a href="https://github.com/ZieksQ" className={`flex items-center`}>
            <img src={github} alt="github logo" className={`size-8`} />
            <p className={`ml-2`}>ZieksQ</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
