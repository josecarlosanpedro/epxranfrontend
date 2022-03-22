import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Menu from 'antd/lib/menu';
import Modal from 'antd/lib/modal';
import React, { useState } from 'react';
const Header = () => {
  const { SubMenu } = Menu;
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };
  const cancelLoginModal = () => {
    setIsLoginModalVisible(false);
  };
  const handleLoginUsernameChange = (e: any) => {
    setLoginUserName(e.target.value);
  };
  const handleLoginPasswordChange = (e: any) => {
    setLoginPassword(e.target.value);
  };
  const handleLogin = (e: any) => {
    console.log(loginUserName, loginPassword);
  };
  return (
    <header className="layout-header">
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="shop">Shop</Menu.Item>
          <Menu.Item key="rankings">Rankings</Menu.Item>
          <Menu.Item key="social">Socials</Menu.Item>
          <Menu.Item key="download">Download</Menu.Item>
        </Menu>
      </div>
      <div className="register-login">
        <Button>Register</Button>
        <Button onClick={showLoginModal}>Login</Button>
      </div>
      <Modal
        className="header-login-modal"
        title="Account Login"
        visible={isLoginModalVisible}
        onCancel={cancelLoginModal}
      >
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            // name="username"

            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            // label="Password"
            // name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={showLoginModal}>Forgot Password</Button>
        {/* <Input placeholder="Username" onChange={(e) => handleLoginUsernameChange(e)} prefix={<UserOutlined />} />
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="input password"
          onChange={(e) => handleLoginPasswordChange(e)}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />

        <Button onClick={showLoginModal}>Login</Button>
        // <Button onClick={showLoginModal}>Forgot Password</Button> */}
      </Modal>
    </header>
  );
};

export default Header;
