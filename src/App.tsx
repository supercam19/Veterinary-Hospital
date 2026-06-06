import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Booking} from "./pages/Booking.tsx";
import {MedicationDelivery} from "./pages/MedicationDelivery";
import {About} from "./pages/About";
import {createTheme, type Theme, ThemeProvider} from "@mui/material";
import {Navbar} from "./components/Navbar.tsx";
import {Footer} from "./components/Footer.tsx";

interface FourColoured {
    light: string;
    lightblue: string;
    blue: string;
    darkblue: string;
}

declare module '@mui/material/styles' {
    interface ThemeOptions {
        brand?: FourColoured,
        darkened?: FourColoured,
    }
    
    interface Theme {
        brand: FourColoured,
        darkened: FourColoured,
    }
}

function App() {

    const theme: Theme = createTheme({
        brand: {
            darkblue: "#111844",
            blue: "#4B5694",
            lightblue: "#7288AE",
            light: "#EAE0CF",
        },
        darkened: {
            darkblue: "#0A0E28",
            blue: "#3E487A",
            lightblue: "#617493",
            light: "#CEC5B7",
        },
        typography: {
            fontFamily: "Roboto",  
        },
    });

  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Navbar />
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/booking" Component={Booking} />
              <Route path="/medication" Component={MedicationDelivery} />
              <Route path="about" Component={About} />   
            </Routes>
              <Footer />
          </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
