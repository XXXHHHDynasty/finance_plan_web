import React, { createElement, useState, useEffect } from 'react';
// import './home.css';
import { useLocation } from "react-router-dom"
import {
    Layout, theme, Breadcrumb, Typography, Select, Space,
    Input, InputNumber, Button, Comment, Avatar, Tooltip, List, PageHeader, Divider
} from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';
const { Header, Footer, Content, Sider } = Layout;

const axios = require('axios').default;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const UserProfile = () => {

    const [postMessage, setPost] = useState('');
    const [data, setData] = useState('');
    // const [userInfo, setUserInfo] = useState(() => {
    //     const savedUserInfo = localStorage.getItem('userInfo');
    //     return savedUserInfo ? JSON.parse(savedUserInfo) : {};
    // });

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const savedUserInfo = localStorage.getItem('userInfo');
        if (savedUserInfo) {
            setUserInfo(JSON.parse(savedUserInfo));
        }
    }, []);

    const { Title } = Typography;
    const onChange = (value) => {
        console.log('changed', value);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const location = useLocation();
    // const userInfo = location.state?.userInfo || {}

    return (
        <Layout className="profileSetting-layout">
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
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>User Profile</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >
                    <Title level={2} style={{ color: 'blue' }}>User Profile</Title>
                    <Title level={4} style={{ color: 'black' }}>My Info</Title>
                    <div>
                        <Space wrap>
                            <p>Name:</p>
                            <p style={{ marginRight: '20px' }}>{userInfo.myName || 'default'}</p>
                            <p>Age:</p>
                            <p>{userInfo.myAge || 'default'}</p>
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Income</Title>
                    <div>
                        <Space wrap>
                            {/* <p>Name:</p>
                            <p style={{ marginRight: '20px' }}>default</p> */}
                            <p>Amount:</p>
                            <p style={{ marginRight: '20px' }}>{userInfo.incomeAmount || 'default'}</p>
                            <p>Frequency:</p>
                            <p>{userInfo.incomeFrequency || 'default'}</p>
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Assets</Title>
                    <div>
                        <Space wrap>
                            {/* <p>Name:</p>
                            <p style={{ marginRight: '20px' }}>default</p> */}
                            <p>Amount:</p>
                            <p style={{ marginRight: '20px' }}>{userInfo.assetsAmount || 'default'}</p>
                            <p>Type:</p>
                            <p>{userInfo.assetsType || 'default'}</p>
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Debt</Title>
                    <div>
                        <Space wrap>
                            {/* <p>Name:</p>
                            <p style={{ marginRight: '20px' }}>default</p> */}
                            <p>Total Owed:</p>
                            <p style={{ marginRight: '20px' }}>{userInfo.debtTotalOwed || 'default'}</p>
                            <p>Interest Rate:</p>
                            <p style={{ marginRight: '20px' }}>{userInfo.debtInterestRate || 'default'}</p>
                            <p>Monthly Owed:</p>
                            <p style={{ marginRight: '20px' }}>{userInfo.debtMonthlyOwed || 'default'}</p>
                            <p>Time Remaining:</p>
                            <p>{userInfo.debtTimeRemain || 'default'}</p>
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Monthly Expenses</Title>
                    <div style={{ marginBottom: '50px' }}>
                        <Space wrap>
                            {/* <p>Name:</p>
                            <p style={{ marginRight: '20px' }}>default</p> */}
                            <p>Amount:</p>
                            <p style={{ marginRight: '20px' }}>{userInfo.monthlyExpenses || 'default'}</p>
                        </Space>
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

export default UserProfile;