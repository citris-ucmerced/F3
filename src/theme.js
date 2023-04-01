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
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '&:last-child': {paddingBottom: 0}
                }
            }
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