import UserContext from "../context/UserContext";
import { useContext, useState } from "react";

function ChangeUser() {
    const { userName, changeUserName } = useContext(UserContext);
    const [name, setName] = useState(userName);

    function handleFormSubmit(e) {
        e.preventDefault();
        changeUserName(name ? name : "Entry name...");
        setName("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                User Name:
                <input
                    type="text"
                    placeholder="Entry user name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button type="submit">Change user name</button>
        </form>
    );
}

export default ChangeUser;
