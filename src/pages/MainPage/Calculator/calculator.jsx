import React, { createElement, useState, useEffect } from 'react';
// import './home.css';
import { useLocation } from "react-router-dom"
import {
    Layout, theme, Breadcrumb, Typography, Select, Space, DatePicker,
    Input, Button
} from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';
const { Header, Footer, Content, Sider } = Layout;

const axios = require('axios').default;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const Calculator = () => {

    const [postMessage, setPost] = useState('');
    const [data, setData] = useState('');

    const { Title } = Typography;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const location = useLocation();

    return (
        <Layout className="calculator-layout">
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
                    <Breadcrumb.Item>Calculator</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >
                    <Title level={2} style={{ color: 'blue' }}>Calculator</Title>
                    <div>
                        <Space wrap>
                            <p>Goal</p>
                            <Select
                                defaultValue="retirement"
                                style={{
                                    width: 120,
                                }}
                                allowClear
                                options={[
                                    { value: 'retirement', label: 'Retirement' },
                                    { value: 'buy_a_car', label: 'Buy a car' },
                                    { value: 'buy_a_house', label: 'Buy a house' },
                                    { value: 'trip', label: 'Trip' }
                                ]}
                            />
                        </Space>
                    </div>
                    <div>
                        <Space wrap>
                            <p>Target Amount</p>
                            <Input placeholder="Input amount" />
                        </Space>
                    </div>
                    <div style={{ marginBottom: '50px' }}>
                        <Space wrap>
                            <p>Target Date</p>
                            <DatePicker onChange={onChange} />
                        </Space>
                    </div>
                    <Button type="primary">Calculate</Button>
                    <div style={{ marginTop: '50px' }}>
                        <Space wrap>
                            <Title level={4}>Starting CASH Assets:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                    </div>
                    <div>
                        <Space wrap>
                            <Title level={4}>Starting INVESTMENT Assets:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                    </div>
                    <div>
                        <Space wrap>
                            <Title level={4}>In order to achieve your goal, you must invest</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxx</Title>
                            <Title level={4}>every month</Title>
                        </Space>
                    </div>
                    <Title level={5} style={{ fontStyle: 'italic' }}>This calculation is based on investing monthly into a market portfolio with a 7% annual return</Title>
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

export default Calculator;