import {
  SelectContainer,
  SelectBox,
  SelectTitle,
  Dropdown,
} from "./styledcomponents/Styled";

function Select() {
  const options = [
    { id: 1, value: "option1", label: "리액트" },
    { id: 2, value: "option2", label: "자바" },
    { id: 3, value: "option3", label: "스프링" },
    { id: 4, value: "option4", label: "리액트네이티브" },
  ];

  return (
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
  );
}

export default Select;
