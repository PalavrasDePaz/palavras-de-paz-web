/* eslint-disable react/jsx-indent */
import React from "react";
import Image from "next/image";

function DoacaoPix() {
  return (
    <div className="doacoes-pix">
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
              navigator.clipboard.writeText("05920548000173");
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
      </table>
    </div>
  );
}

export default DoacaoPix;
