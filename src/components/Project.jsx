import { github } from "../assets/index.js";

const Project = (props) => {
  return (
    <div
      className={`max-w-80 mx-auto border-4 border-gray-400 rounded-xl shadow-lg bg-gray-800 text-white`}
    >
      <div className={`mx-4 mt-6 mb-4`}>
        <h3 className={`text-lg font-bold`}>{props.title}</h3>
        <div className={`gap-1 flex flex-wrap w-full`}>
            {props.tag}
        </div>
        <p className={`text-md `}>{props.description}</p>

        <div className={`flex justify-between mt-6`}>
          <button
            className={`py-2 px-4 bg-gray-400 hover:bg-gray-500 active:bg-gray-600 w-[75%] lg:w-[80%] ring-2 rounded-lg`}
          >
            View Project
          </button>
          <button className={`lg:ml-2 p-2 ring-2  rounded-lg`}>
            <a href={props.link}>
              <img src={github} alt="github repository" className={`size-6`} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
