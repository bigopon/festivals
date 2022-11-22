import { useQuery } from "@tanstack/react-query"

export interface MusicFestival {
  name: string;
  bands: Band[]
}

export interface Band {
  name: string;
  recordLabel: string;
}

export const useFetchFestival = () => {
  return useQuery({
    queryKey: ['festivals'],
    queryFn: (context) => fetchFestival()
  })
}

const fetchFestival = async () => {
  const res = await fetch('/codingtest/api/v1/festivals', {
    headers: {
      accept: 'text/plain'
    }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch festival data. Inner message:\n${await res.text()}`);
  }

  return await res.json() as MusicFestival[];
}
