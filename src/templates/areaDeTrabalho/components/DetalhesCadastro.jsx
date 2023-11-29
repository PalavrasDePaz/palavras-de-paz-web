/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-no-bind */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

import { Modal } from "react-bootstrap";
import Grafico2 from "../../../../public/static/images/icons/grafico2.svg";
import { api } from "../../../api";

import BtnDados from "./BtnDados";
import CustomDatePicker from "./DatePicker";

import Styles from "../styles/Dados.module.css";
import PaginationStyle from "../../../styles/pagination/Pagination.module.css";

import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

export default function DetalhesCadastro() {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectDate] = useState(new Date());

  const getVolunters = async () => {
    const selectedDateString = format(selectedDate, "yyyy-MM-dd");
    const response = await api.get(
      `/volunteers/download/from/${selectedDateString}`,
      {
        responseType: "arraybuffer",
      }
    );

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `voluntarios-${selectedDateString}.xlsx`; // Nome do arquivo
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <section className={Styles.containerSectionDados}>
        <div className={Styles.dadosFirstDiv}>
          <Image src={Grafico2} />
          <h2>
            Detalhes de Cadastro
            <br />
            dos voluntários
          </h2>
        </div>
        <div className={Styles.calendarioDiv}>
          <p>Selecione uma data</p>
          <CustomDatePicker
            selectedDate={selectedDate}
            setSelectDate={setSelectDate}
          />
        </div>
        <div className={Styles.dadosSecondDiv}>
          <a
            href="#"
            onClick={(e) => {
              setShow(true);
            }}
          >
            Visualizar na web
          </a>
          <span> ou </span>
          <BtnDados onClick={getVolunters} />
        </div>
      </section>
      {show && (
        <ModalDetalhesCadastro
          show={show}
          onHide={() => {
            setShow(false);
          }}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
}

const ModalDetalhesCadastro = ({ show, onHide, selectedDate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [volunters, setVolunters] = useState([]);

  const selectedDateString = format(selectedDate, "yyyy-MM-dd");

  const getVolunters = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await api.get(
        `/volunteers/from/${selectedDateString}?page=${currentPage}`
      );
      setVolunters(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVolunters();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getPages = () => {
    const pages = [];
    const totalPages = volunters?.totalCount || 0;

    const limit = 5;

    const currentBlock = Math.ceil(currentPage / limit);

    const initialPage = (currentBlock - 1) * limit + 1;

    const finalPage = Math.min(initialPage + limit - 1, totalPages);

    for (let i = initialPage; i <= finalPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      fullscreen
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title>Detalhes das presenças</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 300px)",
            }}
          >
            <LoadingSpinner />
          </div>
        )}
        {!loading && !volunters?.nodes?.length && (
          <p>Não há dados para serem exibidos</p>
        )}
        {error && <p>Erro ao carregar os dados</p>}
        {!loading && !!volunters?.nodes?.length && (
          <div
            style={{
              maxHeight: "calc(100vh - 300px)",
              overflowY: "auto",
            }}
          >
            <table className="table table-striped table-hover table-bordered ">
              <thead
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
                }}
              >
                <tr>
                  <th>ID Voluntário</th>
                  <th>Nome</th>
                  <th>Data de Submissão</th>
                  <th>Interesse em Posições Futuras</th>
                  <th>Experiencia de vida</th>
                  <th>Experiencia em workshops</th>
                  <th>Desejos</th>
                  <th>Como nos achou ? </th>
                  <th>Conhecimentos</th>
                </tr>
              </thead>
              <tbody>
                {volunters.nodes.map((attendance) => (
                  <tr key={attendance.id}>
                    <td>{attendance.idvol}</td>
                    <td>{attendance.name}</td>
                    <td>
                      {
                        // formata a data q vem como 2023-11-22T00:00:00.000Z
                        format(new Date(attendance.createdAt), "dd/MM/yyyy")
                      }
                    </td>
                    <td>{attendance.interestFutureRoles.join(", ")}</td>
                    <td>{attendance.lifeExperience}</td>
                    <td>{attendance.knowledgePep}</td>
                    <td>{attendance.desires}</td>
                    <td>{attendance.howFoundPep}</td>
                    <td>{attendance.studiesKnowledge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!!volunters?.nodes?.length && (
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className=" d-flex align-items-center">
              <button
                className="me-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!volunters.pageInfo?.hasPreviousPage}
              >
                Anterior
              </button>
              <div className=" d-flex align-items-center ">
                {getPages().map((page) => (
                  <button
                    key={page}
                    className={`${PaginationStyle.pageSelect} ${
                      page === currentPage && PaginationStyle.active
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="ms-2"
                disabled={!volunters.pageInfo?.hasNextPage}
              >
                Próxima
              </button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
