import ZZZIcon from "/assets/images/zzz-icon.png"

const gameUIDs = {
    zenlessZoneZero: "1504766725",
}

function Component() {
    const copyToClipboard = (uid) => {
        navigator.clipboard.writeText(uid).then(() => {
            alert("UID copied to clipboard")
        })
    }

    return (
        <div>
            <button className="hidden mb-4 border-4 border-neutral-500 py-4 px-[120px] rounded-2xl text-white bg-neutral-600 lg:px-[180px] lg:block" onClick={() => copyToClipboard(gameUIDs.zenlessZoneZero)}>Copy Zenless Zone Zero UID's</button>
            <img src={ZZZIcon} className="w-24 lg:hidden" onClick={() => copyToClipboard(gameUIDs.zenlessZoneZero)} />
        </div>
    )
}

export default Component