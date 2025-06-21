import type { Song } from "@/types";
import {create } from "zustand";



interface PlayerStore {
    currentSong: Song | null;
    isPlaying: boolean;
    queue: Song[];
    currentIndex: number;

    initializeQueue: (songs: Song[]) => void;
    playAlbum: (songs: Song[],startIndex?: number) => void;
    setCurrentSong: (song: Song | null ) => void;
    togglePlay: () => void;
    playPrevious: () => void;
    playNext: () => void;
}

export const usePlayerStore = create<PlayerStore>((set,get)=> ({
    currentSong: null,
    isPlaying: false,
    queue: [],
    currentIndex: -1,


    initializeQueue: (songs) =>{},
   playAlbum: (songs: Song[], startIndex?: number) => {},
   setCurrentSong: (song: Song | null) => {},
   togglePlay: () => {},
   playNext: () => {},
   playPrevious: () => {},
    }))