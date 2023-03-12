import React, { createElement, useState, useEffect } from 'react';
import './home.css';
import { useLocation } from "react-router-dom"
import { Layout, theme, Breadcrumb, Input, Button, Comment, Avatar, Tooltip, List, PageHeader, Divider } from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';
const { Header, Footer, Content, Sider } = Layout;

const axios = require('axios').default;

const Home = () => {

    const [postMessage, setPost] = useState('');
    const [data, setData] = useState('');

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const location = useLocation();

    return (
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
            <Breadcrumb.Item>Financial Self-Planning</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Home page
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Financial Self-Planning Tool ©2023 Created by CS588 team
        </Footer>
      </Layout>
    )
}

export default Home;