import React, { createElement, useState, useEffect } from 'react';
// import './home.css';
import { useLocation } from "react-router-dom"
import {
    Layout, theme, Breadcrumb, Typography, Select, Space, DatePicker,
    Input, Button, Card
} from 'antd';
import { differenceInMonths } from 'date-fns';
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

    const [monthlyIncome, setMonthlyIncome] = useState('xxxx')
    const [monthlyIncomeInput, setMonthlyIncomeInput] = useState(0)
    const [monthlyAllocation, setMonthlyAllocation] = useState('xxxx')
    const [monthlyAllocatonInput, setMonthlyAllocationInput] = useState(0)
    const [monthlyRemainCash, setMonthlyRemainCash] = useState('xxxx')
    const [annualReturnInput, setAnnualReturnInput] = useState(0)
    const [startCash, setStartCash] = useState('xxxx')
    const [endCash, setEndCash] = useState('xxxx')
    const [startInvestment, setStartInvestment] = useState('xxxx')
    const [endInvestment, setEndInvestment] = useState('xxxx')
    const [riskLevel, setRiskLevel] = useState('no risk')
    const [totalAssets, setTotalAssets] = useState('xxxx')
    const [remainMonths, setRemainMonths] = useState('xxxx')

    const [planInfo, setPlanInfo] = useState({});

    const storePlanInfo = () => {
        const planInformation = {
            startCash: planInfo.startCash,
            startInvestment: planInfo.startInvestment,
            totalAssets: planInfo.totalAssets,
            remainMonths: planInfo.remainMonths
            // ... other fields
        };
        console.log('Plan information:', planInformation);
        localStorage.setItem('planInfo', JSON.stringify(planInformation));
    }

    const handleStartCashPlan = () => { setPlanInfo({ ...planInfo, startCash: startCash }) }
    const handleStartInvestmentPlan = () => { setPlanInfo({ ...planInfo, startInvestment: startInvestment }) }
    const handleTotalAssetsPlan = () => { setPlanInfo({ ...planInfo, totalAssets: totalAssets }) }
    const handleRemainMonthsPlan = () => { setPlanInfo({ ...planInfo, remainMonths: remainMonths }) }

    const handleMonthlyIncome = () => {
        setMonthlyIncome(monthlyIncomeInput)
    }
    const handleMonthlyIncomeChange = (e) => {
        setMonthlyIncomeInput(e.target.value)
    }

    const handleMonthlyAllocation = () => {
        setMonthlyAllocation(monthlyAllocatonInput)
    }
    const handleMonthlyAllocatonChange = (e) => {
        setMonthlyAllocationInput(e.target.value)
    }

    const handleMonthlyRemainCash = () => {
        setMonthlyRemainCash((Number(monthlyIncome) - Number(monthlyAllocation)).toString())
    }

    const handleAnnualReturnChange = (e) => {
        setAnnualReturnInput(e.target.value)
    }

    const handleTargetDateChange = (date) => {
        const currentDate = new Date();
        const selectedDate = date.toDate();
        const monthsDifference = differenceInMonths(selectedDate, currentDate);
        setRemainMonths(monthsDifference);
    }

    const handleStartCash = () => {
        setStartCash((Number(monthlyIncome) - Number(monthlyAllocation)).toString())
    }
    const handleStartInvestment = () => {
        setStartInvestment(monthlyAllocation)
    }
    const handleEndCash = () => {
        setEndCash((remainMonths * Number(startCash)).toString())
    }
    const handleEndInvestment = () => {
        let endInvestmentAmount = 0;
        let loop = remainMonths
        while (loop >= 0) {
            loop--
            endInvestmentAmount = (endInvestmentAmount + Number(startInvestment)) * (1 + Number(annualReturnInput) / 1200)
        }

        setEndInvestment(endInvestmentAmount.toFixed(2).toString())
    }

    const handleRiskLevel = () => {
        if (Number(annualReturnInput) <= 5)
            setRiskLevel('no risk')
        else if (Number(annualReturnInput) > 5 && Number(annualReturnInput) <= 10)
            setRiskLevel('low')
        else if (Number(annualReturnInput) > 10 && Number(annualReturnInput) <= 25)
            setRiskLevel('moderate')
        else if (Number(annualReturnInput) > 25 && Number(annualReturnInput) <= 75)
            setRiskLevel('high')
        else
            setRiskLevel('very high')
    }

    const handleTotalAssets = () => {
        setTotalAssets((Number(endCash) + Number(endInvestment)).toFixed(2).toString())
    }

    const handleSubmit = () => {
        handleMonthlyIncome()
        handleMonthlyAllocation()
        handleMonthlyRemainCash()
        handleStartCash()
        handleStartInvestment()
        handleRiskLevel()
        handleEndCash()
        handleEndInvestment()
        handleTotalAssets()
        
        handleStartCashPlan()
        handleStartInvestmentPlan()
        handleTotalAssetsPlan()
        handleRemainMonthsPlan()
        storePlanInfo()
    }

    let plan_id = 1

    // const addCard = () => {
    //     plan_id++
    //     setCards([...cards, (

    //     )]);
    // };

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
                    <Breadcrumb.Item>Investment Plan</Breadcrumb.Item>
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
                            title={`Investment Plan`}
                            // extra={<a href="#">More</a>}
                            style={{
                                width: 1160,
                            }}
                        >
                            <Space direction="vertical">
                                <Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <Title level={4}>Total Monthly income:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>${monthlyIncome}</Title>
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <Title level={4}>Monthly investment allocated:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>${monthlyAllocation}</Title>
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <Title level={4}>Monthly remaining disposable cash:</Title>
                                        <Title level={4} style={{ color: 'blue' }}>${monthlyRemainCash}</Title>
                                    </Space>
                                </Space>
                                <Space>
                                    <Space>
                                        <p>Monthly Income</p>
                                        <Input prefix="$" placeholder="Input income" onChange={handleMonthlyIncomeChange} />
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <p>Monthly Investment Allocation</p>
                                        <Input prefix="$" placeholder="Input amount" onChange={handleMonthlyAllocatonChange} />
                                    </Space>
                                </Space>
                                <Space>
                                    <Space>
                                        <p>Expected annualized return</p>
                                        {/* <Select
                                            defaultValue="low_7"
                                            style={{
                                                width: 120,
                                            }}
                                            allowClear
                                            options={[
                                                { value: 'no_3', label: '3% no risk' },
                                                { value: 'low_7', label: '7% low risk' },
                                                { value: 'moderate_15', label: '15% moderate risk' },
                                                { value: 'high_30', label: '30% high risk' }
                                            ]}
                                        /> */}
                                        <Input suffix="%" placeholder="Input ratio" onChange={handleAnnualReturnChange} />
                                    </Space>
                                    <Space style={{ marginLeft: '20px' }}>
                                        <p>Plan end date</p>
                                        <DatePicker onChange={handleTargetDateChange} />
                                    </Space>
                                    <Button type="primary" style={{ marginLeft: '100px' }} onClick={handleSubmit}>Submit</Button>
                                </Space>
                                <Space>
                                    <Title level={4} style={{ marginLeft: '270px' }}>At start of plan</Title>
                                    <Title level={4} style={{ marginLeft: '30px' }}>At end of plan</Title>
                                    <Title level={4}>(</Title>
                                    <Title level={4} style={{ color: 'blue' }}>{remainMonths}</Title>
                                    <Title level={4}>months)</Title>
                                </Space>
                                <Space>
                                    <Title level={4} style={{ marginLeft: '70px' }}>CASH Assets:</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>${startCash}</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '180px' }}>${endCash}</Title>
                                </Space>
                                <Space>
                                    <Title level={4}>INVESTMENT Assets:</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '100px' }}>${startInvestment}</Title>
                                    <Title level={4} style={{ color: 'blue', marginLeft: '180px' }}>${endInvestment}</Title>
                                </Space>
                                <Space>
                                    <Title level={4} style={{ marginLeft: '200px' }}>Your plan risk level is:</Title>
                                    <Title level={4} style={{ color: 'blue' }}>{riskLevel}</Title>
                                    <Title level={4} style={{ marginLeft: '100px' }}>Total assets at end of plan are:</Title>
                                    <Title level={4} style={{ color: 'blue' }}>${totalAssets}</Title>
                                </Space>
                            </Space>
                        </Card>
                        {/* {cards.map(card => card)} */}
                    </Space>
                    {/* <Button type="primary" onClick={addCard} style={{ marginTop: '20px', marginLeft: '1000px' }}>Add Plan</Button> */}
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