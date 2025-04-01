import "./App.css";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Schedule } from "./components/Schedule";
import { Tickets } from "./components/Tickets";

function App() {
    return (
        <>
            <Navigation />

            <Header />

            <Description />

            <Tickets />

            <Schedule />

            <Footer />
        </>
    );
}

export default App;
