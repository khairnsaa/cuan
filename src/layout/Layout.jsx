import { Autocomplete, Box, Button, Dialog, Fab, Grid, TextField, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import SavingsIcon from '@mui/icons-material/Savings';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Link from "next/link";
import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import { MobileDatePicker } from "@mui/x-date-pickers";

const FormDialog = ({handleClose, open}) => {
    const [value, setValue] = useState(null);

    const categoryList = [
        {label: 'food', value: 'food'},
        {label: 'transport', value: 'transport'},
        {label: 'entertainment', value: 'entertainment'},
        {label: 'idk', value: 'idk'},
    ]
    return (
        <Dialog onClose={handleClose} open={open}>
            <Grid container spacing={2} sx={{
                p: "16px"
            }}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h5" children="Add Form" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Title" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            label="Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={categoryList}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="contained">Save</Button>
                </Grid>
            </Grid>
        </Dialog>
    )
}

const Layout = ({children}) => {
    const [ open, setOpen ] = useState(false)

    const handleClickOpen = () => setOpen(true);
    const handleClose = (value) => setOpen(false);
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
                <Box onClick={handleClickOpen} className="add">
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
                <Link href="/savings">
                    <SavingsIcon fontSize="large" sx={{color: "#fafafa"}} />
                </Link>
                <Link href="/stats">
                    <TimelineIcon fontSize="large" sx={{color: "#fafafa"}} />
                </Link>
            </footer>
            <FormDialog handleClose={handleClose} open={open} />
        </React.Fragment>
    );
}
 
export default Layout;