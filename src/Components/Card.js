import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme } from '@mui/material'



const TourCard = () => {
    return <Grid item xs={3}>
        <ThemeProvider theme={theme}>
            <Paper elevation={5}>
                <img src='https://images.unsplash.com/photo-1654847129539-3ef544f24036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='img'
                    className='img'></img>
                <Box l={{
                    display: 'flex',
                    alignItems: 'flex-start',
                }}
                    padding={3}
                    marginTop={3}>

                    <Typography variant='subtitle1'>
                        Best Over All
                    </Typography>
                    <Rating name='readOnly' value={4.5} precision={0.5} readOnly />
                    <Typography variant='body2'>4.5
                    </Typography>
                </Box>
            </Paper>
        </ThemeProvider>
    </Grid >
}

export default TourCard