import { useState, useEffect } from "react";

const musics = [
  "/assets/music/TOKYO_GAMES.mp3",
  "/assets/music/HEAVY_LOVE.mp3",
  "/assets/music/AMOUR_FUNK.mp3",
  "/assets/music/熱風 - HATSUNE MIKU.mp3",
  "/assets/music/Urus.mp3",
  "/assets/music/Pas_bete.mp3"
];

function RandomBackgroundMusic() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);
  const [volume, setVolume] = useState(0.5);

  // Choisir une musique aléatoire
  const loadRandomMusic = () => {
    const randomIndex = Math.floor(Math.random() * musics.length);
    const newAudio = new Audio(musics[randomIndex]);
    newAudio.loop = true;
    newAudio.volume = volume;

    if (audio) {
      audio.pause();
    }

    setAudio(newAudio);

    if (isPlaying !== false) {
      newAudio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    loadRandomMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
  }, [volume, audio]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return audio ? (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-4 z-50">
      <button onClick={togglePlay} className="text-white font-semibold">
        {isPlaying ? "⏸ Pause" : "▶️ Play"}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-[100px]"
      />

      <button onClick={loadRandomMusic} className="text-white text-sm font-medium px-3 py-1 bg-white/20 rounded hover:bg-white/30">
        🔀 Nouvelle musique
      </button>

      <span className="text-sm italic truncate max-w-[180px]">
        {audio.src.split("/").pop()}
      </span>
    </div>
  ) : null;
}

export default RandomBackgroundMusic;
