import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Box, MenuItem, FormControl, Select, Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardChart from '../components/DashboardChart';

function DashboardPage() {
    const [days, setDays] = useState(365);
    const [total, setTotal] = useState({});
    useEffect(() => {
        axios.post('http://localhost:4000/overview/total',
            { days },
            { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        ).then((res) => {
            if (res.data.status === 401) {
                sessionStorage.clear();
                alert('Token expired, please login again.')
                window.location.assign('/')
            }
            setTotal(res.data.list[0])
            sessionStorage.setItem("token", res.data.token);
        })
    }, [days]);

    const handleChange = (event) => {
        setDays(event.target.value);
    };

    return (<>
        <Stack direction="row">
            <Box sx={{
                m: 1,
                p: 1,
                borderBottom: '3px solid green'
            }}>
                Overview
            </Box>
            <Box sx={{
                m: 2,
            }}>
                Location Overview
                <KeyboardArrowDownIcon />
            </Box>
        </Stack>
        <hr />
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box
                        sx={{
                            mt: 2,
                            p: 2,
                            border: '1px solid black',
                            height: 120,
                        }}
                    >
                        <div>Total Charged Energy</div>
                        <h1>{total.totalchargedenergy} kWh</h1>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        sx={{
                            mt: 2,
                            p: 2,
                            border: '1px solid black',
                            height: 120,
                        }}
                    >
                        <div>Total Revenue</div>
                        <h1>SGD {total?.totalrevenue}</h1>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        sx={{
                            mt: 2,
                            p: 2,
                            border: '1px solid black',
                            height: 120,
                        }}
                    >
                        <div>Total Charging Sessions</div>
                        <h1>{total.totalchargesession}</h1>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{
                        mt: 2,
                        pl: 20,
                    }}>
                        <FormControl>
                            <Select
                                value={days}
                                onChange={handleChange}
                            >
                                <MenuItem value={7}>7 days</MenuItem>
                                <MenuItem value={30}>30 days</MenuItem>
                                <MenuItem value={365}>365 days </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>

            <DashboardChart />
        </Box>
    </>)
}

export default DashboardPage