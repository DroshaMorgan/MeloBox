import { Image, Table, TableProps } from "antd";
import { memo, useEffect, useState } from "react";

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
    const [dataFetchArt, setDataFetchArt] = useState([]);
    const fetchingArt = async () => {
        try {
            const resp = await fetch(API_URL_ARTISTS);
            const respData = await resp.json();
            setDataFetchArt(respData.results);
        } catch (e: unknown) {
            console.log(e)
        }
    }
    console.log(dataFetchArt)

    useEffect(() => { fetchingArt() }, [])
    return (
        <Table columns={columns} dataSource={dataFetchArt} />
    );
});

export default Artists;