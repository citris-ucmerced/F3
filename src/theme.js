import { createTheme } from '@mui/material/styles';
import './assets/fonts.css'

const theme = createTheme({
    typography:{
        fontFamily: [
            'Inter',
            'Roboto',
          ].join(','),
        h4:{
            fontWeight: 'bold',
        },
        p:{
            fontFamily: 'Roboto',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                margin: '1rem'
            },
            styleOverrides: {
                body1: {
                    '&.paragraph': {
                        color: 'grey',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                    }
                },

            }
        },
    },
});

export default theme;