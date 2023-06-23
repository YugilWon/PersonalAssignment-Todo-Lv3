import { useState } from "react";

import {
  SelectContainer,
  SelectBox,
  SelectTitle,
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./styledcomponents/Styled";

function Select() {
  const options = [
    { id: 1, value: "option1", label: "리액트" },
    { id: 2, value: "option2", label: "자바" },
    { id: 3, value: "option3", label: "스프링" },
    { id: 4, value: "option4", label: "리액트네이티브" },
  ];

  const [selected1, setSelected1] = useState("");
  const [isActive1, setIsActive1] = useState(false);
  const [selected2, setSelected2] = useState("");
  const [isActive2, setIsActive2] = useState(false);

  return (
    <>
      <SelectContainer>
        <SelectBox>
          <SelectTitle>Select</SelectTitle>
          <DropdownButton onClick={() => setIsActive1(!isActive1)}>
            {selected1}
          </DropdownButton>
          {isActive1 && (
            <DropdownContent>
              {options.map((item) => (
                <DropdownItem
                  key={item.id}
                  onClick={() => {
                    setSelected1(item.label);
                    setIsActive1(false);
                  }}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownContent>
          )}
          <DropdownContainer>
            <DropdownButton onClick={() => setIsActive2(!isActive2)}>
              {selected2}
            </DropdownButton>
            {isActive2 && (
              <DropdownContent>
                {options.map((item) => (
                  <DropdownItem
                    key={item.id}
                    onClick={() => {
                      setSelected2(item.label);
                      setIsActive2(false);
                    }}
                  >
                    {item.label}
                  </DropdownItem>
                ))}
              </DropdownContent>
            )}
          </DropdownContainer>
        </SelectBox>
      </SelectContainer>
    </>
  );
}

export default Select;
