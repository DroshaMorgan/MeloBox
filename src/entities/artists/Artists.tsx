import { useFetchingQuery } from '@/hooks/useFetchingQuery';
import { API_URL_ARTISTS } from '@/libs/constants';
import { Image, Table, TableProps } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

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
    render: (name) => name,
  },
  {
    title: 'Join date',
    dataIndex: 'joindate',
    key: 'joindate',
    render: (joindate) => joindate,
  },
];

const Artists = memo(() => {
  const navigate = useNavigate();

  const { data, isLoading } = useFetchingQuery({
    url: API_URL_ARTISTS,
    queryKey: ['artists'],
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

export default Artists;
