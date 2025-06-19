export interface Song {
    id: string,
    title: string,
    artist: string,
    albumId: string | null,
    imageUrl: string,
    duration: number,
    audioUrl: string,
    createdAt: string,
    updatedAt: string,
}

export interface Album {
    _id: string,
    title: string,
    imageUrl: string,
    artist: string,
    releaseYear: number,
    songs: Song[]
}
