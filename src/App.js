import "./App.css";
import Navbar from "./Components/Navbar";
import FA from "react-fontawesome";

function App() {
    return (
        <div className="App">
            <Navbar />
            <FA className="super-crazy-colors" name="rocket" size="4x" />
        </div>
    );
}

export default App;
