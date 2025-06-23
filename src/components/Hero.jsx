import Cta from "./Cta";

function Hero({ img }) {
  return (
    <section className="flex flex-col items-center justify-center pb-20 md:flex md:flex-row-reverse md:ml-auto md:mr-auto lg:w-[80%]">
      <img className="mb-10 ml-auto mr-auto md:w-4xl" src={img} alt="" />
      <div className="md:flex flex-col">
        <h1 className="text-4xl text-center text-white font-bold mb-6 md:text-left md:text-7xl">
          Nice to meet you!{" "}
          <span className=" underline underline-offset-8 decoration-emerald-400">
            I'm Adam Keyes
          </span>
        </h1>
        <p className="text-[#D9D9D9] text-center mb-6 md:text-left">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <Cta
          content="Contact Me"
          css="block uppercase text-white underline underline-offset-8 decoration-2 decoration-emerald-400 font-bold text-base tracking-wide text-center md:text-left"
        />
      </div>
    </section>
  );
}

export default Hero;
