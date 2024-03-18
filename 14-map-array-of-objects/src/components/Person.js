function Person(props) {
    const { firstName, lastName, email, img } = props;
    return (
        <div className="card">
            <img src={img} alt="img"></img>
            <h3>
                {lastName} {firstName}
            </h3>
            <h4>{email}</h4>
        </div>
    );
}

export default Person;
