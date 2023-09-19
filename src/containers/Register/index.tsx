import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Card } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface AccountRegister {
    name: string;
    username: string;
    password: string;
}

const initialValues = {
    name: '',
    username: '',
    password: ''
}

const validationSchema = yup.object({
    name: yup.string().required('Name must exist'),
    username: yup.string().required('Username must exist'),
    password: yup.string().required('Password must exist')
})

const Register: React.FC = () => {

    const handleSubmit = (values: AccountRegister) => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })


    return (
        <Card title="Please Register To Our Platform" headStyle={{ textAlign: 'center' }} style={{ width: '60vw' }}>
            <Form onFinish={formik.handleSubmit}>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange('name')}
                        status={formik.errors.name && 'error'}
                    />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange('username')}
                        status={formik.errors.username && 'error'}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        status={formik.errors.password && 'error'}
                    />
                </Form.Item>
                <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                    <a href=""><Button type="default" className="login-form-button">Login now!</Button></a>
                </Space>
            </Form>
        </Card>
    );
};

export default Register;