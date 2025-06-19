import Cta from "./Cta";

function Project({ img, title, tags }) {
  return (
    <>
      <div className="flex flex-col mb-10">
        <img src={img} alt="" />
        <h3 className="text-white text-2xl font-bold uppercase mb-2">
          {title}
        </h3>
        <div className="flex gap-5 mb-5">
          {tags.map((tag) => (
            <span className="text-[#D9D9D9] text-lg">{tag}</span>
          ))}
        </div>
        <div className="flex gap-8">
          <Cta content="View Project" />
          <Cta content="View Code" />
        </div>
      </div>
    </>
  );
}

export default Project;
