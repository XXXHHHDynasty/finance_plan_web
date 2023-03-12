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

const ProfileSetting = () => {

    const [postMessage, setPost] = useState('');
    const [data, setData] = useState('');

    const { Title } = Typography;
    const onChange = (value) => {
        console.log('changed', value);
      };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const location = useLocation();

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
                    <Breadcrumb.Item>UserProfile</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >
                    <Title level={2} style={{ color: 'blue' }}>Profile</Title>
                    <Title level={4} style={{ color: 'black' }}>Family Members</Title>
                    <div>
                        <Space wrap>
                            <p>Name</p>
                            <Input placeholder="Input name" />
                            <p>Age</p>
                            <InputNumber min={0} max={200} defaultValue={18} onChange={onChange} />
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Income</Title>
                    <div>
                        <Space wrap>
                            <p>Name</p>
                            <Input placeholder="Input name" />
                            <p>Amount</p>
                            <Input placeholder="Input amount" />
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
                            <p>Name</p>
                            <Input placeholder="Input name" />
                            <p>Amount</p>
                            <Input placeholder="Input amount" />
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
                            <p>Name</p>
                            <Input placeholder="Input name" />
                            <p>Total Owed</p>
                            <Input placeholder="Input amount" />
                            <p>Interest Rate</p>
                            <Input placeholder="Input rate" />
                            <p>Monthly Owed</p>
                            <Input placeholder="Input amount" />
                            <p>Time Remaining</p>
                            <Input placeholder="Input time remaining" />
                        </Space>
                    </div>
                    <Title level={4} style={{ color: 'black' }}>Monthly Expenses</Title>
                    <div style={{marginBottom: '50px'}}>
                        <Space wrap>
                            <p>Name</p>
                            <Input placeholder="Input name" />
                            <p>Amount</p>
                            <Input placeholder="Input amount" />
                        </Space>
                    </div>
                    <Button type="primary">Submit</Button>
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