import React, { useState, useReducer } from "react";
import { data } from "../data/data.js";
import Modal from "./Modal";

const reduce = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    const modal = [action.payload];
    return {
      ...state,
      isModalOpen: true,
      modalContent: modal,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("action type does not mached");
};

const defaultState = {
  people: [],
  isModalOpen: true,
  modalContent: "",
};

const Reducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reduce, defaultState);
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newId = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newId });
      setName("");
    } else {
      const modalValue = "Please add Name !";
      dispatch({ type: "NO_VALUE", payload: modalValue });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <React.Fragment>
      <div>
        <h1> Use Reducer</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="data">Values: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      {state.isModalOpen && (
        <Modal closeModal={closeModal}>{state.modalContent}</Modal>
      )}
      {state.people &&
        state.people.map((person) => {
          const { name, id } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
              >
                remove
              </button>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default Reducer;
