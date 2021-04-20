import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const bBlue = "#264D59"
const bTeal = "#43978D"

const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${bBlue}`,
            teal: `${bTeal}`
        },
        primary: {
            main: `${bBlue}`,
        },
        secondary: {
            main: `${bTeal}`,
        },
    },
});


