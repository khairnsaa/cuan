import { Box, Button, Dialog, Grid, TextField, Typography } from "@mui/material";

const FormDialog = ({open, onClose}) => {
    return (
        <Dialog onClose={onClose} open={open}>
            <Grid container spacing={3} sx={{ p: "16px" }}>
                <Grid item xs={12} mb="14px">
                    <Typography align="center" variant="h5" children="Add Form" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Budget Title" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Budget Icon 💡" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button fullWidth onClick={onClose} sx={{mr: "8px"}} variant="outlined">Cancel</Button>
                        <Button fullWidth variant="contained">Save</Button>
                    </Box>
                </Grid>
            </Grid>
        </Dialog>
    );
}
 
export default FormDialog;