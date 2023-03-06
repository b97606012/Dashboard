import { Grid, Box, IconButton } from '@mui/material'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { cyan, grey, indigo } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

function UserPanel() {
    return (
        <>
            <Box sx={{ m: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={10} />
                    <Grid item xs={2}>
                        <IconButton><ReportProblemOutlinedIcon sx={{ fontSize: 36, color: grey[800] }} /></IconButton>
                        <IconButton><NotificationsNoneOutlinedIcon sx={{ fontSize: 36, color: cyan[200] }} /></IconButton>
                        <IconButton><AccountCircleOutlinedIcon sx={{ fontSize: 36, color: indigo[800] }} /></IconButton>
                    </Grid>
                </Grid>
            </Box>
            <hr />
        </>
    );
}

export default UserPanel;
