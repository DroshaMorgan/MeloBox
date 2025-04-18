import { useEffect, useState } from 'react';
import axios from 'axios';
import { CLIENT_ID } from '@/libs/constants';

interface UseFetchingOptions {
  url: string;
  params?: Record<string, unknown>;
}

export function useFetching({ url, params }: UseFetchingOptions) {
  const [data, setData] = useState<[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await axios.get(url, {
          params: { client_id: CLIENT_ID, ...params },
          signal: controller.signal,
        });
        setData(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [params, url]);

  return { data, loading, error };
}
