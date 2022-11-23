export interface MusicFestival {
  name: string;
  bands: FestivalBandRecord[];
}

export interface FestivalBandRecord {
  name: string;
  recordLabel: string;
}

export type GroupedByRecordLabel = Record<string, BandFestivalAttendance>;

export type BandFestivalAttendance = Record<string, string[]>;
