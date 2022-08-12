import "./styles/global.sass";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import Footer from "../src/layouts/UI/Footer";
import Home from "./Home";
import { Navbar } from "./layouts/UI/Navbar/Navbar";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
