import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          padding: '8px 24px 24px 24px',
          backgroundColor: '#1a24b8',
          color: '#ffffff',
        },
        '#root': {
          width: '100%',
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
