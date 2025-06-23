import Cta from "./Cta";

function Projects({ children }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-white md:text-7xl">Projects</h2>
        <Cta content="Contact me" css="uppercase text-white underline underline-offset-8 decoration-2 decoration-emerald-400 font-bold text-base tracking-wide md:ml-5"/>
      </div>
      {children}
    </section>
  );
}

export default Projects;
