/* eslint-disable react/jsx-max-depth */
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";

import Logo from "../../../public/static/images/logo.svg";
import Box from "../box";

const expand = "xl";

function Header() {
  return (
    <container className="styles-header">
      <Navbar key={expand} expand={expand} style={{ width: "100%" }}>
        <Box width="100%" justify="center">
          <Link href="/">
            <div className="logo-header">
              <Image
                style={{ cursor: "pointer" }}
                src={Logo}
                alt="logo-header"
                layout="fill"
              />
            </div>
          </Link>
          <Navbar.Toggle
            style={{
              border: "1px solid var(--primary-color)",
              color: "white",
              margin: 0,
            }}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header
              style={{ background: "var(--primary-color)" }}
              closeButton
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="w-100">
              <Nav id="buttons-header" className="flex-grow-1">
                <Nav.Link href="/sobre-nos">Quem Somos</Nav.Link>
                <Nav.Link href="/programa">O Programa</Nav.Link>
                <Nav.Link href="/voluntarios">Voluntários</Nav.Link>
                <Nav.Link href="/doacoes">Doações</Nav.Link>
                <Nav.Link href="/parcerias">Parcerias</Nav.Link>
                <Nav.Link href="/publicacoes ">Publicações</Nav.Link>
                <Nav.Link href="/agenda ">Agenda</Nav.Link>
                {new Date() >= new Date("2023-12-17") && (
                  <Nav.Link href="/login">Login</Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Box>
      </Navbar>
      <div className="side-buttons">
        <a href="/voluntarie-se" rel="noopener noreferrer">
          Voluntarie-se
        </a>
        <a
          href="https://palavrasdepaz.colabore.org/doacoes/single_step"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doe Agora
        </a>
      </div>
    </container>
  );
}

export default Header;
