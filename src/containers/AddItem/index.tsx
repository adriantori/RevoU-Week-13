import { Button, Form, Input, Space, Card, Select } from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { AppContext } from '../../Provider/AppProvider';
import { useContext } from 'react';

interface AccountLogin {
    name: string;
    status: string;
}

const initialValues = {
    name: '',
    status: ''
}

const AddItem: React.FC = () => {

    const navigate = useNavigate();
    
    const { isNameUnique } = useContext(AppContext);
      
    const handleSubmit = (values: AccountLogin) => {
        console.log(values);
    }

    const nameUniquenessValidation = async (name: string) => {
        return isNameUnique(name);
      };
      
      const validationSchema = yup.object({
        name: yup
          .string()
          .required('Name must exist')
          .test('is-unique', 'Name must be unique', async function (value) {
            if (!value) return false; 
            const isUnique = await nameUniquenessValidation(value);
            return isUnique;
          }),
        status: yup.string().required('Select one of the status'),
      });

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })


    return (
        <Card title="Add New Category" headStyle={{ textAlign: 'center' }}>
            <a onClick={() => { navigate('/') }}>Back to Main Page</a>
            <Form onFinish={formik.handleSubmit}>
                <Form.Item
                    name="name"
                    hasFeedback
                    validateStatus={formik.touched.name && formik.errors.name ? 'error' : 'success'}
                    help={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
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
                </Space>
            </Form>
        </Card>
    );
};

export default AddItem;