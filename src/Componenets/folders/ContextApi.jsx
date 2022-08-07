import { useState, useContext } from "react";
import SetUp from "./SetUp";

const PersonContext = React.createContext();

const ContextApi = () => {
  return (
    <div>
      <SetUp />
    </div>
  );
};

export default ContextApi;
