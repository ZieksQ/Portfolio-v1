import Project from "../components/Project.jsx";
import { projectLinks } from "../static/index.js";

const Projects = () => {
  return (
    <section className={`lg:max-w-screen-lg m-auto`}>
      <h3 className={`text-2xl text-gray-400 font-medium text-center mt-6`}>
        Projects
      </h3>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mx-4 pt-10 pb-10 gap-4`}
      >
        {projectLinks.map((e, index) => (
          <Project
          key={index}
            title={e.title}
            description={e.description}
            tag={e.tags.map((e, i) => (<span key={i} className={`text-sm font-mono ${e.color} rounded-lg px-2`}>{e.tag}</span>))}
            link={e.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
