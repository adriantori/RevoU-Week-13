import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Card } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Text } from '../../components';
import { useNavigate } from 'react-router-dom';

interface AccountLogin {
    username: string;
    password: string;
}

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
})

const Login: React.FC = () => {

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
        <Card title="Please Login To Continue" headStyle={{ textAlign: 'center' }} style={{ width: '60vw' }}>
            <Form onFinish={formik.handleSubmit}>
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
                <Form.Item>
                    {formik.errors.password && (
                        <Text type='danger'>{formik.errors.password}</Text>
                    )}
                </Form.Item>
                <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <Button onClick={() => {navigate('/register')}} type="default" className="login-form-button">register now!</Button>
                </Space>
            </Form>
        </Card>
    );
};

export default Login;