import React from 'react'
import './../resources/defaultlayout.css'
import { Menu, Dropdown, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
// using props.children we get the content written where ever it is used
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('resume_builder-user'));
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item onClick={()=>{
        localStorage.removeItem('resume_builder-user')
        navigate('/login');
      }}>
        <span>Logout</span> 
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={()=>{navigate('/home')}} style={{cursor:'pointer'}}>
          Resume Builder
        </h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>

      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout