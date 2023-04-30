import React, { createElement, useState, useEffect } from 'react';
// import './home.css';
import { useLocation, useNavigate } from "react-router-dom"
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

const ProfileSetting = () => {
    const navigate = useNavigate();
    const [postMessage, setPost] = useState('');
    const [current, setCurrent] = useState("1");
    const [userInfo, setUserInfo] = useState({});

    const { Title } = Typography;
    const onChange = (value) => {
        console.log('changed', value);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const location = useLocation();

    // navigate to 'userProfile' page
    const goUserProfile = () => {
        const userInformation = {
            name: userInfo.name,
            // ... other fields
        };
        console.log('User information:', userInformation);
        localStorage.setItem('userInfo', JSON.stringify(userInformation));
        setCurrent("1")
        navigate('/userProfile', {})
    }

    const handleNameChange = (e) => { setUserInfo({ ...userInfo, name: e.target.value }) }
    // const handleChange = (e) => {setUserInfo({ ...userInfo, : e.target.value })}

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
                    <Breadcrumb.Item>Profile Setting</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >
                    <Title level={2} style={{ color: 'blue' }}>Profile Setting</Title>
                    <Title level={4} style={{ color: 'black' }}>My Info</Title>
                    <div>
                        <Space wrap>
                            <p>Name</p>
                            <Input placeholder="Input name" onChange={handleNameChange} />
                            <p>Age</p>
                            <InputNumber min={0} max={200} defaultValue={18} onChange={onChange} />
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Income</Title>
                    <div>
                        <Space wrap>
                            {/* <p>Name</p>
                            <Input placeholder="Input name" /> */}
                            <p>Amount</p>
                            <Input placeholder="Input amount" prefix="$" />
                            <p>Frequency</p>
                            <Select
                                defaultValue="monthly"
                                style={{
                                    width: 120,
                                }}
                                allowClear
                                options={[
                                    { value: 'hourly', label: 'Hourly' },
                                    { value: 'daily', label: 'Daily' },
                                    { value: 'weekly', label: 'Weekly' },
                                    { value: 'monthly', label: 'Monthly' },
                                    { value: 'quarterly', label: 'Quarterly' },
                                    { value: 'yearly', label: 'Yearly' }
                                ]}
                            />
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Assets</Title>
                    <div>
                        <Space wrap>
                            {/* <p>Name</p>
                            <Input placeholder="Input name" /> */}
                            <p>Amount</p>
                            <Input placeholder="Input amount" prefix="$" />
                            <p>Type</p>
                            <Select
                                defaultValue="house"
                                style={{
                                    width: 120,
                                }}
                                allowClear
                                options={[
                                    { value: 'car', label: 'Car' },
                                    { value: 'house', label: 'House' },
                                    { value: 'shop', label: 'Shop' },
                                    { value: 'virtual_assets', label: 'Virtual assets' }
                                ]}
                            />
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Debt</Title>
                    <div>
                        <Space wrap>
                            {/* <p>Name</p>
                            <Input placeholder="Input name" /> */}
                            <p>Total Owed</p>
                            <Input placeholder="Input amount" prefix="$" />
                            <p>Interest Rate</p>
                            <Input placeholder="Input rate" />
                            <p>Monthly Owed</p>
                            <Input placeholder="Input amount" prefix="$" />
                            <p>Time Remaining</p>
                            <Input placeholder="Input time remaining" />
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Monthly Expenses</Title>
                    <div style={{ marginBottom: '50px' }}>
                        <Space wrap>
                            {/* <p>Name</p>
                            <Input placeholder="Input name" /> */}
                            <p>Amount</p>
                            <Input placeholder="Input amount" prefix="$" />
                        </Space>
                    </div>
                    <Button type="primary" onClick={goUserProfile}>Submit</Button>
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

export default ProfileSetting;