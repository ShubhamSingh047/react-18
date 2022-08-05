import { useState, useContext, createContext } from "react";
import { data } from "../data/data.js";

const userContext = createContext();

const PropDrilling = () => {
  const [state, setState] = useState(data);

  const removePerson = (id) => {
    setState((state) => {
      return state.filter((user) => user.id !== id);
    });
  };

  return (
    <userContext.Provider value={{ removePerson }}>
      <h1>Prop Drilling</h1>
      <List people={state} removePerson={removePerson} />
    </userContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { name, id } = person;
        return <SinglePerson key={id} name={name} id={id} />;
      })}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(userContext);
  console.log(removePerson);
  return (
    <div key={id}>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>click</button>
    </div>
  );
};

export default PropDrilling;
