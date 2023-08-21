"use client";

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type Props = {
  value: [boolean, Dispatch<SetStateAction<boolean>>];
};

export default function Modal({ value }: Props) {
  const [modal, setModal] = value;

  return (
    <>
      <Wrapper
        style={{
          opacity: modal ? 1 : 0,
          visibility: modal ? "visible" : "hidden",
        }}
        onClick={() => setModal(false)}
      >
        <Container
          style={{
            transform: modal ? "translateY(0)" : "translateY(100px)",
          }}
          onClick={(e) => e.stopPropagation()}
        ></Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 75%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;

  transition: all 0.3s ease-in-out;
`;
