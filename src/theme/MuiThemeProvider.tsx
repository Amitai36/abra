import {
    CssBaseline,
    ThemeProvider,
    createTheme,
  } from "@mui/material";
  import React, { ReactNode } from "react";
  
  interface MuiProviderThemeProps {
    children: ReactNode;
  }
  
  function MuiProviderTheme(props: MuiProviderThemeProps) {
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode:"light",
            background: {
              default: "#e2f2f2",
            },
          },
          direction: "rtl",
          components: {
            MuiTextField: {
              styleOverrides: {
                root: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: 50,
                      borderColor: "yellow solid",
                    },
                  },
                },
              },
            },
          },
        }),
      []
    );
  
    return (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div
              style={{
                height: "100vh",
                width: "100vw",
                maxWidth: "100%",
              }}
            >
              {props.children}
            </div>
          </ThemeProvider>
    );
  }
  
  export default MuiProviderTheme;