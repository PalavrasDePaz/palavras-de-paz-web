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

import { Modal } from "react-bootstrap";
import { format } from "date-fns";
import Grafico from "../../../../public/static/images/icons/grafico.svg";
import { api } from "../../../api";

import BtnDados from "./BtnDados";

import Styles from "../styles/Dados.module.css";
import PaginationStyle from "../../../styles/pagination/Pagination.module.css";

import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

export default function DadosPresenca() {
  const [show, setShow] = useState(false);
  const getDadosAttendances = async () => {
    try {
      const response = await api.get(`/attendances/metrics/download`, {
        responseType: "arraybuffer",
      });

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `dados-presencas.xlsx`; // Nome do arquivo
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error("Erro ao baixar os dados");
    }
  };
  return (
    <section className={Styles.containerSectionDados}>
      <div className={Styles.dadosFirstDiv}>
        <Image src={Grafico} width="170px" height="170px" />
        <div>
          <h2>
            Dados e presença
            <br />
            dos voluntários
          </h2>
          <p>Acompanhe os registros e as atividades dos voluntários.</p>
        </div>
      </div>
      <div className={Styles.dadosSecondDiv}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShow(true);
          }}
        >
          Visualizar na web
        </a>
        <span> ou </span>
        <BtnDados onClick={getDadosAttendances} />
      </div>
      {show && <ModalDadosPresenca show={show} onHide={() => setShow(false)} />}
    </section>
  );
}

const ModalDadosPresenca = ({ show, onHide }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dadosPresenca, setDadosPresenca] = useState([]);

  const getDadosPresenca = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await api.get(
        `/attendances/metrics?page=${currentPage}`
      );
      setDadosPresenca(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDadosPresenca();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getPages = () => {
    const pages = [];
    const totalPages = dadosPresenca?.totalCount || 0;

    const limit = 5;

    const totalBlocks = Math.ceil(totalPages / limit);

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
        <Modal.Title>Dados e presença</Modal.Title>
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
        {!loading && !dadosPresenca?.nodes?.length && (
          <p>Não há dados para serem exibidos</p>
        )}
        {error && <p>Erro ao carregar os dados</p>}
        {!loading && !!dadosPresenca?.nodes?.length && (
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
                  <th>Nome</th>
                  <th>ID Vol</th>
                  <th>Aval cadernos</th>
                  <th>Aval livro</th>
                  <th>Cert</th>
                  <th>habil-leitura</th>
                  <th>habil-livro</th>
                  <th>Npres</th>
                  <th>`1`</th>
                  <th>`2`</th>
                  <th>`3`</th>
                  <th>`4`</th>
                  <th>`5`</th>
                  <th>`6`</th>
                  <th>`7`</th>
                  <th>`8`</th>
                  <th>`9`</th>
                  <th>`10`</th>
                  <th>`11`</th>

                  <th>Livro 0</th>
                  <th>Livro 1</th>
                  <th>Livro 2</th>
                  <th>Livro 3</th>
                  <th>Livro 4</th>
                  <th>Livro 5</th>
                  <th>Livro 6</th>
                  <th>Livro 7</th>
                  <th>Livro 8</th>
                  <th>Livro 9</th>
                  <th>Livro 10</th>
                  <th>Livro 11</th>
                  <th>Livro 12</th>
                  <th>Facil</th>
                  <th>Telefone</th>
                  <th>E-mail</th>
                  <th>Submission date</th>
                </tr>
              </thead>
              <tbody>
                {dadosPresenca.nodes.map((presenca) => (
                  <tr key={presenca.id}>
                    <td>{presenca.nome}</td>
                    <td>{presenca.idvol}</td>
                    <td>{presenca["aval cadernos"]}</td>
                    <td>{presenca["aval livro"]}</td>
                    <td>{presenca.cert}</td>
                    <td>{presenca["habil-leitura"]}</td>
                    <td>{presenca["habil-livro"]}</td>
                    <td>{presenca.Npres}</td>
                    <td>{presenca["`1`"]}</td>
                    <td>{presenca["`2`"]}</td>
                    <td>{presenca["`3`"]}</td>
                    <td>{presenca["`4`"]}</td>
                    <td>{presenca["`5`"]}</td>
                    <td>{presenca["`6`"]}</td>
                    <td>{presenca["`7`"]}</td>
                    <td>{presenca["`8`"]}</td>
                    <td>{presenca["`9`"]}</td>
                    <td>{presenca["`10`"]}</td>
                    <td>{presenca["`11`"]}</td>
                    <td>{presenca["Livro 0"]}</td>
                    <td>{presenca["Livro 1"]}</td>
                    <td>{presenca["Livro 2"]}</td>
                    <td>{presenca["Livro 3"]}</td>
                    <td>{presenca["Livro 4"]}</td>
                    <td>{presenca["Livro 5"]}</td>
                    <td>{presenca["Livro 6"]}</td>
                    <td>{presenca["Livro 7"]}</td>
                    <td>{presenca["Livro 8"]}</td>
                    <td>{presenca["Livro 9"]}</td>
                    <td>{presenca["Livro 10"]}</td>
                    <td>{presenca["Livro 11"]}</td>
                    <td>{presenca["Livro 12"]}</td>
                    <td>{presenca.Facil}</td>
                    <td>{presenca.telefone}</td>
                    <td>{presenca["e-mail"]}</td>
                    <td>
                      {format(
                        new Date(presenca["Submission date"]),
                        "dd/MM/yyyy"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!!dadosPresenca?.nodes?.length && (
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className=" d-flex align-items-center">
              <button
                className="me-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!dadosPresenca.pageInfo?.hasPreviousPage}
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
                disabled={!dadosPresenca.pageInfo?.hasNextPage}
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
