import { useEffect, useState } from "react";
import axios from "axios";
import { CLIENT_ID } from "@/libs/constants";

interface UseFetchingOptions {
  url: string;
  params?: Record<string, unknown>;
}

export function useFetching({ url, params }: UseFetchingOptions) {
  const [data, setData] = useState<[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await axios.get(url, {
          params: { client_id: CLIENT_ID, ...params },
        });
        if (isMounted) {
          setData(response.data.results);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [params, url]);

  return { data, loading, error };
}
