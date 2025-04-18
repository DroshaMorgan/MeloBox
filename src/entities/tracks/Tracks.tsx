import { useFetching } from '@/hooks/useFetching';
import { API_URL_TRACKS } from '@/libs/constants';
import { Image, Table, TableProps } from 'antd';
import { memo } from 'react';
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
  {
    title: 'Release date',
    dataIndex: 'releasedate',
    key: 'releasedate',
  },
];

const Tracks = memo(() => {
  const name = useParams();

  const { data, loading } = useFetching({
    url: API_URL_TRACKS + name.id,
  });

  console.log(data, API_URL_TRACKS + name.id);

  return <Table columns={columns} dataSource={data} loading={loading} />;
});

export default Tracks;
