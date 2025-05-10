import Picture from "/assets/images/profile.png";
import Links from "./SocialsLink"
import RandomDecorations from "./Decoration"
import RandomBackgroundMusic from "./BackgroundMusic"
import ClipboardButton from "./ClipboardButton"

import { Typewriter } from "react-simple-typewriter";

function Component() {
    return (
        <>
            <RandomBackgroundMusic />
            <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 animate-gradient-x overflow-y-hidden">
                <div className="hidden lg:flex lg:flex-col lg:items-center lg:fixed lg:top-0">
                    <iframe
                        src="https://discord.com/widget?id=1300848335401390161&theme=dark"
                        width="350"
                        height="500"
                        allowTransparency="true"
                        frameBorder="0"
                        className=""
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </div>
                <div className="flex items-center justify-center flex-col p-5 lg:flex-row lg:min-h-screen lg:pb-0">
                    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
                        <div className="relative w-fit mx-auto">
                            <RandomDecorations />
                            <img className="rounded-full ml-auto mr-auto" src={Picture} alt="Profile" />
                        </div>
                        <h2 className="mb-4  mt-12 text-2xl text-center text-white w-[300px] text-nowrap overflow-hidden">
                            <span>
                                <Typewriter
                                    words={[
                                        "@JajouGoat 💙",
                                        "16",
                                        "Développeur Web Junior 💻",
                                        "Youtubeur, Speedruner et Streamer 🔴",
                                        "J'aime l'astronomie ✨",
                                        "Il/Lui",
                                        "@Aiko<3"
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
                    </div>
                    <div className="flex flex-col text-center mt-12 lg:ml-36">
                        <Links url="https://www.youtube.com/channel/UCklgbYjsc56knjG_czbzF6g" content="Youtube" css="mb-4 border-4 border-red-500 py-3 px-[120px] rounded-2xl text-white bg-red-600 lg:px-[180px]" />
                        <Links url="https://www.twitch.tv/jajougoat" content="Twitch" css="mb-4 border-4 border-fuchsia-600 py-3 rounded-2xl text-white bg-purple-600" />
                        <Links url="https://www.tiktok.com/@jajougoat" content="Tiktok" css="mb-4 border-4 border-neutral-600 py-3 rounded-2xl text-white bg-zinc-800" />
                        <Links url="https://www.speedrun.com/fr-FR/users/Jajou" content="Speedrun" css="mb-4 border-4 border-amber-400 py-3 rounded-2xl text-white bg-yellow-500" />
                        <ClipboardButton />
                    </div>
                </div>
                <div className="flex flex-col items-center mt-12 lg:hidden">
                    <iframe
                        src="https://discord.com/widget?id=1300848335401390161&theme=dark"
                        width="350"
                        height="500"
                        allowTransparency="true"
                        frameBorder="0"
                        className=""
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default Component;
