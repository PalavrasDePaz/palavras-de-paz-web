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
import ptBR from "date-fns/locale/pt-BR";
import { registerLocale } from "react-datepicker";

import { Modal } from "react-bootstrap";
import IconeLoading from "../../../../public/static/images/icons/iconeLoading.svg";
import { api } from "../../../api";

import BtnDados from "./BtnDados";
import CustomDatePicker from "./DatePicker";

import Styles from "../styles/Dados.module.css";
import PaginationStyle from "../../../styles/pagination/Pagination.module.css";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

registerLocale("ptBR", ptBR);

export default function DetalhesPresenca() {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectDate] = useState(new Date());

  const getAttendances = async () => {
    try {
      const selectedDateString = format(selectedDate, "yyyy-MM-dd");
      const response = await api.get(
        `/attendances/download/from/${selectedDateString}`,
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
      a.download = `presenças-${selectedDateString}.xlsx`; // Nome do arquivo
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error("Erro ao baixar os dados");
    }
  };

  return (
    <>
      <section className={Styles.containerSectionDados}>
        <div className={Styles.dadosFirstDiv}>
          <div className={Styles.detalhesDiv}>
            <Image src={IconeLoading} />
            <h2>
              Detalhes das presenças
              <br />
              dos voluntários
            </h2>
          </div>
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
            onClick={() => {
              setShow(true);
            }}
          >
            Visualizar na web
          </a>
          <span> ou </span>
          <BtnDados onClick={getAttendances} />
        </div>
      </section>
      {!!show && (
        <ModalDetalhesPresenca
          show={show}
          onHide={setShow}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
}

const ModalDetalhesPresenca = ({ show, onHide, selectedDate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [attendances, setAttendances] = useState([]);

  const selectedDateString = format(selectedDate, "yyyy-MM-dd");

  const getAttendances = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await api.get(
        `/attendances/from/${selectedDateString}?page=${currentPage}`
      );
      setAttendances(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAttendances();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getPages = () => {
    const pages = [];
    const totalPages = attendances?.totalCount || 0;

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
        {!loading && !attendances?.nodes?.length && (
          <p>Não há dados para serem exibidos</p>
        )}
        {error && <p>Erro ao carregar os dados</p>}
        {!loading && !!attendances?.nodes?.length && (
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
                  <th>Data de Submissão</th>
                  <th>ID Voluntário</th>
                  <th>Nome</th>
                  <th>Assunto do Workshop</th>
                  <th>Desafio Enfrentado</th>
                  <th>Aprendizado</th>
                  <th>Força Interior</th>
                  <th>Tempo Suficiente</th>
                  <th>Retenção no Estudo</th>
                  <th>Feedback sobre a Melhoria</th>
                </tr>
              </thead>
              <tbody>
                {attendances.nodes.map((attendance) => (
                  <tr key={attendance.id}>
                    <td>
                      {format(
                        new Date(attendance.submissionDate),
                        "dd/MM/yyyy"
                      )}
                    </td>
                    <td>{attendance.idvol}</td>
                    <td>{attendance.name}</td>
                    <td>{attendance.workshopSubject}</td>
                    <td>{attendance.whatChallengedYou}</td>
                    <td>{attendance.differentKnowledgeLearned}</td>
                    <td>{attendance.expressYourself}</td>
                    <td>{attendance.enoughTime}</td>
                    <td>{attendance.studyRetention}</td>
                    <td>{attendance.howCanWeImprove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!!attendances && (
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className=" d-flex align-items-center">
              <button
                className="me-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!attendances?.pageInfo?.hasPreviousPage || loading}
              >
                Anterior
              </button>
              <div className=" d-flex align-items-center ">
                {getPages().map((page) => (
                  <span
                    key={page}
                    className={`${PaginationStyle.pageSelect} ${
                      page === currentPage && PaginationStyle.active
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="ms-2"
                disabled={!attendances?.pageInfo?.hasNextPage || loading}
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
