import Input from "./Input";
import InputMessage from "./InputMessage";
import CtaButton from "./ButtonCta";
import Header from "./Header";

function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 px-4 py-20 md:px-10">
        <div className="lg:flex">
          <div>
            <h2 className="text-4xl text-white font-bold text-center mb-5 md:text-7xl">
              Contact
            </h2>
            <p className="text-[#D9D9D9] text-center text-base mb-12 md:w-1/2 md:ml-auto md:mr-auto">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="md:flex md:items-center md:justify-center md:flex-col">
            <Input labelFor="name" labelContent="Name" inputType="text" />
            <Input labelFor="email" labelContent="Email" inputType="email" />
            <InputMessage />
            <CtaButton />
          </form>
        </div>
        <hr className="mb-10 h-1 bg-white" />
        <Header />
      </footer>
    </>
  );
}

export default Footer;
