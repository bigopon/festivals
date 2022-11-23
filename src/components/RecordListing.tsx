import { GroupedByRecordLabel } from "../types"

export interface RecordListingProps {
  record: GroupedByRecordLabel;
}

export const RecordListing = ({ record }: RecordListingProps) => {
  return <ul>
    {Object.keys(record).map(companyName => <li>
      {companyName}
      <ul>
        {Object.keys(record[companyName]).map(bandName => {
          return <li>
            {bandName}
            {record[companyName][bandName]?.length > 0 &&
              <ul>{record[companyName][bandName].map(festival => <li>{festival}</li>)}</ul>
            }
          </li>
        })}
      </ul>
    </li>)}
  </ul>
}
