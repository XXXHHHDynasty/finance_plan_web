import React, { createElement, useState, useEffect } from 'react';
import './home.css';
import { useLocation } from "react-router-dom"
import { Layout, theme, Breadcrumb, Input, Button, Col, Row, Statistic } from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';

const { Header, Footer, Content, Sider } = Layout;
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const axios = require('axios').default;

const Home = () => {

  const [postMessage, setPost] = useState('');
  const [data, setData] = useState('');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

  const onFinish = () => {
    console.log('finished!');
  };
  const onChange = (val) => {
    if (val && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };

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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Active Users" value={3} />
                </Col>
                <Col span={12}>
                  <Statistic title="Account Balance (USD)" value={11289} precision={2} />
                  <Button style={{ marginTop: 16 }} type="primary">
                    Reset
                  </Button>
                </Col>
              </Row>
            </div>
            <div style={{ flex: 1 }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Countdown title="Target Date Countdown" value={deadline} onFinish={onFinish} />
                </Col>
                <Col span={12}>
                  <Countdown title="Day Level" value={deadline} format="D [days] H [hrs] m [mins] s [secs]" />
                </Col>
              </Row>
            </div>
          </div>

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