import { Button, Form, Input } from "antd";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"

//components
import PageContainer from "../components/PageContainer";

//store
import { MainContext } from "../Provider";


function EditProfile() {

    // get actions, state values from context || src\Provider\index.jsx
    const { userProfile, setUserProfile } = useContext(MainContext);

    //antD specific form instance
    const [formInstance] = Form.useForm();

    const onFinish = (values) => {
        console.log("🚀 ~ file: EditProfile.jsx:18 ~ onFinish ~ values:", values)
        setUserProfile(state => {
            console.log("🚀 ~ file: EditProfile.jsx:19 ~ onFinish ~ state:", state)
            return ({
                ...values
            });
        });
        alert("Context State Updated!")
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        formInstance.setFieldsValue({
            ...userProfile
        });
    }, []);



    return (
        <PageContainer>
            <div
                style={{
                    marginBottom: "5%"
                }}
            >
                <h1 style={{ marginBottom: 0 }}>Edit User Profile</h1>
                <p style={{ marginTop: -3 }}>useContext Implementation</p>
                <p style={{ marginTop: -3 }}>Go to <Link to="/view_profile">View Profile</Link> to see changes</p>
            </div>
            <Form
                form={formInstance}
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                initialValues={{
                    remember: true,
                }}
                style={{
                    width: "max-content",
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
        </PageContainer>
    );
}

export default EditProfile;