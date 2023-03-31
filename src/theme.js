import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    color: 'black'
                },
                title: {
                    flexGrow: 1,
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    margin: 'auto',
                    marginTop: '6rem',
                    boxShadow: '10px 10px 5px lightgrey',
                    transition: 'all 1s ease'
                }
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    height: 'auto',
                    width: 'auto',
                    objectFit: 'cover'
                }
            },
        },
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