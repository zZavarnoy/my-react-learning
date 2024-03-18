import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
    return (
        <div className="App">
            <PetInfo animal="cat" age={12} hasPet />
            <PetInfo animal="guinea pig" age={2} hasPet={false} />
        </div>
    );
}

export default App;
