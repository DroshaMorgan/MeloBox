import { API_URL_ARTISTS, CLIENT_ID } from "@/libs/constants";
import { Image, Table, TableProps } from "antd";
import axios from "axios";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
    const navigate = useNavigate()

    const [dataFetchArt, setDataFetchArt] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchingArt() {
        try {
            const { data } = await axios.get(API_URL_ARTISTS, {
                params: {
                    client_id: CLIENT_ID
                }
            })
            setDataFetchArt(data.results)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchingArt()
    }, [])

    return (
        <Table columns={columns}
            dataSource={dataFetchArt}
            loading={loading}
            onRow={({ name }) => ({
                onClick() {
                    navigate(`albums/${name}`)
                }
            })}
        />
    );
});

export default Artists;