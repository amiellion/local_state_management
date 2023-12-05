//Dependencies
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import PageContainer from "../components/PageContainer"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux";
import { USER_SLICE_ACTIONS } from "../store/user/slice";

function EditProfile() {

    // get state from redux using useSelectorHook
    // state = object || view src/store for the keys (configured within combineReducers) 
    const { USER_DETAILS } = useSelector(state => state.user);

    const setUserProfile = (values) => {
        dispatch(USER_SLICE_ACTIONS.setState(values))
    }

    const dispatch = useDispatch();
    const [formInstance] = Form.useForm();

    const onFinish = (values) => {
        console.log("🚀 ~ file: EditProfile.jsx:22 ~ onFinish ~ values:", values)
        setUserProfile(values)
        // setUserProfile(state => {
        //     console.log("🚀 ~ file: EditProfile.jsx:18 ~ onFinish ~ state:", state);

        //     return ({
        //         ...values
        //     });
        // });
        alert("Redux State Updated!")
        console.log("I SUCCEEDED");
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("I FAILED");
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        formInstance.setFieldsValue({
            ...USER_DETAILS
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
                <p style={{ marginTop: -3 }}>Redux Implementation</p>
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