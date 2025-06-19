import Cta from "./Cta";

function Hero({ img }) {
  return (
    <section className="flex flex-col items-center justify-center pb-20">
      <img className="mb-10" src={img} alt="" />

      <h1 className="text-4xl text-center text-white font-bold mb-6">
        Nice to meet you!{" "}
        <span className=" underline underline-offset-8 decoration-emerald-400">
          I'm Adam Keyes
        </span>
      </h1>
      <p className="text-neutral-500 text-center mb-6">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <Cta content="Contact Me" />
    </section>
  );
}

export default Hero;
