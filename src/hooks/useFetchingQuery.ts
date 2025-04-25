import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CLIENT_ID } from '@/libs/constants';

interface UseFetchingQueryProps {
  url: string;
  params?: Record<string, unknown>;
  page: number;
  page_size?: number;
  queryKey: string[];
}

export function useFetchingQuery({
  url,
  params = {},
  page,
  page_size = 20,
  queryKey,
}: UseFetchingQueryProps) {
  return useQuery({
    queryKey: [...queryKey, page],
    queryFn: async () => {
      const { data } = await axios.get(url, {
        params: {
          client_id: CLIENT_ID,
          ...params,
          limit: 'all',
          offset: (page - 1) * page_size,
        },
      });
      return data.results;
    },
  });
}
