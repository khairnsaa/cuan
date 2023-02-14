import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from '../../../styles/Upcoming.module.css'

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

const UpcomingCard = () => {
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
        <Grid container sx={{border: '1px solid #fafafa', p: "8px 16px", m: "16px 0", borderRadius: "8px"}}>
            <Grid item xs={12} className={styles.flexCard} py="24px">
                <Typography fontSize="14px">Rakit PC</Typography>
                <Box className={styles.flexCard}>
                    <Typography fontSize="14px">Rp 200.000</Typography>
                    <Typography fontSize="14px" mx="4px">/</Typography>
                    <Typography fontSize="14px">Rp 20.000.000</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} mb="16px">
                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
            </Grid>
        </Grid>
    );
}
 
export default UpcomingCard;