export interface MusicProps {
  id: number;
  preview: string;
  rank: number;
  title: string;
  title_short: string;
  type: string;
  album: Albumn;
  artist: Artist;
}

interface Artist {
  id: number;
  name: string;
  picture: string;
  tracklist: string;
  type: string;
}

interface Albumn {
  cover: string;
  md5_image: string;
  title: string;
  type: string;
  tracklist: string;
}
