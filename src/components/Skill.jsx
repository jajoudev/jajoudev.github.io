function Skill({ name, yearsOfXp }) {
  return (
    <div className="mb-6">
      <h2 className="text-white text-3xl font-bold text-center">{name}</h2>
      <p className="text-[#D9D9D9] text-center">{yearsOfXp} Year Of Experience</p>
    </div>
  );
}

export default Skill;
