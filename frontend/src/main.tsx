import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: `"Kode Mono", monospace`,
    h1: {
      fontSize: "48px", // or "3rem"
    },
    h2: {
      fontSize: "36px",
    },
    body1: {
      fontSize: "12px",
    },
    body2: {
      fontSize: "10px",
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
