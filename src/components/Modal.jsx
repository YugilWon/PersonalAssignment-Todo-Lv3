import React, { useState } from "react";
import {
  LargeButton,
  SmallButton,
  ModalContainer,
  ModalOverlay,
} from "./styledcomponents/Styled";

function Modal() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

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
  return (
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
            <SmallButton bgcolor="gray" fontcolor="black" onClick={closeModal1}>
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
            <SmallButton bgcolor="gray" fontcolor="black" onClick={closeModal2}>
              닫기
            </SmallButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
}

export default Modal;
