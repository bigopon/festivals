export interface MusicFestival {
  name: string;
  bands: FestivalBandRecord[];
}

export interface FestivalBandRecord {
  name: string;
  recordLabel: string;
}
