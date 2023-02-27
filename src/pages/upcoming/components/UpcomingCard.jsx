import { Box, Typography } from "@mui/material";
import styles from '../../../styles/Upcoming.module.css'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const UpcomingCard = () => {  
    return (
        <Box className={styles.upcoming}>
            <Box sx={{
                display: 'flex'
            }}>
                <SubscriptionsIcon />
                <Typography pl="8px">Netflix Subs</Typography>
            </Box>
            <Typography>Rp. 120.000</Typography>
        </Box>
    );
}
 
export default UpcomingCard;