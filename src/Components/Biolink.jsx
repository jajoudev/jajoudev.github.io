import Picture from "/assets/images/profile.png"

import { IoLogoTiktok, IoLogoYoutube, IoLogoTwitch, IoTrophy } from "react-icons/io5"

const links = [
    {
        id: 1,
        componentLogo: <IoLogoYoutube size={50} color="red" className="" />,
        href: "https://www.youtube.com/channel/UCklgbYjsc56knjG_czbzF6g"
    },
    {
        id: 2,
        componentLogo: <IoLogoTwitch size={50} color="purple" />,
        href: "https://www.twitch.tv/jajougoat"
    },
    {
        id: 3,
        componentLogo: <IoLogoTiktok size={50} color="cyan" />,
        href: "https://www.tiktok.com/@jajougoat"
    },
    {
        id: 4,
        componentLogo: <IoTrophy size={50} color="yellow" />,
        href: "https://www.speedrun.com/fr-FR/users/Jajou"
    }
]

function Component() {
    return (
        <>
            <img src={Picture} alt="" />
            <p>Hello</p>
            {links.map((link) => (
                <div key={link.id}>
                    <a href={link.href}>{link.componentLogo}</a>
                </div>
            ))}
        </>


    )
}

export default Component