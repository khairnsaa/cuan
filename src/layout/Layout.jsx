import { Autocomplete, Box, Button, Dialog, Fab, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import SavingsIcon from '@mui/icons-material/Savings';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useRecoilState, useRecoilValue } from "recoil";
import { budgetAtom } from "@/recoil/atom/budgetAtom";
import moment from "moment/moment";
import { transactionOutAtom } from "@/recoil/atom/transactionAtom";
import axios from "axios";

const FormDialog = ({handleClose, open, data}) => {
    const [value, setValue] = useState(null);
    const [type, setType] = useState('')
    const [budgetList, setBudgetList] = useState([])
    const [transactionOut, setTransactionOut] = useState({
        name: '',
        date: null,
        category: '',
        amount: ''
    })

    const [transactionList, setTransactionList] = useRecoilState(transactionOutAtom)

    const fetchCategory = async () => {
        const result = await axios.get('https://cuan.fly.dev/api/collections/budgets/records');
        const data = await result.data
        setBudgetList(data.items)
    }

    useEffect(  () => {
        fetchCategory()
    }, [])

    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post('https://cuan.fly.dev/api/collections/transactionTemp/records', { 
    //           type: type,
    //           title: budget.name,
    //           amount: budget.amount,
    //           category: budget.category
    //         })
    //         console.log(response)
    //         console.log('123')
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    const handleSubmit = async () => {
        try {
          const response = await axios.post('https://cuan.fly.dev/api/collections/transactionTemp/records', { 
            type: type,
            title: transactionOut.name,
            amount: transactionOut.amount || "-",
            category: transactionOut.category,
            date: transactionOut.date
          })
          console.log(response)
        } catch (error) {
          console.error(error)
        }
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <Grid container spacing={3} sx={{ p: "16px" }}>
                <Grid item xs={12} mb="14px">
                    <Typography align="center" variant="h5" children="Add Form" />
                </Grid>
                <Grid xs={12} sx={{display: 'flex',justifyContent: 'center'}}>
                    <FormControl>
                        <RadioGroup row name="type" onChange={e => setType(e.target.value)}>
                            <FormControlLabel value="Income" control={<Radio />} label="Income" />
                            <FormControlLabel value="Expense" control={<Radio />} label="Expense" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Title" variant="outlined" name="name" onChange={e => setTransactionOut({...transactionOut, name: e.target.value})} />
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            label="Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                                setTransactionOut({...transactionOut, date: moment(newValue).format("DD/MM/YYYY")})
                            }}
                            renderInput={(params) => <TextField {...params} name="date" />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={budgetList}
                        onChange={(event, newValue) => {
                            setTransactionOut({...transactionOut, category: newValue.label})
                        }}
                        renderInput={(params) => <TextField {...params} name="category" label="Category" />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Amount" variant="outlined" name="amount" onChange={e => setTransactionOut({...transactionOut, amount: e.target.value})} />
                </Grid>
                {/* {
                    type === 'Expense' ?
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={budgetList}
                            onChange={(event, newValue) => {
                                setTransactionOut({...transactionOut, category: newValue.label})
                            }}
                            renderInput={(params) => <TextField {...params} name="category" label="Category" />}
                        />
                    </Grid> :
                    <Grid item xs={12}>
                        <Typography children={"Budget Allocation"} />
                        {
                            budgetList.map(budget => <TextField fullWidth sx={{my: 1}} label={budget.label} variant="outlined" name="name"/>)
                        }
                        
                        
                    </Grid>
                } */}
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" onClick={handleSubmit}>Save</Button>
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
        <Box className="navbar">
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
        </Box>
    );
}
 
export default Layout;