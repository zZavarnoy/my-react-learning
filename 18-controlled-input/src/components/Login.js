import { useState } from "react";

function Login() {
    const [data, setData] = useState({ username: "", password: "" });

    function handleFormSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(data));
    }

    function handleInputChange(event, name) {
        setData({ ...data, [name]: event.target.value });
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(event) =>
                            handleInputChange(event, "username")
                        }
                    />
                </label>
                <label type="password">
                    Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(event) =>
                            handleInputChange(event, "password")
                        }
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;
