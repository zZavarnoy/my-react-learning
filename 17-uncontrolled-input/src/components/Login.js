function Login() {
    function handleFormSubmit(event) {
        event.preventDefault();

        const userData = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        alert(JSON.stringify(userData));
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <laben type="password">
                    Password:
                    <input type="password" name="password" />
                </laben>
                <label>
                    <button type="submit">Login</button>
                </label>
            </form>
        </>
    );
}

export default Login;
