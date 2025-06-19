import Input from "./Input";
import InputMessage from "./InputMessage";
import CtaButton from "./ButtonCta";
import Header from "./Header"

function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 px-4 py-20">
        <h2 className="text-4xl text-white font-bold text-center mb-5">
          Contact
        </h2>
        <p className="text-white text-center text-base mb-12">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <form>
          <Input labelFor="name" labelContent="Name" inputType="text" />
          <Input labelFor="email" labelContent="Email" inputType="email" />
          <InputMessage />
          <CtaButton />
        </form>
        <hr className="mb-10 h-1 bg-white"/>
        <Header />
      </footer>
    </>
  );
}

export default Footer;
