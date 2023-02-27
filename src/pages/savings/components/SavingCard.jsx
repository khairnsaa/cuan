import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from '../../../styles/Upcoming.module.css'

const SavingCard = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
            return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);
  
    return (
        <Grid container className={styles.container}>
            <Grid item xs={12} className={styles.flexCard} py="16px">
                <Typography fontSize="14px">Rakit PC</Typography>
                <Box className={styles.flexCard}>
                    <Typography fontSize="14px">Rp 200.000</Typography>
                    <Typography fontSize="14px" mx="4px">/</Typography>
                    <Typography fontSize="14px">Rp 20.000.000</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} mb="8px">
                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
            </Grid>
        </Grid>
    );
}
 
export default SavingCard;