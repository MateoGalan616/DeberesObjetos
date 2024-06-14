import { List, DateField, TextField, useTable } from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export const ProductsList: React.FC = () => {
  const { tableProps } = useTable({
    resource: 'products', // Nombre del recurso en tu backend
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column dataIndex="description" title={"Description"} />
        <Table.Column dataIndex="price" title={"Price"} />
        <Table.Column dataIndex="status" title={"Status"} />
        <Table.Column dataIndex={["createdAt"]} title={"Created at"} render={(value: any) => <DateField value={value} />} />
      </Table>
    </List>
  );
};
