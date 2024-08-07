import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import FA from "react-fontawesome";
import Statistics from "./Components/Statistics";
import Boost from "./Components/Boost";
import Footer from "./Components/Footer";
import Shortener from "./Components/Shortener";

function App() {
    return (
        <div className="App">
            <div className="light-bg">
                <Navbar />
                <Hero />
            </div>
            <div className="shade-bg">
                <Shortener />
                <Statistics />
            </div>
            <Boost />
            <Footer />
        </div>
    );
}

export default App;
