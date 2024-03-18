import Modal from "./components/Modal";
import "./App.css";
import { useState } from "react";

function App() {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setModalActive(true)}>Open</button>
            <Modal
                modalActive={modalActive}
                onClose={() => setModalActive(false)}
            >
                123
            </Modal>
        </div>
    );
}

export default App;
