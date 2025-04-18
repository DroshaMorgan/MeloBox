// hooks/useFetching.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CLIENT_ID } from '@/libs/constants';

interface UseFetchingQueryOptions {
  url: string;
  params?: Record<string, unknown>;
  queryKey: string[];
}

export function useFetchingQuery({ url, params, queryKey }: UseFetchingQueryOptions) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await axios.get(url, {
        params: { client_id: CLIENT_ID, ...params },
      });
      return response.data.results;
    },
  });
}
