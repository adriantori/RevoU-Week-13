import React, { useEffect, useState } from 'react';
import { Button, Card, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

interface Category {
    key: string;
    id: string;
    name: string;
    is_active: boolean;
}

interface GetCategoryResponse {
    categories:Category[],
    currentPage: number,
    totalItem: number,
    totalPage: number
}

const data: Category[] = [
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
    {
        key: '2',
        id: "ef2f13eb-a99c-4c0f-91c8-d3qwe3c390a3286",
        name: "mock category B",
        is_active: false,
    },
    {
        key: '3',
        id: "ef2f13eb-a99c-4c0f-91c8-d3qwe3c390a3286",
        name: "mock category B",
        is_active: false,
    },
    {
        key: '4',
        id: "ef2f13eb-a99c-4c0f-91c8-d3qwe3c390a3286",
        name: "mock category B",
        is_active: false,
    },
    {
        key: '5',
        id: "ef2f13eb-a99c-4c0f-91c8-d3qwe3c390a3286",
        name: "mock category B",
        is_active: false,
    },
];

const Datas: React.FC = () => {

    const columns: ColumnsType<Category> = [
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
            filters: [
                { text: 'Active', value: true },
                { text: 'Deactive', value: false },
            ],
            onFilter: (value, record) => record.is_active === value,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a><Button type='primary' onClick={() => navigate(`/edit/${record.id}}`)}>Edit</Button></a>
                    <a><Button type='primary' danger onClick={() => deleteItem(record.id)}>Delete</Button></a>
                </Space>
            ),
            onFilter: (value, record) => record.is_active === value,
        },
    ];
    
    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate();

    const getCategoryList = async () => {
        const fetching = await fetch('https://mock-api.arikmpt.com/api/category')
        const response: GetCategoryResponse = await fetching.json();
        setCategories(response.categories ?? []);
    }

    useEffect(
        () => {
            getCategoryList()
        },
        []
    )

    const deleteItem = (recordId: string) => {
        console.log(recordId);
    }

    const logout = () => {
        console.log("logged out");
    }

    return (
        <Card title="List of Category" style={{ height: '82vh' }} extra={
            <Space direction="horizontal" size="middle">
                <Button onClick={() => {navigate('/add')}}>Add Item</Button>
                <Button onClick={logout} danger>Log Out</Button>
            </Space>
        }>
            <Table
                columns={columns}
                dataSource={categories}
                pagination={{
                    defaultPageSize: 5,
                    total: data.length,
                    position: ['topCenter']
                }}
            />
        </Card>
    )
}

export default Datas;
