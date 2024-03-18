import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = [
    "Button 1",
    "Button 2",
    "Button 3",
    "Button 4",
    "Button 5",
    "Button 6",
];

function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <Counter count={count} />
            {texts.map((text, index) => {
                return (
                    <Button onClick={incrementCount} text={text} key={index} />
                );
            })}
        </div>
    );
}

export default App;
