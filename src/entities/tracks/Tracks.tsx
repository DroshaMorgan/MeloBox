import { useFetching } from '@/hooks/useFetching';
import { API_URL_TRACKS } from '@/libs/constants';
import { Image, Table, TableProps } from 'antd';
import { memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';

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
];

const Tracks = memo(() => {
  const name = useParams();

  const params = useMemo(() => ({ name: name.id }), [name]);

  const { data, loading } = useFetching({
    url: API_URL_TRACKS,
    params,
  });

  return <Table columns={columns} dataSource={data} loading={loading} />;
});

export default Tracks;
