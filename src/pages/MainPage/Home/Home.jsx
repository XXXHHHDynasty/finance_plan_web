import React, { createElement, useState, useEffect } from 'react';
import './home.css';
import { useNavigate, useLocation } from "react-router-dom"
import { Layout, theme, Breadcrumb, Input, Button, Col, Row, Statistic, Carousel } from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';

const { Header, Footer, Content, Sider } = Layout;
const { Countdown } = Statistic;

const dayToMsec = 1000 * 60 * 60 * 24;
const deadline = Date.now() + dayToMsec * 365; // Dayjs is also OK

const axios = require('axios').default;

const Home = () => {
  const navigate = useNavigate();
  const [postMessage, setPost] = useState('');
  const [current, setCurrent] = useState("1");
  const [data, setData] = useState('');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

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

  const onFinish = () => {
    console.log('finished!');
  };
  const onChange = (val) => {
    if (val && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };

  const carouselStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
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
        <Carousel autoplay>
          <div>
            <h3 style={carouselStyle}>Nav 1</h3>
          </div>
          <div>
            <h3 style={carouselStyle}>Nav 2</h3>
          </div>
          <div>
            <h3 style={carouselStyle}>Nav 3</h3>
          </div>
          <div>
            <h3 style={carouselStyle}>Nav 4</h3>
          </div>
        </Carousel>
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
                  <Statistic title="Account Balance (USD)" value={11289} precision={2} />
                </Col>
                <Col span={12}>
                  <Statistic title="Investment Assets (USD)" value={3700} precision={2} />
                </Col>
              </Row>
            </div>
            <div style={{ flex: 1 }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Target Amount (USD)" value={50000} precision={2} />
                  <Button style={{ marginTop: 16 }} type="primary" onClick={goPlan}>
                    Reset
                  </Button>
                </Col>
                <Col span={12}>
                  <Countdown title="Target Date Countdown" value={deadline} format="D [days] H [hrs] m [mins] s [secs]" />
                  <Button style={{ marginTop: 16 }} type="primary" onClick={goPlan}>
                    Reset
                  </Button>
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