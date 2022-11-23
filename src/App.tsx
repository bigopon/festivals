import { useState } from 'react'
import { useFetchFestival } from './hooks/useFetchFestivals'
import { groupByRecordLabel } from './utils/groupByRecordLabel';

function App() {
  const [count, setCount] = useState(0)
  const { isLoading, isError, data } = useFetchFestival();

  if (typeof data?.map !== 'function') {
    console.log(data);
  }

  const groupedData = groupByRecordLabel(data ?? []);
  console.log(groupedData);

  // todo:
  // - group band by record label name
  // - sort alphabetically

  return (
    <div className="App">
      <ul>
        {data?.map((festival, i) => <li key={`${festival.name}-${i}`}>
          {festival.bands.map(b => b.name).join(', ')}
        </li>)}
      </ul>
    </div>
  )
}

export default App

