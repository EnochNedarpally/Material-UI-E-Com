import { autocompleteClasses, createTheme } from "@mui/material";
import { amber, blueGrey, indigo } from "@mui/material/colors";


const primaryColor=indigo[400];
const secondarayColor=blueGrey[500];
const dangerColor=amber[800];

const theme =createTheme({
    palette: {
        primary: {
          main: primaryColor,
        },
        secondary: {
          main: secondarayColor,
        },
        error: {
            main: dangerColor,
          },
      },
    components:{
        MuiFab:{
            styleOverrides:{
                secondary:{
                    color:dangerColor,
                    '&:hover':{
                        color:secondarayColor,
                    }
                }
            }
        },
    }
});

export default theme;
