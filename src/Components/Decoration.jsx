import { useState, useEffect } from "react"

const decorations = [
    "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/constellations.png",
    "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/shower_stroll.png",
    "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/millennium_falcon_hyperdrive.png",
    'https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/press_f_black.png',
    "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/egg.png",
    'https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/starlight_whales.png',
    "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/head_in_the_clouds.png",
    "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/mirage_twilight.png"
]

function Component() {
    const [url, setUrl] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * decorations.length);
        setUrl(decorations[randomIndex])
    }, [])


    return url ? <img className="absolute -bottom-[20px] -right-[28px] z-10 w-[315px] max-w-none" src={url} alt="" /> : null
}

export default Component