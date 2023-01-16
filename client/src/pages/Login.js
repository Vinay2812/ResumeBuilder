import React, {useState, useEffect} from 'react'

import { Form, Input, Button, message, Checkbox, Spin} from 'antd';

import '../resources/authentication.css'

import {Link, useNavigate} from 'react-router-dom'

import { API } from '../AxiosInstance';

import { UserOutlined, LockOutlined } from '@ant-design/icons';


function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async(values) =>{
    setLoading(true);
      try {
        const user = await API.post('/api/user/login', values);
        setLoading(false);
        message.success('Login Successful');
        localStorage.setItem('resume_builder-user', JSON.stringify(user.data));
        navigate('/home')
      } catch (error) {
        message.error('Login Failed');
        setLoading(false);
      }
  };

  useEffect(()=>{
    if(localStorage.getItem('resume_builder-user')){
      return navigate('/home');
    }
  })
  return (
    <div className="auth-parent">
      {loading && (<Spin size="large"/>)}
      <h1 className='brand'>Resume Builder</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
      
         <h1>Login</h1>
         <hr/>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        
        <div className="d-flex align-items-center justify-content-between">
          <Link className="form-link" to='/register'>Click here to Register</Link>
          <Button type="primary" htmlType='submit' className='form-button' >
            Login
          </Button>
          
        </div>
      </Form>
    </div>
  )
}

export default Login

/*
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NormalLoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
*/