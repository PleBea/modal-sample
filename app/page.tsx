"use client";

import { useState } from "react";
import Modal from "./components/Modal";
import { styled } from "styled-components";

export default function Index() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Button onClick={() => setModal(true)} />
      <Modal value={[modal, setModal]} />
    </>
  );
}

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
`;
