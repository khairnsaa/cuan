import { Box, Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import AddIcon from '@mui/icons-material/Add';
import styles from '../../styles/Upcoming.module.css'
import UpcomingCard from './components/UpcomingCard'

const UpcomingPage = () => {
    return (
        <>
            <Head>
                <title>Upcoming | Cuan</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container sx={{p: "16px"}}>
                <Typography textAlign="center" variant="h4">Coming Soon</Typography>
                {/* <Button variant="outlined" fullWidth className={styles.btn}>
                    <Box width='100%' display='flex' alignItems='center' justifyContent='space-between'>
                        <Typography whiteSpace='nowrap' fontSize="12px">Create New Schedulled Payment</Typography>
                        <AddIcon />
                    </Box>
                </Button>
                <Box mt="24px">
                    <Typography variant="h5" children="Upcoming" />
                    <UpcomingCard />
                </Box> */}
            </Container>
        </>
    );
}
 
export default UpcomingPage;