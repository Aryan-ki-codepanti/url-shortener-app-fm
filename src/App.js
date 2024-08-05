import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import FA from "react-fontawesome";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <FA className="super-crazy-colors" name="rocket" size="4x" />
        </div>
    );
}

export default App;
