function Skill({ name, yearsOfXp }) {
  return (
    <div className="mb-6 md:mb-14">
      <h2 className="text-white text-3xl font-bold text-center md:text-left md:ml-5 md:text-5xl">{name}</h2>
      <p className="text-[#D9D9D9] text-center md:text-left md:ml-5">{yearsOfXp} Year Of Experience</p>
    </div>
  );
}

export default Skill;
