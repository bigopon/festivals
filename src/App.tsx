import { RecordListing } from './components/RecordListing';
import { useFetchFestival } from './hooks/useFetchFestivals'
import { groupByRecordLabel } from './utils/groupByRecordLabel';

function App() {
  const { isLoading, isError, data } = useFetchFestival();

  if (typeof data?.map !== 'function') {
    console.log(data);
  }

  const groupedData = groupByRecordLabel(data ?? []);
  
  if (isError) {
    return <>Error loading data. todo</>
  }

  return (
    <div className="App">
      {isLoading
        ? <>...loading</>
        : <RecordListing record={groupedData} />
      }
    </div>
  )
}

export default App

