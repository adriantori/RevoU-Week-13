import React from 'react';
import { Button, Card, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    id: string;
    name: string;
    is_active: boolean;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <span>{text}</span>,
        sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: 'Status',
        dataIndex: 'is_active',
        key: 'is_active',
        render: (isActive) => (
            <span>{isActive ? 'Active' : 'Deactive'}</span>
        ),
        sorter: (a) => (a.is_active ? 1 : -1),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a><Button type='primary'>Edit</Button></a>
                <a><Button type='primary' danger>Delete</Button></a>
            </Space>
        ),
        onFilter: (value, record) => record.is_active === value,
    },
];

const data: DataType[] = [
    {
        key: '0',
        id: "ef2f13eb-a99c-4c0f-91c8-asdd33c390a3286",
        name: "mock category A",
        is_active: true,
    },
    {
        key: '1',
        id: "ef2f13eb-a99c-4c0f-91c8-d3qwe3c390a3286",
        name: "mock category B",
        is_active: false,
    },
];

const Datas: React.FC = () => {

    return (
        <Card title="List of Category" style={{ height: '78vh' }}>
            <Table columns={columns} dataSource={data} />

                <Space direction="horizontal" size="middle" style={{ 
                    display: 'flex', justifyContent: 'space-evenly', width: '100%', position: 'absolute', bottom:'20px'
                }}>
                    <Button>Add Item</Button>
                    <Button danger>Log Out</Button>
                </Space>
        </Card>
    )
}

export default Datas;
