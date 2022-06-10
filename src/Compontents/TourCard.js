import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const TourCard = () => {
    return <Grid item xs={3}>
        <Paper elevation={10}>
            <img
                src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                className='img'></img>
        </Paper>
    </Grid >
}

export default TourCard