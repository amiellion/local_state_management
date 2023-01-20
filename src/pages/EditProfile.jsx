import { Button, Form, Input, Checkbox } from "antd";
import { useContext, useEffect } from "react";
import { MainContext } from "../Provider";


/*

    SPREAD OPPERATOR "..."; arrays || objects

    const array1 = [1,2]
    const array2 = [...array1] === [1,2]


    const object1  = {
        key1: value1,
        key2: value2
    }
    const object2  = {...object1} = {
        key1: value1,
        key2: value2
    }
*/

function EditProfile() {

    const { userProfile, setUserProfile } = useContext(MainContext);
    const [formInstance] = Form.useForm();

    const onFinish = (values) => {
        setUserProfile(state => {
            console.log("🚀 ~ file: EditProfile.jsx:37 ~ onFinish ~ state", state);
            return ({
                ...values
            });
        });
        console.log("I SUCCEEDED");
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("I FAILED");
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        formInstance.setFieldsValue({
            ...userProfile
        });
    }, []);



    return (
        <Form
            form={formInstance}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Age"
                name="age"
                rules={[
                    {
                        required: true,
                        message: 'Please input your age!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default EditProfile;