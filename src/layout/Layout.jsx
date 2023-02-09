import { Box, Fab, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import SavingsIcon from '@mui/icons-material/Savings';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import React from "react";
import styles from '../styles/Home.module.css'

const Layout = ({children}) => {
    return (
        <React.Fragment className="navbar">
            <header className={styles.header}>
                <Typography variant='h6' children="CUAN" />
                <AccountCircleIcon />
            </header>
            {children}
            <footer>
                <Link href="/">
                    <HomeIcon fontSize="large" sx={{color: "#fafafa"}} />
                </Link>
                <Link href="/upcoming">
                    <UpcomingIcon fontSize="large" sx={{color: "#fafafa"}} />
                </Link>
                <Link href="/form" className="add">
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Link>
                <Link href="/savings">
                    <SavingsIcon fontSize="large" sx={{color: "#fafafa"}} />
                </Link>
                <Link href="/stats">
                    <TimelineIcon fontSize="large" sx={{color: "#fafafa"}} />
                </Link>
            </footer>
        </React.Fragment>
    );
}
 
export default Layout;