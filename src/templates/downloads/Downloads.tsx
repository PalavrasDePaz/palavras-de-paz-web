import React from "react";
import { Button, Card } from "react-bootstrap";

const Downloads = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
    <Card style={{ width: "20.625rem", height: "31rem" }}>
      <Card.Img
        variant="top"
        src="/static/images/downloads/espelho.png"
        style={{ maxWidth: "90%" }}
      />
      <Card.Body>
        <Card.Title>O Espelho na Parede</Card.Title>
        <Card.Text>
          <p>
            Era uma vez uma aldeia distante onde viviam pessoas muito simples.
            Um dia, chegou um turista. Na manhã seguinte, ele pegou seu espelho
            e colocou-o na parede para se barbear.
          </p>
        </Card.Text>
        <a href="./Arquivos/Artigo 1- O Espelho na Parede - Paz.pdf" download>
          {" "}
          <Button variant="success" style={{ marginTop: "22px" }}>
            Download
          </Button>
        </a>
      </Card.Body>
    </Card>
    <Card style={{ width: "20.625rem", height: "31rem" }}>
      <Card.Img
        variant="top"
        src="/static/images/downloads/paz.png"
        style={{ maxWidth: "65%" }}
      />

      <Card.Body>
        <Card.Title>Paz é ... - Paz</Card.Title>
        <Card.Text>
          <p>
            Você já ouviu a palavra paz muitas vezes. No entanto, de que tipo de
            paz estamos falando? Por todo este tempo que falo da paz, tenho
            notado que cada pessoa tem sua própria definição do que é a paz.
          </p>
        </Card.Text>
        <a href="./Arquivos/Artigo 1 - Paz Ac ... - Paz.pdf" download>
          {" "}
          <Button variant="success" style={{ marginTop: "22px" }}>
            Download
          </Button>
        </a>
      </Card.Body>
    </Card>
    <Card style={{ width: "20.625rem", height: "31rem" }}>
      <Card.Img
        variant="top"
        src="/static/images/downloads/paz.png"
        style={{ maxWidth: "65%" }}
      />

      <Card.Body>
        <Card.Title>Um Mundo de Entendimento</Card.Title>
        <Card.Text>
          <p>
            A vida é um presente. Eu quero entender isso com a maior clareza
            possível antes que eu perca a capacidade de entender.
          </p>
        </Card.Text>
        <a
          href="./Arquivos/Artigo 6 - Um Mundo de Entendimento - Entendimento.pdf"
          download
        >
          {" "}
          <Button variant="success" style={{ marginTop: "70px" }}>
            Download
          </Button>
        </a>
      </Card.Body>
    </Card>
    <Card style={{ width: "20.625rem", height: "31rem" }}>
      <Card.Img
        variant="top"
        src="/static/images/downloads/arqueiro.png"
        style={{ maxWidth: "90%" }}
      />

      <Card.Body>
        <Card.Title>O Arqueiro e o Mercador</Card.Title>
        <Card.Text>
          <p>
            Era uma vez um exímio arqueiro que conseguia disparar uma flecha,
            atingir o alvo e disparar em seguida outra flecha....
          </p>
        </Card.Text>
        <a
          href="./Arquivos/Artigo 6- O Arqueiro e o Mercador - Entendimento.pdf"
          download
        >
          {" "}
          <Button variant="success" style={{ marginTop: "80px" }}>
            Download
          </Button>
        </a>
      </Card.Body>
    </Card>
  </div>
);

export default Downloads;
