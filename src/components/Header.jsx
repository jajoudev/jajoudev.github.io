import HeaderSocials from "./HeaderSocials";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navigation({ css }) {
  return (
    <>
      <header>
        <nav className={css}>
          <ul className="md:flex justify-between items-center w-[90%] ml-auto mr-auto lg:w-[80%] lg:justify-around">
            <li className="text-white font-extrabold text-2xl text-center mb-5 md:text-4xl">
              adamkeyes
            </li>
            <div className="flex itmes-center justify-center gap-5">
              <HeaderSocials
                component={<FaTwitter size={30} color="white" />}
              />
              <HeaderSocials
                component={<FaYoutube size={30} color="white" />}
              />
              <HeaderSocials
                component={<FaDiscord size={30} color="white" />}
              />
              <HeaderSocials component={<FaGithub size={30} color="white" />} />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
