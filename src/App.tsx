import "./styles/global.sass";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import Navbar from "../src/layouts/UI/Navbar/Navbar";
import Footer from "../src/layouts/UI/Footer";
import Home from "./Home";

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
