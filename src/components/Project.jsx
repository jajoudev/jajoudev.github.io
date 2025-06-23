import Cta from "./Cta";

function Project({ img, title, tags }) {
  return (
    <>
      <div className="flex flex-col mb-10">
        <img src={img} alt="" className="mb-5" />
        <h3 className="text-white text-2xl font-bold uppercase mb-2">
          {title}
        </h3>
        <div className="flex gap-5 mb-5">
          {tags.map((tag) => (
            <span className="text-[#D9D9D9] text-lg">{tag}</span>
          ))}
        </div>
        <div className="flex">
          <Cta content="View Project" css="uppercase text-white underline underline-offset-8 decoration-2 decoration-emerald-400 font-bold text-base tracking-wide" />
          <Cta content="View Code" css="uppercase text-white underline underline-offset-8 decoration-2 decoration-emerald-400 font-bold text-base tracking-wide ml-5" />
        </div>
      </div>
    </>
  );
}

export default Project;
