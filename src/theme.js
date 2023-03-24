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
                width: '60rem',
                margin: 'auto',
                marginTop: '10%',
                boxShadow: '10px 10px 5px lightgrey'
            }
        }
    },
    MuiCardMedia: {
        styleOverrides: {
            root: {
                height: 'auto',
                width: '15rem',
                objectFit: 'cover'
            }
        },
    }
  },
});

export default theme;