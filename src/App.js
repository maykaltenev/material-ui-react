
import './App.css';
import './Components/Banner.css'
import Card from './Components/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './Components/AppBar'
import Banner from './Components/Banner';
import { Box } from '@mui/system';

function App() {
  return (
    <>
      < div className="App" >
        <  ResponsiveAppBar />
        <Box container spacing={5}>
          <Banner className='body' />
        </Box>
        <Container>
          <Grid container spacing={10}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </Container>

      </div >

    </>
  )

}

export default App;
