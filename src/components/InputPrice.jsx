import React, { useState } from "react";
import {
  InputContainer,
  Label,
  Input,
  SaveButton,
} from "./styledcomponents/Styled";

function InputPrice() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    const Price = event.target.value.replace(/[^0-9]/g, "");
    setPrice(Price);
  };

  const priceWithCommas = (price) => {
    const numberOfPrice = Number(price);
    return numberOfPrice.toLocaleString();
  };

  const saveBtnHandler = (event) => {
    event.preventDefault();
    if (name.trim() === "" || price.trim() === "") {
      alert("이름과 가격을 입력해주세요!");
      return;
    }
    alert(`name:${name} price:${price}`);
    setName("");
    setPrice("");
  };

  return (
    <div className="Input">
      <h1>Input</h1>
      <form className="Input">
        <InputContainer>
          <Label>이름</Label>
          <Input type="text" value={name} onChange={nameChangeHandler} />

          <Label>가격</Label>
          <Input
            type="text"
            value={priceWithCommas(price)}
            onChange={priceChangeHandler}
          />
          <SaveButton bgcolor="gray" fontcolor="black" onClick={saveBtnHandler}>
            저장
          </SaveButton>
        </InputContainer>
      </form>
    </div>
  );
}

export default InputPrice;
