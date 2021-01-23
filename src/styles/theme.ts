import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#1a24b8',
          color: '#ffffff',
        },
        '#root': {
          width: 900,
          paddingTop: 32,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          wrap: 'nowrap',
          whiteSpace: 'pre-line',
        },
      },
    },
  },
});

export default theme;
