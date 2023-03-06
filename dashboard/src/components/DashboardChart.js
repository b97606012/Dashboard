import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { Box, MenuItem, FormControl, Select } from '@mui/material'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

function DashboardChart() {
    const [period, setPeriod] = useState('daily');
    const [dailyData, setDailyData] = useState([]);
    const handleChange = (event) => {
        setPeriod(event.target.value);
    };
    useEffect(() => {
        axios.post('http://localhost:4000/overview',
            { period },
            { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        ).then((res) => {
            if (res.data.status === 401) {
                sessionStorage.clear();
                alert('Token expired, please login again.')
                window.location.assign('/')
            }
            setDailyData(res.data.list)
            sessionStorage.setItem("token", res.data.token);
        })
    }, [period]);
    const getLabel = () => {
        return dailyData?.map(item => format(new Date(Number(item.asdate)), 'dd-MMM-yyyy'))
    }

    const data = {
        labels: getLabel(),
        datasets: [
            {
                label: 'Daily',
                data: dailyData?.map(item => item.usage),
                borderColor: 'green',
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                display: true,
                color: "black",
                anchor: "end",
                offset: -30,
                align: "start",
                font: {
                    size: 14,
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Daily',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Energy(kWh)',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                beginAtZero: true
            },
        }
    }

    return (
        <Box
            sx={{
                mt: 2,
                p: 2,
                border: '1px solid black',
            }}
        >
            <FormControl sx={{
                float: 'right'
            }}>
                <Select
                    value={period}
                    onChange={handleChange}
                >
                    <MenuItem value={'daily'}>Daily</MenuItem>
                    <MenuItem value={'weekly'}>Weekly</MenuItem>
                    <MenuItem value={'monthly'}>Monthly</MenuItem>
                </Select>
            </FormControl>

            <Line component={Paper} options={options} data={data} />
        </Box >
    );
}

export default DashboardChart;
