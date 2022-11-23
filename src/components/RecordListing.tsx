import { GroupedByRecordLabel } from "../types"

export interface RecordListingProps {
  record: GroupedByRecordLabel;
}

export const RecordListing = ({ record }: RecordListingProps) => {
  return <ul>
    {Object.entries(record).map(([companyName, bandFestivalRecord]) =>
      <RecordListingItem key={companyName} companyName={companyName} bandFestivalRecord={bandFestivalRecord} />)}
  </ul>
}

interface RecordListingItemProps {
  companyName: string;
  bandFestivalRecord: Record<string, string[]>;
}

const RecordListingItem = ({ companyName, bandFestivalRecord }: RecordListingItemProps) => {
  return <li key={companyName}>
    <CompanyBandFestivalRecords name={companyName} bandFestivalRecord={bandFestivalRecord} />
  </li>
}

interface CompanyBandFestivalRecordsProps {
  name: string;
  bandFestivalRecord: Record<string, string[]>;
}

const CompanyBandFestivalRecords = ({ name, bandFestivalRecord }: CompanyBandFestivalRecordsProps) => {
  return <>
    🎼 {name || 'Self register'}
      <ul>
        {Object.keys(bandFestivalRecord).map(bandName => {
          const festivals = bandFestivalRecord[bandName];
          return festivals?.length > 0
            ? <li key={bandName}>
              Band: {bandName}
              <BandFestivalRecord festivals={festivals} />
            </li>
            : null
        })}
      </ul>
  </>
}

interface BandFestivalRecordProps {
  festivals: string[]
}

const BandFestivalRecord = ({ festivals }: BandFestivalRecordProps) => {
  return <ul>{festivals.map(festival => <li key={festival}>{festival}</li>)}</ul>
}
