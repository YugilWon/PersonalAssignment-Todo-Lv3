import React, { useState } from "react";
import "./App.css";
import InputPrice from "./components/InputPrice";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Select from "./components/Select";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <Button />
      <InputPrice />
      <Modal />
      <Select selected={selected} setSelected={setSelected} />
    </>
  );
}

export default App;
