function Tech({ children }) {
  return (
    <section className="flex items-center justify-center flex-col  md:grid md:grid-cols-2 md:justify-items-normal md:justify-normal md:mb-20 lg:grid-cols-3">
      {children}
    </section>
  );
}

export default Tech;
