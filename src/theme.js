import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#a928ff',
        },
        secondary: {
            main: '#ff319f',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;