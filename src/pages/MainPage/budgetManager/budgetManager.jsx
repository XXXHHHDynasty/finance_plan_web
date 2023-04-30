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

const BudgetManager = () => {
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [budget, setBudget] = useState(0);
    const [budgetInput, setBudgetInput] = useState(0)
    const [cards, setCards] = useState([]);

    const handleMonthChange = (date, dateString) => {
        setSelectedMonth(dateString);
    };

    const handleBudget = () => {
        setBudget(budgetInput)
    }

    const handleBudgetChange = (e) => {
        setBudgetInput(e)
    }

    const handleBudgetSubmit = (event) => {
        event.preventDefault();
        const budgetInput = event.target.elements.budgetInput.value;
        const newBudget = parseFloat(budgetInput) || 0;
        setBudget(budgetInput);
    };

    const addCard = () => {
        setCards([...cards, (
            <Card
                key={cards.length}
                title={`${selectedMonth ? selectedMonth : 'Select a month'} budget`}
                // extra={<a href="#">More</a>}
                style={{
                    width: 1160,
                }}
            >
                <Space direction="vertical">
                    <Space>
                        <p>Choose month</p>
                        <DatePicker onChange={handleMonthChange} picker="month" />
                        <Space style={{ marginLeft: '200px' }}>
                            <Title level={4}>Total income this month:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                        <Space style={{ marginLeft: '20px' }}>
                            <Title level={4}>Budget this month:</Title>
                            <Title level={4} style={{ color: 'blue' }}>${budget}</Title>
                        </Space>
                    </Space>
                    <Space>
                        <form onSubmit={handleBudgetSubmit}>
                            <Space>
                                <p>Budget</p>
                                <Input name="budgetInput" prefix="$" placeholder="Input budget this month" onChange={handleBudgetChange} />
                                <Button type="primary" onClick={handleBudget}>Submit</Button>
                            </Space>
                        </form>
                        <Space style={{ marginLeft: '100px' }}>
                            <Title level={4}>Total living expenses this month:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                    </Space>
                    <Space>
                        <p>Income</p>
                        <Input prefix="$" placeholder="Input each income" />
                        <Button type="primary">Add</Button>
                        <Space style={{ marginLeft: '120px' }}>
                            <Title level={4}>This month's expenses exceeded the budget by:</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
                    </Space>
                    <Space>
                        <p>Living Expenses</p>
                        <Input prefix="$" placeholder="Input each living expenses" />
                        <Button type="primary">Add</Button>
                        <Space style={{ marginLeft: '63px' }}>
                            <Title level={4}>Remaining savings this month (available for investment):</Title>
                            <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                        </Space>
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
                    <Breadcrumb.Item>BudgetManager</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >
                    <Title level={2} style={{ color: 'blue' }}>BudgetManager</Title>
                    <Space direction="vertical" size={16}>
                        <Card
                            title={`${selectedMonth ? selectedMonth : 'Select a month'} budget`}
                            // extra={<a href="#">More</a>}
                            style={{
                                width: 1160,
                            }}
                        >
                            <Space direction="vertical">
                                <Space>
                                    <p>Choose month</p>
                                    <DatePicker onChange={handleMonthChange} picker="month" />
                                    <Space style={{ marginLeft: '200px' }}>
                                        <Title level={4}>Total income this month:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <Title level={4}>Budget this month:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>${budget}</Title>
                                    </Space>
                                </Space>
                                <Space>
                                    <form onSubmit={handleBudgetSubmit}>
                                        <Space>
                                            <p>Budget</p>
                                            <Input name="budgetInput" prefix="$" placeholder="Input budget this month" onChange={handleBudgetChange} />
                                            <Button type="primary" onClick={handleBudget}>Submit</Button>
                                        </Space>
                                    </form>
                                    <Space style={{ marginLeft: '100px' }}>
                                        <Title level={4}>Total living expenses this month:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                    </Space>
                                </Space>
                                <Space>
                                    <p>Income</p>
                                    <Input prefix="$" placeholder="Input each income" />
                                    <Button type="primary">Add</Button>
                                    <Space style={{ marginLeft: '120px' }}>
                                        <Title level={4}>This month's expenses exceeded the budget by:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                    </Space>
                                </Space>
                                <Space>
                                    <p>Living Expenses</p>
                                    <Input prefix="$" placeholder="Input each living expenses" />
                                    <Button type="primary">Add</Button>
                                    <Space style={{ marginLeft: '63px' }}>
                                        <Title level={4}>Remaining savings this month (available for investment):</Title>
                                        <Title level={4} style={{ color: 'blue' }}>$xxxx</Title>
                                    </Space>
                                </Space>
                            </Space>
                        </Card>
                        {cards.map(card => card)}
                    </Space>
                    <Button type="primary" onClick={addCard} style={{ marginTop: '20px', marginLeft: '1000px' }}>Add</Button>
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

export default BudgetManager;