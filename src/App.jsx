import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'
import { LaptopOutlined, NotificationOutlined, UserOutlined, FileOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const axios = require('axios').default;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '1',  <DesktopOutlined />),
  getItem('Analysis', '2', <PieChartOutlined />),
  getItem('Data', '3', <FileOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Profile', '4'),
    getItem('Financial plan', '5'),
    getItem('Setting', '6'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '7'), getItem('Team 2', '8')]),
];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App = () => {
  // const navigate = useNavigate();
  const [server, setserver] = useState([]);
  const [current, setCurrent] = useState("1");
  const [status, setStatus] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  // navigate to 'home' page
  // const goHome = () => {
  //   setCurrent("1")
  //   navigate('/empty', {})
  // }

  // navigate to 'UserProfile' page
  // const goUserProfile = () => {
  //   setCurrent("2")
  //   navigate('/userprofile', {})
  // }
  return (
    // <Layout>
    //   <Header className="header">
    //     <div className="logo" />
    //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    //       <Menu.Item key="1">Home</Menu.Item>
    //       <Menu.Item key="2">Analysis</Menu.Item>
    //       <Menu.Item key="3">Data</Menu.Item>
    //       <Menu.Item key="4">User Profile</Menu.Item>
    //     </Menu>
    //   </Header>
    //   <Layout>
    //     <Sider
    //       width={200}
    //       style={{
    //         background: colorBgContainer,
    //       }}
    //     >
    //       <Menu
    //         mode="inline"
    //         defaultSelectedKeys={['1']}
    //         defaultOpenKeys={['sub1']}
    //         style={{
    //           height: '100%',
    //           borderRight: 0,
    //         }}
    //         items={items2}
    //       />
    //     </Sider>
    //     <Layout
    //       style={{
    //         padding: '0 24px 24px',
    //       }}
    //     >
    //       <Breadcrumb
    //         style={{
    //           margin: '16px 0',
    //         }}
    //       >
    //         <Breadcrumb.Item>Home</Breadcrumb.Item>
    //         <Breadcrumb.Item>List</Breadcrumb.Item>
    //         <Breadcrumb.Item>App</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <Content
    //         style={{
    //           padding: 24,
    //           margin: 0,
    //           minHeight: 280,
    //           background: colorBgContainer,
    //         }}
    //       >
    //         Content
    //       </Content>
    //     </Layout>
    //   </Layout>
    // </Layout>

    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;