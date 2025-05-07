import Picture from "/assets/images/profile.png";

import {
  IoLogoTiktok,
  IoLogoYoutube,
  IoLogoTwitch,
  IoTrophy,
} from "react-icons/io5";

import { Typewriter } from "react-simple-typewriter";

const links = [
  {
    id: 1,
    componentLogo: (
      <IoLogoYoutube
        size={50}
        color="red"
        className="hover:fill-red-600 drop-shadow-lg drop-shadow-red-500/50"
      />
    ),
    href: "https://www.youtube.com/channel/UCklgbYjsc56knjG_czbzF6g",
  },
  {
    id: 2,
    componentLogo: (
      <IoLogoTwitch
        size={50}
        color="purple"
        className="hover:fill-purple-600 drop-shadow-lg drop-shadow-purple-500/50"
      />
    ),
    href: "https://www.twitch.tv/jajougoat",
  },
  {
    id: 3,
    componentLogo: <IoLogoTiktok size={50} color="cyan" />,
    href: "https://www.tiktok.com/@jajougoat",
  },
  {
    id: 4,
    componentLogo: <IoTrophy size={50} color="yellow" />,
    href: "https://www.speedrun.com/fr-FR/users/Jajou",
  },
];

function Component() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 animate-gradient-x">
        <div className="flex flex-row justify-center items-center gap-10 min-h-screen backdrop-blur-sm bg-white/10 px-4 py-8">
          <div className="flex flex-col items-center max-w-lg">
            <img className="rounded-full mb-4" src={Picture} alt="Profile" />
            <h2 className="mb-10 text-white text-2xl text-center">
              <span className="text-blue-200 font-bold inline-block min-w-[50px]">
                <Typewriter
                  words={[
                    "@JajouGoat 💙",
                    "Développeur Web Junior 💻",
                    "Youtubeur, Speedruner et Streamer 🔴",
                    "J'aime l'astronomie ✨",
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop={Infinity}
                />
              </span>
            </h2>

            <div className="flex flex-row gap-6">
              {links.map((link) => (
                <a className="block" href={link.href} key={link.href}>
                  {link.componentLogo}
                </a>
              ))}
            </div>
          </div>

          {/* Iframe Discord */}
          <div className="flex-shrink-0 ml-[96px]">
            <iframe
              src="https://discord.com/widget?id=1300848335401390161&theme=dark"
              width="350"
              height="500"
              allowTransparency="true"
              frameBorder="0"
              className="rounded-lg shadow-lg"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
