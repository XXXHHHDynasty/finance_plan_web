import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'
import { LaptopOutlined, NotificationOutlined, UserOutlined, FileOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Image } from 'antd';

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
  getItem('Home', '1', <DesktopOutlined />),
  getItem('budgetManager', '2', <PieChartOutlined />),
  getItem('Calculator', '3', <FileOutlined />),
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
  const navigate = useNavigate();
  const [server, setserver] = useState([]);
  const [current, setCurrent] = useState("1");
  const [status, setStatus] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  // navigate to 'home' page
  const goHome = () => {
    setCurrent("1")
    navigate('/home', {})
  }

  // navigate to 'budgetManager' page
  const goBudgetManager = () => {
    setCurrent("1")
    navigate('/budgetManager', {})
  }

  // navigate to 'calculator' page
  const goCalculator = () => {
    setCurrent("1")
    navigate('/calculator', {})
  }

  // navigate to 'plan' page
  const goPlan = () => {
    setCurrent("1")
    navigate('/plan', {})
  }

  // navigate to 'userProfile' page
  const goUserProfile = () => {
    setCurrent("1")
    navigate('/userProfile', {})
  }

  // navigate to 'profileSetting' page
  const goProfileSetting = () => {
    setCurrent("1")
    navigate('/profileSetting', {})
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
            // backgroundImage: 'url("../images/WPIlogo.jpeg")'
          }}
        />
          {/* <Image
            width={200}
            src="../images/WPIlogo.jepg"
          /> */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" onClick={goHome}>Home</Menu.Item>
          <Menu.Item key="2" onClick={goBudgetManager}>Budget Manager</Menu.Item>
          <Menu.Item key="3" onClick={goCalculator}>Investment Calculator</Menu.Item>
          <Menu.Item key="4" onClick={goPlan}>Investment Plan</Menu.Item>
          <Menu.SubMenu title="User">
            <Menu.Item key="5" onClick={goUserProfile}>User Profile</Menu.Item>
            <Menu.Item key="6" onClick={goProfileSetting}>Profile Setting</Menu.Item>
          </Menu.SubMenu>

        </Menu>
      </Sider>
      <Outlet context={[status, setStatus]} />
    </Layout>
  );
};

export default App;