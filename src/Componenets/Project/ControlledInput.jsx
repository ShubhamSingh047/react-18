import { useState } from "react";

const ControlledInput = () => {
  const [person, setPerson] = useState({
    firstName: "",
    age: "",
    email: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPeople = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPeople]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form>
          <label htmlFor="fisrtName">Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />

          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
          <button type="submit" className="btn" onClick={handleSubmit}>
            add people
          </button>
        </form>
      </article>
      <article>
        <ul>
          {people.map((data) => {
            const { firstName, id, email, age } = data;
            return (
              <div key={id}>
                <li>{firstName}</li>
                <li>{age}</li>
                <li>{email}</li>
              </div>
            );
          })}
        </ul>
      </article>
    </>
  );
};

export default ControlledInput;
