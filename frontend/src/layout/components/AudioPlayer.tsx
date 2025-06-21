import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect, useRef } from "react";


const AudioPlayer = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const prevSongRef = useRef<string | null>(null);


    const { currentSong, isPlaying,playNext} = usePlayerStore();

    // to handle play and pause

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);


    //handle song ends 
    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            playNext()
        }

        audio?.addEventListener("ended",handleEnded)

        return () => audio?.removeEventListener("ended",handleEnded)
    },[playNext]);

    // handle song changes

    useEffect(()=>{
        if(!audioRef.current || !currentSong) return;
        const audio = audioRef.current;

    // check if this is actually a new song 
    const isSongChange = prevSongRef.current !== currentSong?.audioUrl;
    if(isSongChange){
      audio.src = currentSong?.audioUrl;
    //   reset the playback position 
      audio.currentTime = 0;
      // update the prev song ref
      prevSongRef.current = currentSong?.audioUrl;
    
    if(isPlaying){
      audio.play();
    }
}
    },[currentSong])

  return <audio ref={audioRef} />;
}

export default AudioPlayer