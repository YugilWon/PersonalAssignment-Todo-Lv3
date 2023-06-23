import styled from "styled-components";

//버튼 스타일-------------------------------------------------
export const Button = styled.button`
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

export const LargeButton = styled(Button)`
  height: 50px;
  width: 300px;
`;

export const SmallButton = styled(Button)``;

export const MediumButton = styled(Button)`
  height: 50px;
  width: 150px;
`;
//모달부분---------------------------------------------------
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ModalOverlay = styled.div`
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
//셀렉부분--------------------------------------------------
export const SelectContainer = styled.div`
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
`;

export const SelectBox = styled.div`
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  overflow: hidden;
`;
export const SelectTitle = styled.h1`
  margin-top: 10px;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Dropdown = styled.select`
  padding: 8px;
  margin-left: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 10px;
`;

//인풋부분-------------------------------------------------
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 15px;
`;

export const SaveButton = styled.button`
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
