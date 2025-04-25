import Toolbar from '@/components/Toolbar';
import { useFetchingQuery } from '@/hooks/useFetchingQuery';
import { API_URL_ARTISTS } from '@/libs/constants';
import { Image, Table, TableProps } from 'antd';
import { memo, useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useFetchingQuery({
    url: API_URL_ARTISTS,
    queryKey: ['artists'],
    page: currentPage,
  });

  return (
    <section>
      <Toolbar title="Исполнители" />

      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        onRow={({ name }) => ({
          onClick() {
            navigate(name);
          },
        })}
        pagination={{
          showSizeChanger: false,
          onChange: (page) => setCurrentPage(page),
          current: currentPage,
          pageSize: 20,
          position: ['bottomCenter'],
          showTotal: (total) => `Найдено ${total}`,
          size: 'default',
        }}
      />
    </section>
  );
});

export default Artists;
