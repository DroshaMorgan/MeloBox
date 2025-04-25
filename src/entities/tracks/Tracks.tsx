import Toolbar from '@/components/Toolbar';
import { useFetchingQuery } from '@/hooks/useFetchingQuery';
import { API_URL_TRACKS } from '@/libs/constants';
import { Image, Table, TableProps } from 'antd';
import { memo, useMemo, useState } from 'react';
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

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useFetchingQuery({
    url: API_URL_TRACKS,
    params,
    queryKey: ['tracks', name.id ?? ''],
    page: currentPage,
  });

  return (
    <section>
      <Toolbar title="Треки" back />

      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
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

export default Tracks;
