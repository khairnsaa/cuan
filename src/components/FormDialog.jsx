import { Dialog, Typography } from "@mui/material";

const FormDialog = ({open}) => {
    return (
        <Dialog open={open}>
            <Typography children="Add Form" />
        </Dialog>
    );
}
 
export default FormDialog;