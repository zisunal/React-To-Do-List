import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';

const FormComponent = () => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text });
        setText('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField value={text} label="Note" color='secondary' onChange={handleChange} />
            {loading ? <Button variant="contained" disabled><CircularProgress /></Button> : <Button type="submit" variant="contained">
                <AddIcon />
            </Button>}
        </form>
    );
};

export default FormComponent;