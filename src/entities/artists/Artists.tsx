import { useFetching } from "@/hooks/useFetching";
import { API_URL_ARTISTS } from "@/libs/constants";
import { Image, Table, TableProps } from "antd";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const columns: TableProps["columns"] = [
  {
    dataIndex: "image",
    key: "image",
    align: "center",
    render: (image) => (image ? <Image src={image} height="50px" /> : "N/A"),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name) => name,
  },
  {
    title: "Join date",
    dataIndex: "joindate",
    key: "joindate",
    render: (joindate) => joindate,
  },
];

const Artists = memo(() => {
  const navigate = useNavigate();

  const { data, loading } = useFetching({
    url: API_URL_ARTISTS,
  });

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      onRow={({ name }) => ({
        onClick() {
          navigate(`albums/${name}`);
        },
      })}
    />
  );
});

export default Artists;
