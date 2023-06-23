import {
  SmallButton,
  MediumButton,
  LargeButton,
} from "./styledcomponents/Styled";

function Button() {
  const LgBtnHandler = () => {
    alert("아직은 꺾이지 않았습니다!");
  };

  const LargeBtnHandler = () => {
    prompt("React반 모두 화이팅입니다!");
  };

  return (
    <>
      <h1>Button</h1>
      <div className="Button-Container1">
        <LargeButton bgcolor="yellow" fontcolor="red" onClick={LgBtnHandler}>
          LargeButton
          <label>🚨</label>
        </LargeButton>
        <MediumButton bgcolor="gray">MediumButton</MediumButton>
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
        <MediumButton bgcolor="green">MediumButton</MediumButton>
        <SmallButton bgcolor="blue" fontcolor="red">
          SmallButton
        </SmallButton>
      </div>
    </>
  );
}

export default Button;
