import React from 'react'
import { Form, Input, Button, message, Spin } from 'antd';

import '../resources/authentication.css'


import {Link} from 'react-router-dom'

import { API } from '../AxiosInstance';

import { useState } from 'react';


import { UserOutlined, LockOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


function Register() {
  const [loading, setLoading] = useState(false);
  const onFinish = async(values) =>{
      setLoading(true);
      try { 
        await API.post('/api/user/register', values);
        setLoading(false);
        message.success('Registration successful')//ant design component
      } catch (error) {
        message.error('Registration Failed');
        setLoading(false);
      }
  };
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
         <h1>Register</h1>
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

        <Form.Item
          name="cpassword"
          rules={[{ required: true, message: 'Please confirm your Password!' }]}
        >
          <Input
            prefix={< EyeInvisibleOutlined  className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm password"
          />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link className="form-link" to='/login'>Click here to Login</Link>
          <Button type="primary" htmlType='submit' className='form-button'>
            Register
          </Button>
          
        </div>
      </Form>
    </div>
  )
}

export default Register