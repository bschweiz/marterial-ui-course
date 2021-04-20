import { createMuiTheme } from '@material-ui/core/styles';

const bBlue = "#264D59"
const bTeal = "#43978D"

export default createMuiTheme({
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


