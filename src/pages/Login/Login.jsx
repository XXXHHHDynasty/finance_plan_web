import { useNavigate, useLocation, useHistory } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useState, useEffect } from 'react'
// import "/node_modules/antd/dist/antd.css";
import illustration from "../../images/WPIlogo.jpeg";
import "./login.css";

const axios = require('axios').default;
// import axios from 'axios';

const Login = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const location = useLocation();
    // const history = useHistory()

    // receive information from 'register' page
    useEffect(() => {
        form.setFieldsValue({
            username: location.state ? location.state.username : '',
            password: location.state ? location.state.password : ''
        })
    }, []);

    // navigate to 'register' Page
    const goSignup = () => {
        navigate('/signup', {})
    }

    // naviagte to 'Home' Page
    // const goHome = (username) => {
    //     navigate('/home', { username })
    // }
    const goHome = () => {
        navigate("/home", { username: form.getFieldValue("username") });
    };

    // submit users' information & naviagte to 'Home' page
    const onFinish = async (values) => {
        console.log('Success:', values);
        const { username, password } = values;

        try {
            const response = await axios.post('http://127.0.0.1:3007/api/login', {
                username,
                password,
            });

            if (response.data.status === 0) {
                message.success(response.data.message);
                goHome(username);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            message.error('Login failed. Please try again later.');
        }
    };


    // print message when login failed
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login-wrap'>
            <div className='login-wrap-center'>
                <div className='logo-wrap'>
                    <img src={illustration} className='.illustration' />
                </div>
                <div className='form-wrap'>
                    <div>
                        <div style={{ fontSize: 30, color: '#333' }}>Financial Self-Planning Tool</div>
                        <div style={{ fontSize: 15, color: '#333' }}>Welcome to log in</div>
                    </div>
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username',
                                },
                            ]}
                        >
                            <Input placeholder='input username' />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password',
                                },
                            ]}
                        >
                            <Input.Password placeholder='input password' />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            {/* <Button style={{ width: '100%' }} onClick={() => {
                                form
                                    .validateFields()
                                    .then((values) => {
                                        form.resetFields();
                                        onFinish(values);
                                    })
                                    .catch((info) => {
                                        console.log('Validate Failed:', info);
                                    });
                            }} type="primary" htmlType="submit"> */}
                            <Button
                                style={{ width: '100%' }}
                                type="primary"
                                // onClick={goHome}
                                htmlType="submit"
                            >
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="loginOtherSelection">
                        <div style={{ fontSize: 12, color: '#666', padding: '4px 15px 4px 15px' }}>Don't have an account?</div>
                        <div className="buttonColletion">
                            <Button type="link" style={{ fontSize: 12 }} onClick={goSignup}>create a new account</Button>
                            <Button type="link" style={{ fontSize: 12 }} onClick={goHome}>Enter as anonymous user</Button>
                            {/* <Button type="link" style={{ fontSize: 12 }} onClick={goHome} htmlType="button">
                                Enter as anonymous user
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;