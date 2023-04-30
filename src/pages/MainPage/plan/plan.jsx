import React, { createElement, useState, useEffect } from 'react';
// import './home.css';
import { useLocation } from "react-router-dom"
import {
    Layout, theme, Breadcrumb, Typography, Select, Space, DatePicker,
    Input, Button, Card
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

const Plan = () => {
    const [cards, setCards] = useState([]);

    let plan_id = 1

    const addCard = () => {
        plan_id++
        setCards([...cards, (
            <Card
                title={`Plan #${plan_id}`}
                // extra={<a href="#">More</a>}
                style={{
                    width: 1160,
                }}
            >
                <Space direction="vertical">
                    <Space>
                        <Space style={{ marginLeft: '20px' }}>
                            <Title level={4}>Total Monthly income:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                        <Space style={{ marginLeft: '20px' }}>
                            <Title level={4}>Remaining disposable cash:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                        <Space style={{ marginLeft: '20px' }}>
                            <Title level={4}>Monthly cash allocated:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                    </Space>
                    <Space>
                        <Space>
                            <p>Monthly Income</p>
                            <Input name="monthlyIncome" prefix="$" placeholder="Input income this month" />
                        </Space>
                        <Space style={{ marginLeft: '20px' }}>
                            <p>Monthly Allocation</p>
                            <Input name="monthlyIncome" prefix="$" placeholder="Input income this month" />
                        </Space>
                    </Space>
                    <Space>
                        <Space>
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
                        <Space style={{ marginLeft: '20px' }}>
                            <p>Plan end date</p>
                            <DatePicker />
                        </Space>
                        <Button type="primary" style={{ marginLeft: '100px' }}>Submit</Button>
                    </Space>
                    <Space>
                        <Title level={4} style={{ marginLeft: '270px' }}>At start of plan</Title>
                        <Title level={4} style={{ marginLeft: '30px' }}>At end of plan</Title>
                    </Space>
                    <Space>
                        <Title level={4} style={{ marginLeft: '70px' }}>CASH Assets:</Title>
                        <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                        <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                    </Space>
                    <Space>
                        <Title level={4}>INVESTMENT Assets:</Title>
                        <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                        <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                    </Space>
                    <Space>
                        <Title level={4} style={{ marginLeft: '100px' }}>Total assets at end of plan are:</Title>
                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                    </Space>
                </Space>
            </Card>
        )]);
    };

    const { Title } = Typography;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

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
                    <Breadcrumb.Item>Plan</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >
                    <Title level={2} style={{ color: 'blue' }}>Plan Creation</Title>
                    <Space direction="vertical" size={16}>
                        <Card
                            title={`Plan #${plan_id}`}
                            // extra={<a href="#">More</a>}
                            style={{
                                width: 1160,
                            }}
                        >
                            <Space direction="vertical">
                                <Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <Title level={4}>Total Monthly income:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <Title level={4}>Remaining disposable cash:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <Title level={4}>Monthly cash allocated:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                    </Space>
                                </Space>
                                <Space>
                                    <Space>
                                        <p>Monthly Income</p>
                                        <Input name="monthlyIncome" prefix="$" placeholder="Input income this month" />
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <p>Monthly Allocation</p>
                                        <Input name="monthlyIncome" prefix="$" placeholder="Input income this month" />
                                    </Space>
                                </Space>
                                <Space>
                                    <Space>
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
                                    <Space style={{ marginLeft: '20px' }}>
                                        <p>Plan end date</p>
                                        <DatePicker />
                                    </Space>
                                    <Button type="primary" style={{ marginLeft: '100px' }}>Submit</Button>
                                </Space>
                                <Space>
                                    <Title level={4} style={{ marginLeft: '270px' }}>At start of plan</Title>
                                    <Title level={4} style={{ marginLeft: '30px' }}>At end of plan</Title>
                                </Space>
                                <Space>
                                    <Title level={4} style={{ marginLeft: '70px' }}>CASH Assets:</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                                </Space>
                                <Space>
                                    <Title level={4}>INVESTMENT Assets:</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>$xxxx</Title>
                                </Space>
                                <Space>
                                    <Title level={4} style={{ marginLeft: '100px' }}>Total assets at end of plan are:</Title>
                                    <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                </Space>
                            </Space>
                        </Card>
                        {cards.map(card => card)}
                    </Space>
                    <Button type="primary" onClick={addCard} style={{ marginTop: '20px', marginLeft: '1000px' }}>Add Plan</Button>
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

export default Plan;