import { useState, useEffect } from 'react';
import { fetchRecord } from '../firebase/fetchRecord';


const useFetchRecords = (searchTerm) => {
  const [record, setRecord] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchRecord(searchTerm);
        setRecord(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [searchTerm]);

  return { record, loading, error };
};

export default useFetchRecords;
