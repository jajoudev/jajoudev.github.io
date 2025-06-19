import Cta from "./Cta";

function Projects({ children }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <Cta content="Contact me" />
      </div>
      {children}
    </section>
  );
}

export default Projects;
