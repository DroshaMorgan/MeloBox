import { useFetching } from "@/hooks/useFetching";
import { Image, Table, TableProps } from "antd";
import { memo, useEffect } from "react";

const API_URL_ARTISTS =
    'https://api.jamendo.com/v3.0/artists/?client_id=e1ba0143';

const columns: TableProps['columns'] = [
    {
        dataIndex: 'image',
        key: 'image',
        align: 'center',
        render: (image) => image ? <Image src={image} height="50px" /> : 'N/A',
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
    const { dataFetch, fetching } = useFetching(API_URL_ARTISTS)
    console.log(dataFetch)
    useEffect(
        () => {
            fetching()
        }, []);

    return (
        <Table columns={columns} dataSource={dataFetch} />
    );
});

export default Artists;