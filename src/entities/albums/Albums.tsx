import { useFetchingQuery } from '@/hooks/useFetchingQuery';
import { API_URL_ALBUMS } from '@/libs/constants';
import { Image, Table, TableProps } from 'antd';
import { memo, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const columns: TableProps['columns'] = [
  {
    dataIndex: 'image',
    key: 'image',
    align: 'center',
    render: (image) => (image ? <Image src={image} height="50px" /> : 'N/A'),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Release date',
    dataIndex: 'releasedate',
    key: 'releasedate',
  },
];

const Albums = memo(() => {
  const navigate = useNavigate();

  const artist_name = useParams();

  const params = useMemo(() => ({ artist_name: artist_name.id }), [artist_name]);

  const { data, isLoading } = useFetchingQuery({
    url: API_URL_ALBUMS,
    params,
    queryKey: ['albums', artist_name.id ?? ''],
  });

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={isLoading}
      onRow={({ name }) => ({
        onClick() {
          navigate(name);
        },
      })}
    />
  );
});

export default Albums;
