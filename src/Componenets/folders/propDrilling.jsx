import { useState } from "react";
import { data } from "../data/data.js";

const PropDrilling = () => {
  const [state, setState] = useState(data);

  const removePerson = (id) => {
    setState((state) => {
      return state.filter((user) => user.id !== id);
    });
  };

  return (
    <div>
      <h1>Prop Drilling</h1>
      <List people={state} removePerson={removePerson} />
    </div>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <SinglePerson
            removePerson={removePerson}
            key={id}
            name={name}
            id={id}
          />
        );
      })}
    </div>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div key={id}>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>click</button>
    </div>
  );
};

export default PropDrilling;
