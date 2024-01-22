import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import Box from "../box";

import ButtonForm from "./ButtonForm";
import * as S from "./styled";

export default function FixedButton() {
  const [smShow, setSmShow] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const HEIGHT_TO_SHOW_BUTTON = 500;
  const HEIGHT_TO_SHOW_BUTTON_MOBILE = 3500;
  const WIDTH_TO_SHOW_BUTTON_MOBILE = 768;

  const handleScroll = () => {
    setHeight(window.scrollY);
  };

  const handleResize = () => {
    if (window.innerWidth >= WIDTH_TO_SHOW_BUTTON_MOBILE) {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <>
      {width <= WIDTH_TO_SHOW_BUTTON_MOBILE &&
        height <= HEIGHT_TO_SHOW_BUTTON_MOBILE && (
          <S.FixedBtnMobile
            onClick={() => setSmShow(true)}
            className="animate__animated animate__fadeInRight"
          >
            <img
              src="/static/images/msg_icon.svg"
              width="45px"
              height="45px"
              alt=""
            />
          </S.FixedBtnMobile>
        )}

      {width >= WIDTH_TO_SHOW_BUTTON_MOBILE &&
        height >= HEIGHT_TO_SHOW_BUTTON && (
          <S.FixedBtn
            onClick={() => setSmShow(true)}
            className="animate__animated animate__fadeInRight"
          >
            CONTATO
          </S.FixedBtn>
        )}

      <Modal
        width="100%"
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Box display="flex" direction="column">
            <Modal.Title
              id="example-modal-sizes-title-sm"
              className="text-center mt-4"
            >
              CONTATO
            </Modal.Title>
            <p className="text-center">
              Fique à vontade. Retornaremos em breve.
            </p>
          </Box>
        </Modal.Header>
        <Modal.Body>
          <ButtonForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
