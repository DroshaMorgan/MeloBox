import { API_URL_ALBUMS_FULL, CLIENT_ID } from "@/libs/constants";
import { Image, Table, TableProps } from "antd";
import axios from "axios";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
    },
    {
        title: 'Release date',
        dataIndex: 'releasedate',
        key: 'releasedate',
    },
];

const Albums = memo(() => {
    const [dataFetchAlb, setDataFetchAlb] = useState([]);
    const [loading, setLoading] = useState(true);

    const artist_name = useParams();

    async function fetchingAlb() {
        try {
            const { data } = await axios.get(API_URL_ALBUMS_FULL + artist_name.id, {
                params: {
                    client_id: CLIENT_ID
                }
            })
            setDataFetchAlb(data.results)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchingAlb()
    }, [])

    return (
        <Table columns={columns}
            dataSource={dataFetchAlb}
            loading={loading}
        />
    );
});

export default Albums;