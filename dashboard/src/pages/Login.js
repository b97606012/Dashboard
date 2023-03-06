import classes from '../components/LoginForm.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material'

function LoginPage() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleForgetPassword = async () => {
        if (!inputs.email) {
            alert('Please fill in the email.')
        } else {
            const res = await axios.post('http://localhost:4000/login/forget', { inputs },
                { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
            )
            if (res.data.status === 200) {
                alert('Password sent to the email!')
            }
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            email: inputs.email,
            password: inputs.password,
        }
        const res = await axios.post('http://localhost:4000/login',
            userData,
            { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        )
        if (res.data.status === 200) {
            sessionStorage.setItem("token", res.data.token);
            window.location.assign('/')
        } else {
            alert('Login failed, please try again!')
            window.location.assign('/')
        }
    }
    return (<>
        <div className={classes.login}>
            <div className={classes.loginBox}>
                <h1>Welcome to LITEON</h1>
                <form onSubmit={onSubmit} className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <label>Email:</label>
                        </Grid>
                        <Grid item xs={6} >
                            <input
                                type="email"
                                name="email"
                                value={inputs.email}
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={6} >
                            <label>Password:</label>
                        </Grid>
                        <Grid item xs={6} >
                            <input
                                type="password"
                                name="password"
                                value={inputs.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={8} >
                        </Grid>
                        <Grid item xs={4} >
                            <div onClick={handleForgetPassword}>Forget Password?</div>
                        </Grid>
                    </Grid>

                    <div className={classes.actions}>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div >
    </>)
}

export default LoginPage
