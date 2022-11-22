import { useState } from 'react'
import { useFetchFestival } from './hooks/useFetchFestivals'

function App() {
  const [count, setCount] = useState(0)
  const { isLoading, isError, data } = useFetchFestival();

  console.log(data);

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
