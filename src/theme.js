import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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