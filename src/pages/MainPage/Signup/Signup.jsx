import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
// import '/node_modules/antd/dist/antd.css';
import illustration from '../../../images/WPIlogo.jpeg';
import './signup.css';
import axios from 'axios';

const Signup = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate()

  // navigate to 'login' page
  const goLogin = () => {
    navigate('/', {})
  }

  // complete form & naviagte to 'login' page with data
  // const onFinish = (values) => {
  //   console.log('Success:', values);
  //   navigate('/', { state: values })
  // };

  const onFinish = async (values) => {
    console.log('Success:', values);
    const { username, password, Confirm } = values;

    try {
        const response = await axios.post('http://127.0.0.1:3007/api/reguser', {
            username: username,
            password: password,
        });

        if (response.data.status === 0) {
            message.success(response.data.message);
            goLogin(username);
        } else {
            message.error(response.data.message);
        }
    } catch (error) {
        console.error('Sign up failed:', error);
        message.error('Sign up failed. Please try again later.');
    }
};

  // print fail message
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
                  message: 'Please input your username!',
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
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder='input password' />
            </Form.Item>
            <Form.Item
              label="password"
              name="Confirm"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder='confirm password' />
            </Form.Item>
            <Form.Item>
              <Button onClick={() => {
                form
                  .validateFields()
                  .then((values) => {
                    form.resetFields();
                    onFinish(values);
                  })
                  .catch((info) => {
                    console.log('Validate Failed:', info);
                  });
              }} style={{ width: '100%' }} type="primary" htmlType="submit">
                Create Account
              </Button>
            </Form.Item>
          </Form>
          <div style={{ fontSize: 12, color: '#666', padding: '4px 15px 4px 15px' }}>
            Already have an account?
            <Button
              style={{ fontSize: 12 }}
              type="link"
              onClick={goLogin}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Signup;