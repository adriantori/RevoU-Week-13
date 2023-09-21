import { Button, Form, Input, Space, Card, Select } from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

interface AccountLogin {
    name: string;
    status: string;
}

const initialValues = {
    name: '',
    status: ''
}

const validationSchema = yup.object({
    name: yup.string().required(),
    status: yup.string().required(),
})

const EditItem: React.FC = () => {

    const navigate = useNavigate();

    const handleSubmit = (values: AccountLogin) => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })


    return (
        <Card title="Edit Category" headStyle={{ textAlign: 'center' }}>
            <a href="">Back to Main Page</a>
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
                    name="status"
                    rules={[{ required: true, message: 'Select one of the status' }]}
                >
                    <Select
                        placeholder="Status"
                        value={formik.values.status}
                        onChange={formik.handleChange('status')}
                        status={formik.errors.status && 'error'}
                    >
                        <Select.Option value="active">Active</Select.Option>
                        <Select.Option value="deactive">Deactive</Select.Option>
                    </Select>
                </Form.Item>
                <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-around', width: "100%" }}>
                    <Button type="primary" htmlType="submit" style={{ width: "200px" }}>
                        Submit
                    </Button>
                    <Button onClick={() => {navigate('/')}} danger style={{ width: "200px" }}>
                        Return
                    </Button>
                </Space>
            </Form>
        </Card>
    );
};

export default EditItem;