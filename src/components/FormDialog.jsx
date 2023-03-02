import { budgetAtom } from "@/recoil/atom/budgetAtom";
import { Box, Button, Dialog, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

const FormDialog = ({open, onClose}) => {
    const [budget, setBudget] = useState({
        label: '',
        icon: '',
        amount: '',
    })
    const [budgetList, setBudgetList] = useRecoilState(budgetAtom)

    // const onAddBudget = () => {
    //     setBudgetList(oldBudget => [...oldBudget, budget])
    //     setBudget({
    //         name: '',
    //         icon: ''
    //     })
    // }

    const onAddBudget = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8090/api/collections/budgets/records', { 
            label: budget.label,
            icon: budget.icon,
            amount: budget.amount
          })
          console.log(response)
        } catch (error) {
          console.error(error)
        }
      }

    const handleChange = (e) => {
        setBudget({...budget, [e.target.name]: e.target.value})
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <Grid container spacing={3} sx={{ p: "16px" }}>
                <Grid item xs={12} mb="14px">
                    <Typography align="center" variant="h5" children="Add Form" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Budget Title" variant="outlined" name="label" onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Budget Icon 💡" variant="outlined" name="icon" onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Amount" variant="outlined" name="amount" onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button fullWidth onClick={onClose} sx={{mr: "8px"}} variant="outlined">Cancel</Button>
                        <Button fullWidth variant="contained" onClick={onAddBudget}>Save</Button>
                    </Box>
                </Grid>
            </Grid>
        </Dialog>
    );
}
 
export default FormDialog;