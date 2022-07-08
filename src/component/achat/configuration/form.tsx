import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        color: "white",
        orderRadius: "15px",

        "& .MuiInputBase-root ": {
            backgroundColor: 'white',
            borderRadius: "8px",
        },

        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {

        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black",

        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
            fontSize: "25px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: 'black'
        }
    }
});
const ConfigurationForm = () => {
    const classes = useStyles();
    return (
        <div className='form-date'>
            <form className='d-flex'>
                <div className='btn-switch'>
                    <IconButton aria-label="delete" size="small">
                        <i><RiArrowUpDownLine /></i>
                    </IconButton>
                </div>
                <div className='from-inputs d-flex justify-content-between col-11 '>
                    <div className='col-4'>
                        <label>Origine</label>
                        <TextField className={classes.root} id="outlined-basic" variant="outlined" />
                    </div>
                    <div className='col-4'>
                        <label>Destination</label>
                        <TextField className={classes.root} id="outlined-basic" variant="outlined" />
                    </div>
                    <div className='col-2'>
                        <label>Du</label>
                        <TextField className={classes.root} id="outlined-basic" variant="outlined" />
                    </div>
                    <div className='col-2'>
                        <label>Au</label>
                        <TextField className={classes.root} id="outlined-basic" variant="outlined" />
                    </div>
                </div>
                <div className='col-1 d-flex justify-content-start'>
                    <button className='btn btn-submit'><i><MdOutlineNavigateNext /></i></button>
                </div>
            </form>
        </div>

    )
}
export default ConfigurationForm