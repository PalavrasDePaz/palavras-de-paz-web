/* eslint-disable max-len */
import React from "react";

import { AutorLivro, TituloLivro } from "./style";

function LeituraLivroComponent() {
  return (
    <div className="mt-5">
      <div className="programa-texto">
        <TituloLivro> Objetivo </TituloLivro>
        <p>
          Contribuir por meio da leitura individual e da aplicação de oficinas
          de reflexão em grupo sobre os temas abordados na obra, o
          autoconhecimento e a paz interior a pessoas em situação de privação de
          liberdade desenvolvendo nos reeducandos uma reflexão sobre sua própria
          humanidade e seus recursos interiores como escolha, esperança e
          dignidade.
          <br />
          <br />
          Por meio da leitura e demais atividades do projeto temos por objetivo
          contribuir para o processo de ressocialização trabalhando com
          diferentes aspectos em cada ser indivíduo, possibilitando:
          <br />
          <br />
        </p>
        <ul>
          <li>
            O despertar da consciência de si mesmo, respeitando o livre arbítrio
            de cada um.
          </li>
          <li>
            Explorar a possibilidade da paz pessoal a apreciação como um recurso
            interno que pode ajudá-lo a aproveitar o que ele tem todos os dias.
          </li>
          <li>
            Explorar a qualidade inata da força interior e seu valor na vida e
            forças e recursos internos que ajudam a se tornar autoconscientes.
          </li>
          <li>
            Explorar a clareza como um recurso interno para ajudar em todos os
            aspectos da vida e a diferença entre acreditar e conhecer.
          </li>
          <li>
            Reconhecer que existe uma dignidade inata em estar vivo,
            independente das circunstâncias e a liberdade e poder para fazer
            escolhas e como essas escolhas diárias afetam o bem-estar.
          </li>
          <li>
            Entender que a esperança é um recurso interno disponível a todos e
            que ela pode ajudar a superar tempos difíceis.
          </li>
          <li>
            Explorar a possibilidade de que o contentamento pode ser sentido,
            independente do que acontece.
          </li>
        </ul>
      </div>

      <div className="programa-texto">
        <TituloLivro>
          {" "}
          OUÇA A SUA VOZ - Como Encontrar paz em um mundo barulhento{" "}
        </TituloLivro>
        <AutorLivro> Autor: Prem Rawat </AutorLivro>
        <p>
          No livro Ouça a Sua Voz, Prem Rawat compartilha momentos importantes
          de sua vida, desde o garoto indiano de 13 anos, levado repentinamente
          para o palco do Glastonbury Festival em 1971, até sua experiência como
          piloto de avião. Ele fala de seus encontros com pessoas notáveis,
          desde líderes políticos a presidiários que encontra em alguns dos
          presídios mais hostis do mundo. Ele guia o leitor em uma jornada,
          muitas vezes ilustrada com histórias, que reflete simplicidade e
          acessibilidade a todos, nos convidando a ouvir o coração, a nos
          reconectarmos e assumir o controle de nossa vida. Este livro mergulha
          profundamente no coração, enquanto reflete sobre o significado da
          existência e as imensas possibilidades que ela oferece.
        </p>

        <TituloLivro> Plano de Aula </TituloLivro>
        <p>
          O Projeto de Leitura é feto nas prisões dos Estados de São Paulo e
          Minas Gerais. O detento lê o livro, faz um resumo que é enviado para
          nossa avaliação. Caso avaliemos que tenha lido o livro, o Judiciário
          lhe da remissão de pena
        </p>
      </div>
    </div>
  );
}

export default LeituraLivroComponent;
