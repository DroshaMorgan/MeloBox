import { useFetching } from '@/hooks/useFetching';
import { API_URL_ALBUMS_FULL } from '@/libs/constants';
import { Image, Table, TableProps } from 'antd';
import { memo } from 'react';
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

  const { data, loading } = useFetching({
    url: API_URL_ALBUMS_FULL + artist_name.id,
  });

  console.log(API_URL_ALBUMS_FULL + artist_name.id);
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      onRow={({ name }) => ({
        onClick() {
          navigate(name);
        },
      })}
    />
  );
});

export default Albums;
