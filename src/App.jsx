import React, { useState } from "react";
import styled from "styled-components";

//버튼부분-----------------------------------------------------
const SmallButton = styled.button`
  margin-top: 20px;
  margin-right: 10px;
  padding: 8px 16px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const MidiumButton = styled.button`
  margin-top: 20px;
  height: 50px;
  width: 150px;
  margin-right: 10px;
  padding: 8px 16px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const LargeButton = styled.button`
  margin-top: 20px;
  height: 50px;
  width: 300px;
  margin-right: 10px;
  padding: 8px 16px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

//인풋 부분-----------------------------------------------------
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 15px;
`;

const SaveButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

//모달부분-----------------------------------------------------
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//드롭박스 부분-----------------------------------------------------
const SelectContainer = styled.div`
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
`;

const SelectBox = styled.div`
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  overflow: hidden;
`;

const SelectTitle = styled.h1`
  margin-top: 10px;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Dropdown = styled.select`
  padding: 8px;
  margin-left: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 10px;
`;

//----------------------------------------------------------------------
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

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

  const LgBtnHandler = () => {
    alert("아직은 꺾이지 않았습니다!");
  };

  const LargeBtnHandler = () => {
    prompt("React반 모두 화이팅입니다!");
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

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const closeByOverlayClick = () => {
    closeModal2();
  };

  const options = [
    { id: 1, value: "option1", label: "리액트" },
    { id: 2, value: "option2", label: "자바" },
    { id: 3, value: "option3", label: "스프링" },
    { id: 4, value: "option4", label: "리액트네이티브" },
  ];

  return (
    <>
      <h1>Button</h1>
      <div className="Button-Container1">
        <LargeButton bgcolor="yellow" fontcolor="red" onClick={LgBtnHandler}>
          LargeButton
          <label>🚨</label>
        </LargeButton>
        <MidiumButton bgcolor="gray">MediumButton</MidiumButton>
        <SmallButton bgcolor="red">SmallButton</SmallButton>
      </div>
      <div className="Button-Container2">
        <LargeButton
          bgcolor="black"
          fontcolor="white"
          onClick={LargeBtnHandler}
        >
          LargeButton
          <label>🚨</label>
        </LargeButton>
        <MidiumButton bgcolor="green">MediumButton</MidiumButton>
        <SmallButton bgcolor="blue" fontcolor="red">
          SmallButton
        </SmallButton>
      </div>

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
            <SaveButton
              bgcolor="gray"
              fontcolor="black"
              onClick={saveBtnHandler}
            >
              저장
            </SaveButton>
          </InputContainer>
        </form>
      </div>

      <div className="Modal-Container">
        <h1>Modal</h1>
        <SmallButton bgcolor="green" onClick={openModal1}>
          open modal
        </SmallButton>
        <LargeButton bgcolor="purple" fontcolor="red" onClick={openModal2}>
          open modal
        </LargeButton>

        {isModalOpen1 && (
          <ModalOverlay>
            <ModalContainer className="modal1">
              <div>
                내일배움캠프 React반 모두 화이팅입니다!!!! <br />
              </div>
              <SmallButton
                bgcolor="gray"
                fontcolor="black"
                onClick={closeModal1}
              >
                닫기
              </SmallButton>
              <SmallButton bgcolor="red" fontcolor="black">
                확인
              </SmallButton>
            </ModalContainer>
          </ModalOverlay>
        )}

        {isModalOpen2 && (
          <ModalOverlay onClick={closeByOverlayClick}>
            <ModalContainer
              className="modal2"
              onClick={(event) => event.stopPropagation()}
            >
              <div>리에잇트조 여러분도 모두 화이팅</div>
              <SmallButton
                bgcolor="gray"
                fontcolor="black"
                onClick={closeModal2}
              >
                닫기
              </SmallButton>
            </ModalContainer>
          </ModalOverlay>
        )}
      </div>

      <SelectContainer>
        <SelectBox>
          <SelectTitle>Select</SelectTitle>
          <Dropdown className="dropdown-1">
            {options.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Dropdown>
          <Dropdown className="dropdown-2">
            {options.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Dropdown>
        </SelectBox>
      </SelectContainer>
    </>
  );
}

export default App;
