import Service from "../components/Service.jsx";
import { serviceLinks } from "../static/index.js";

const Services = () => {
  return (
    <section id="services" className={`pt-2 scroll-mt-10`}>
      <div className={`lg:max-w-screen-lg mx-auto`}>
        <h3 className={`text-2xl text-gray-400 font-medium text-center mt-6`}>
          Services
        </h3>
        <div className={`px-4 py-6 grid md:grid-cols-3 gap-10 items-stretch`}>
          {serviceLinks.map((e, index) => (
            <Service
              key={index}
              title={e.title}
              description={e.description}
              image={e.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
