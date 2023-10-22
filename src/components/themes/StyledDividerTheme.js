import { createTheme } from "@mui/material/styles"
import '../../pages/index.css'
import { COLORS } from "../../utils/colors";

const StyledDividerTheme = createTheme({
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderRightWidth: '3px',
                    backgroundColor: COLORS.blueTheme
                }
            }
        }
    }
})

export { StyledDividerTheme };
