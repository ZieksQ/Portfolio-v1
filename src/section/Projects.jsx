import Project from "../components/Project.jsx";
import { projectLinks } from "../static/index.js";

const Projects = () => {
  return (
    <section className={`bg-gray-200 pt-2`}>
      <div className={`lg:max-w-screen-lg mx-auto`}>
        <h3 className={`text-2xl text-gray-400 font-medium text-center mt-6`}>
        Projects
      </h3>
      <div
        className={`grid md:grid-cols-3 lg:grid-cols-4  mx-4 py-10 gap-2 items-stretch`}
      >
        {projectLinks.map((e, index) => (
          <Project
          key={index}
            title={e.title}
            description={e.description}
            tag={e.tags.map((e, i) => (<span key={i} className={`text-sm font-medium ${e.color} rounded-xl px-2`}>{e.tag}</span>))}
            link={e.links}
          />
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default Projects;
