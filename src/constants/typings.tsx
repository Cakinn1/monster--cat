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

export interface Artist {
  id: number;
  name: string;
  picture: string;
  tracklist: string;
  type: string;
}

export interface Albumn {
  cover: string;
  md5_image: string;
  title: string;
  type: string;
  tracklist: string;
}


export interface TrackProps {
  id: number;
  preview: string;
  rank: number;
  title: string;
  title_short: string;
  type: string;
  album: Albumn;
  artist: Artist;
  result: number;
  handleSection: (value: string) => void;
  isSelected: string;
}
