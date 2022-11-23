import { MusicFestival } from "../types";

/* 
  example grouped data:
  {
    comapny_1: {
      band_1: ['fest 1', 'fest 2']
    }
  }
 */

export type GroupedByRecordLabel = Record<string, BandFestivalAttendance>;

export type BandFestivalAttendance = Record<string, string[]>

export const groupByRecordLabel = (data: MusicFestival[]) => {
  const grouped = data.reduce((grouped: GroupedByRecordLabel, festival) => {

    festival.bands.forEach(({ recordLabel, name: bandName }) => {
      const companyRecords = grouped[recordLabel] ??= {};
      const bandFestivalRecords = companyRecords[bandName] ??= [];

      bandFestivalRecords.push(festival.name);
    });

    return grouped;
  }, {});

  return grouped;
}
