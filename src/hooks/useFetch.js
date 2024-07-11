import { useEffect, useState } from 'react'

/* Functions that start with 'use' are treated as hooks */
export function useFetch(fetchFn, initialValue){
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);


    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      /* Returning the state values */
      return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
}