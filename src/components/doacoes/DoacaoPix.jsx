/* eslint-disable react/jsx-indent */
import React from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function copiarClipBoard() {
  navigator.clipboard.writeText("05920548000173");
  toast.success("CNPJ copiado", {
    autoClose: 600,
  });
}

function DoacaoPix() {
  return (
    <div className="doacoes-images-empresas ">
      <h1 className="text-dark">Pix</h1>

      <div className="doacoes-pix d-flex  justify-content-center border-0">
        <Image
          src="/static/images/pixQrCode.jpg"
          width="277%"
          height="277%"
          alt=""
        />
        <table>
          <tr>
            <Image
              src="/static/images/cnpj.png"
              width="320%"
              height="75%"
              alt=""
            />
          </tr>
          <tr className="d-flex justify-content-center">
            <button
              className="btn-copy mt-2"
              onClick={() => {
                copiarClipBoard();
              }}
            >
              <Image
                src="/static/images/icons/copyIcon.svg"
                width="30px"
                height="30px"
                alt=""
              />
            </button>
          </tr>
          <tr className="d-flex justify-content-center">
            <ToastContainer />
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DoacaoPix;
