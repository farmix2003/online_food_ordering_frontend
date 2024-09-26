import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import { Home, Navbar } from "./components";
import { useTranslation } from "react-i18next";
import RestaurantDetails from "./components/restaurant/RestaurantDetails";

const App = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "En" },
    { code: "tr", name: "Tr" },
  ];

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar i18n={i18n} languages={languages} />
        {/* <Home t={t} /> */}
        <RestaurantDetails />
      </ThemeProvider>
    </div>
  );
};

export default App;
