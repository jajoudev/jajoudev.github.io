function TechExp({ tech, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-white text-3xl font-bold text-center">{tech}</h2>
      <p className="text-[#D9D9D9] text-center">{content}</p>
    </div>
  );
}

export default TechExp;
