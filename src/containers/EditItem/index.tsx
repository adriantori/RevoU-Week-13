import { Button, Form, Input, Space, Card, Select } from 'antd';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../Provider/AppProvider';
import * as yup from 'yup';

interface AccountLogin {
    name: string;
    is_active: string;
}

const initialValues = {
    name: '',
    is_active: ''
}

const validationSchema = yup.object({
    name: yup.string().required(),
    is_active: yup.string().required(),
})

const EditItem: React.FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { token } = useContext(AppContext)

    if (!token) {
        alert("Please login beforehand!")
        navigate('/login');
    }

    const handleSubmit = async (values: AccountLogin) => {
        const newValues = {
            id, ...values
        }
        try {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newValues)
            });
            if (!fetching.ok) {
                throw new Error('Error adding category');
            }
            alert('Edit successful!');
            // navigate('/');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })


    return (
        <Card title="Edit Category" headStyle={{ textAlign: 'center' }}>
            <a onClick={() => { navigate('/') }}>Back to Main Page</a>
            <Form onFinish={formik.handleSubmit}>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Name must exist' }]}
                >
                    <Input
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange('name')}
                        status={formik.errors.name && 'error'}
                    />
                </Form.Item>
                <Form.Item
                    name="is_active"
                    rules={[{ required: true, message: 'Select one of the status' }]}
                >
                    <Select
                        placeholder="Status"
                        value={formik.values.is_active}
                        onChange={formik.handleChange('is_active')}
                        status={formik.errors.is_active && 'error'}
                    >
                        <Select.Option value="true">Active</Select.Option>
                        <Select.Option value="false">Deactive</Select.Option>
                    </Select>
                </Form.Item>
                <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-around', width: "100%" }}>
                    <Button type="primary" htmlType="submit" style={{ width: "200px" }}>
                        Submit
                    </Button>
                </Space>
            </Form>
        </Card>
    );
};

export default EditItem;