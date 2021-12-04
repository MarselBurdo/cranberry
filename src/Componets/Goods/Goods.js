import { Button, Checkbox, Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGoodsToTable } from "../../redux/selectors";

const columns = [
  {
    title: "Name",
    dataIndex: "name",

    // render: (text) => <a>{text}</a>,//unique item
  },
  {
    title: "Executor",
    dataIndex: "executor",
  },
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Reserve",
    dataIndex: "reserve",
    render: (text) => (
      <Checkbox disabled checked={text}>
        {text}
      </Checkbox>
    ),
  },
];

export default function Goods() {
  const dataSourse = useSelector(getGoodsToTable);
  const navigate = useNavigate();

  console.log(dataSourse);

  return (
    <>
      <Button onClick={() => navigate("/goods/add")}>Add item</Button>
      <Table columns={columns} dataSource={dataSourse} rowKey={"id"} />
    </>
  );
}
