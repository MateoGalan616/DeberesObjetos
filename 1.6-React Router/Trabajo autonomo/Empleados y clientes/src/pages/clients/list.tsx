import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import React from "react";

interface Client extends BaseRecord {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const data: Client[] = [
  {
    id: 1,
    name: "Fernando Diaz",
    address: "Calle 6, 1-23, 4-12",
    email: "fernandodiaz@gmail.com",
    phone: "0969012508",
  },
  {
    id: 2,
    name: "Pamela Becerra",
    address: "Calle 5, 21-2, 3-2",
    email: "PamelaBecerra@gmail.com",
    phone: "0987343227",
  },
];

export const ClientList: React.FC = () => {
  const { tableProps } = useTable<Client>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id" dataSource={data}>
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="address" title="Address" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column dataIndex="phone" title="Phone" />
        <Table.Column
          title="Actions"
          render={(text, record: Client) => (
            <Space>
              <EditButton size="small" recordItemId={record.id} />
              <ShowButton size="small" recordItemId={record.id} />
              <DeleteButton size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
