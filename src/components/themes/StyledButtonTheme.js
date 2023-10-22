import { createTheme } from "@mui/material/styles"
import '../../pages/index.css'
import { COLORS } from "../../utils/colors";

const StyledButtonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'noto-sans-font-reg',
                    color: COLORS.blueTheme,
                    textTransform: 'none',
                    fontSize: '25px'
                }
            }
        }
    }
})

export { StyledButtonTheme };