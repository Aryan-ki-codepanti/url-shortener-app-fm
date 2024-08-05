import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import FA from "react-fontawesome";
import Statistics from "./Components/Statistics";

function App() {
    return (
        <div className="App">
            <div className="light-bg">
                <Navbar />
                <Hero />
            </div>
            <div className="shade-bg">
                {/* <FA className="super-crazy-colors" name="rocket" size="4x" /> */}
                <Statistics />
            </div>
        </div>
    );
}

export default App;
