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

    if (!festival.name) {
      // imaginary logger here
      // Err: missing festival name
      return grouped;
    }

    festival.bands.forEach(({ recordLabel, name: bandName }) => {
      if (!recordLabel) {
        // imaginary logger here
        // warning: missing company name // maybe distinguish between empty string vs undefined?
        recordLabel = '';
      }
      const companyRecords = grouped[recordLabel] ??= {};
      const bandFestivalRecords = companyRecords[bandName] ??= [];

      bandFestivalRecords.push(festival.name);
    });

    return grouped;
  }, {});
  
  const sorted = Object.keys(grouped).sort().reduce((sorted: GroupedByRecordLabel, name) => {
    sorted[name] = grouped[name];
    return sorted;
  }, {})

  return sorted;
}
