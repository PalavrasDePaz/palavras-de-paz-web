import React from 'react';
import { Button, Card } from 'react-bootstrap';
// import Espelho from "../../../public/static/images/downloads/espelho.png"
// import Espelho from "../../../public/static/images/downloads/pedra.png"
// import Espelho from "../../../public/static/images/downloads/jornada.png"
// import Espelho from "../../../public/static/images/downloads/leao.png"
// import Espelho from "../../../public/static/images/downloads/formiga.png"
// import Espelho from "../../../public/static/images/downloads/arqueiro.png"
// import Espelho from "../../../public/static/images/downloads/irmaos.png"
// import Espelho from "../../../public/static/images/downloads/arvore.png"
// import Espelho from "../../../public/static/images/downloads/porta.png"
// import Espelho from "../../../public/static/images/downloads/coelho.png"
// import Espelho from "../../../public/static/images/downloads/caderno1.png"
// import Espelho from "../../../public/static/images/downloads/paz.png"
// import Pedra from "../../assets/Downloads/Imagens/pedra.png"
// import Jornada from "../../assets/Downloads/Imagens/jornada.png"
// import Leao from "../../assets/Downloads/Imagens/leao.png"
// import Formiga from "../../assets/Downloads/Imagens/formiga.png"
// import Arqueiro from "../../assets/Downloads/Imagens/arqueiro.png"
// import Irmaos from "../../assets/Downloads/Imagens/irmaos.png"
// import Arvore from "../../assets/Downloads/Imagens/arvore.png"
// import Porta from "../../assets/Downloads/Imagens/porta.png"
// import Coelho from "../../assets/Downloads/Imagens/coelho.png"
// import Caderno from "../../assets/Downloads/Imagens/caderno1.png"
// import Paz from "../../assets/Downloads/Imagens/paz.png"

function Downloads() {
  return (
    <>
      <div className="headerSombraDoacao" />
      <div className="containerDoacao">

        <div className="cardOneDoacao">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/espelho.png" style={{ maxWidth: '90%' }} />
            <Card.Body>
              <Card.Title>O Espelho na Parede</Card.Title>
              <Card.Text>
                <p>Era uma vez uma aldeia distante onde viviam pessoas muito simples. Um dia, chegou um turista. Na manhã seguinte, ele pegou seu espelho e colocou-o na parede para se barbear. </p>
              </Card.Text>
              <a href="downloads/arquivos/Artigo%201-%20O%20Espelho%20na%20Parede%20-%20Paz.pdf" target="blank">
                {' '}
                <Button variant="success" style={{ marginTop: '22px' }}>Download</Button>
              </a>
            </Card.Body>

          </Card>
        </div>
        <div className="cardDoisInscrever">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/pedra.png" style={{ maxWidth: '80%' }} />
            <Card.Body>
              <Card.Title>O Empresário e a Pedra Mágica - Apreciação</Card.Title>
              <Card.Text>
                <p>Era uma vez um empreário que tinha um pequeno negócio. Claro que, sendo um empresário, sua vontade era a de ganhar o máximo de dinheiro possível.</p>
              </Card.Text>
              <a href="downloads/arquivos/Artigo%202-%20O%20Empres%C3%A1rio%20e%20a%20Pedra%20M%C3%A1gica%20-%20Aprecia%C3%A7%C3%A3o.pdf" target="blank">
                {' '}
                <Button variant="success" style={{ marginTop: '22px' }}>Download</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img src="/static/images/downloads/jornada.png" />
            <Card.Body>
              <Card.Title>A Jornada da vida - Força Interior</Card.Title>
              <Card.Text>
                <p>NESTA VIDA você é um viajante solitário. E se você não entender a natureza da viagem, vai se perder, porque a vida é a única jornada que, por natureza, não pode andar em um círculos.</p>
              </Card.Text>
              <a href="/downloads/arquivos/ Artigo_3-_A_Jornada_da_Vida_-_For%C3%A7a_Interior.pdf">
                {' '}
                <Button variant="success">Download</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img src="/static/images/downloads/leao.png" />
            <Card.Body>
              <Card.Title>O Leão e a Ovelha - Auto Conhecimento</Card.Title>
              <Card.Text>
                <p>Às vezes esquecemos quem somos. por Prem Rawat Ficamos tão envolvidos em nossas causas e definições que não vemos que cada ser humano tem a mesma ambição: ser feliz, estar em paz.</p>
              </Card.Text>
              <a href="downloads/arquivos/Artigo_4-_O_Le%C3%A3o_e_a_Ovelha_-_Auto_Conhecimento.pdf" target="blank"><Button variant="success" style={{ marginTop: '14px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className="containerDoacao">

        <div className="cardOneDoacao">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/formiga.png" />
            <Card.Body>
              <Card.Title>A História da Formiga</Card.Title>
              <Card.Text>
                <p>Tendemos a analizar tudo. Mas quando sinto sede, não quero uma análise da água. Não quero descrições da água. Só quero saber de conseguir água para saciar minha sede. Essa é a questão – saciar a sede.</p>
              </Card.Text>
              <a href="downloads/arquivos/Artigo_5-_A_Hist%C3%B3ria_da_Formiga_-_Clareza.pdf" target="blank">
                {' '}
                <Button variant="success">Download</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardDoisInscrever">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/arqueiro.png" style={{ maxWidth: '97%' }} />
            <Card.Body>
              <Card.Title>O Arqueiro e o Mercador</Card.Title>
              <Card.Text>
                <p>Era uma vez um exímio arqueiro que conseguia disparar uma flexa, atingir o alvo e disparar em seguida outra flexa...</p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo%206-%20O%20Arqueiro%20e%20o%20Mercador%20-%20Entendimento.pdf" target="blank"><Button variant="success" style={{ marginTop: '70px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img src="/static/images/downloads/irmaos.png" />
            <Card.Body>
              <Card.Title style={{ marginTop: '15px' }}>Os Três Irmãos que Encontraram Ouro</Card.Title>
              <Card.Text>
                <p>Era uma vez três irmãos que tinham vivido uma infância abastada. Quando ficaram mais velhos, seus pais morreram e eles perderam todo o dinheiro...</p>
              </Card.Text>
              <a
                href="downloads/arquivos/Artigo_7-_Os_Tr%C3%AAs_Irm%C3%A3os_que_Encontraram_Ouro_-_Dignidade.pdf "
                target="blank"
              >
                <Button variant="success" style={{ marginTop: '20px' }}>Download</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img src="/static/images/downloads/arvore.png" />
            <Card.Body>
              <Card.Title style={{ marginTop: '10px' }}>As Árvores do Jardim da Vida</Card.Title>
              <Card.Text>
                <p>É uma metáfora, mas é verdade. Quando chegamos a este mundo, algumas sementes nos são dadas, e as perguntas são: O que faremos com essas sementes ? </p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_8-_As_%C3%81rvores_do_Jardim_da_Vida_-_Escolha.pdf" target="blank">
                {' '}
                <Button variant="success" style={{ marginTop: '20px' }}>Download</Button>
              </a>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className="containerDoacao">

        <div className="cardOneDoacao">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/porta.png" />
            <Card.Body>
              <Card.Title style={{ marginTop: '18px' }}>A Porta até Você</Card.Title>
              <Card.Text>
                <p>Neste Caminho da Existência, não sabemos quais perguntas precisamos fazer para nos orientar. E, se não sabemos de que forma questionar, como iremos encontrar as respostas?</p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo%209-%20A%20Porta%20At%C3%A9%20Voc%C3%AA%20-%20Esperan%C3%A7a%20.pdf" target="blank">
                {' '}
                <Button variant="success">Download</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardDoisInscrever">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/coelho.png" />
            <Card.Body>
              <Card.Title style={{ marginTop: '10px' }}>O Coelho e o Leão - Contentamento</Card.Title>
              <Card.Text>
                <p>Queremos ser felizes. Ninguém nos disse isso. Nossas mães não nos disseram. “Sabe de uma coisa? Você vai querer ser feliz.</p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_10-_O_Coelho_e_o_Le%C3%A3o_-_Contentamento.pdf" target="blank"><Button variant="success" style={{ marginTop: '17px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img src="/static/images/downloads/caderno.png" />
            <Card.Body>
              <Card.Title>Caderno de anotações_Parte 1</Card.Title>
              <Card.Text>
                <p>“De todas as coisas que fazemos na vida para nos sentirmos bem, a paz é o que nos faz sentir melhor.” </p>
              </Card.Text>
              <a href="/downloads/arquivos/Caderno_de_anota%C3%A7%C3%B5es_Parte_1.pdf" target="blank"><Button variant="success" style={{ marginTop: '42px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img src="/static/images/downloads/caderno.png" />
            <Card.Body>
              <Card.Title>Caderno de anotações_Parte 2</Card.Title>
              <Card.Text>
                <p>“De todas as coisas que fazemos na vida para nos sentirmos bem, a paz é o que nos faz sentir melhor.” </p>
              </Card.Text>
              <a href="/downloads/arquivos/Caderno%20de%20anota%C3%A7%C3%B5es_Parte2.pdf" target="blank"><Button variant="success" style={{ marginTop: '42px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className="containerDoacao">

        <div className="cardOneDoacao">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 1 - Paz é ... - Paz</Card.Title>
              <Card.Text>
                <p>Você já ouviu a palavra paz muitas vezes. No entanto, de que tipo de paz estamos falando? Por todo este tempo que falo da paz, tenho notado que cada pessoa tem sua própria definição do que é a paz. </p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo%201%20-%20Paz%20%C3%A9%20...%20-%20Paz.pdf" target="blank">
                {' '}
                <Button variant="success">Download</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardDoisInscrever">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 2 - Apreciar a Vida - Apreciação</Card.Title>
              <Card.Text>
                <p>Apreciação começa dentro de você, não em outras pessoas. Apreciar, antes de tudo, o fato de estar vivo. Apreciar por existir dentro de você... </p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_2_-_Apreciar_a_Vida_-_Aprecia%C3%A7%C3%A3o.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 3 - A Verdadeira Força - Força Interior</Card.Title>
              <Card.Text>
                <p>Uma pessoa pode ser incrivelmente bem-sucedida, mas ao mesmo tempo incrivelmente triste, porque a verdadeira felicidade se manifesta de dentro.</p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_3_-_A_Verdadeira_For%C3%A7a_-_For%C3%A7a_Interior.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 4 - Você Sabe Quem Você É - Auto Conhecimento</Card.Title>
              <Card.Text>
                <p>Você sabe quem você é? Você não tem que responder isso para os outros. Não para a sua esposa ou seu marido, e não para seus filhos.</p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_4_-_Voc%C3%AA_Sabe_Quem_Voc%C3%AA_%C3%89.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className="containerDoacao">

        <div className="cardOneDoacao">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 5 - Quando Você Tem Clareza - Clareza</Card.Title>
              <Card.Text>
                <p>Você me ouvirá dizer esta palavra muitas, muitas vezes: clareza.O que quero dizer com ela? O que é clareza? Ter clareza é estar claro, saber o valor do hoje. </p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_5_-_Quando_Voc%C3%AA_Tem_Clareza_-_Clareza.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardDoisInscrever">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 6 - Um Mundo de Entendimento - Entendimento</Card.Title>
              <Card.Text>
                <p>A vida é um presente. Eu quero entender isso com a maior clareza possível antes que eu perca a capacidade de entender. </p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo%206%20-%20Um%20Mundo%20de%20Entendimento%20-%20Entendimento.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 7 - Um Pouco de Espaço - Dignidade</Card.Title>
              <Card.Text>
                <p>Quando penso sobre o que quero, apenas como ser humano, a lista de quesitos não é assim tão grande. O que quero, e o que todos querem... </p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_7_-_Um_Pouco_de_Espa%C3%A7o_-_Dignidade.pdf" target="blank"><Button variant="success" style={{ marginTop: '20px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 8 - Sua Escolha - Escolha</Card.Title>
              <Card.Text>
                <p>Paz é quando você está inteiro. Paz é quando você está completo, quando você entende. Tudo depende das escolhas que você faz em sua vida.</p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo%208%20-%20Sua%20Escolha%20-%20Escolha.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className="containerDoacao">

        <div className="cardOneDoacao">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 9 - O Oceano da Esperança - Esperança</Card.Title>
              <Card.Text>
                <p>Eu tenho algo muito especial para dizer: existe esperança todos os dias. Não é uma questão de anos, não é uma questão de meses, também não é uma questão de semanas. </p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo_9_-_O_Oceano_da_Esperan%C3%A7a_-_Esperan%C3%A7a.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardDoisInscrever">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>Artigo 10 - O Som de Estar Contente - Contentamento</Card.Title>
              <Card.Text>
                <p>Todos nós somos seres humanos. E de certa forma nossas vidas são semelhantes. Acordamos de manhã. Temos nossos trabalhos, nossas responsabilidades.</p>
              </Card.Text>
              <a href="/downloads/arquivos/Artigo%2010%20-%20O%20Som%20de%20Estar%20Contente%20-%20Contentamento.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardTresVoluntario">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/caderno.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title style={{ marginTop: '55px' }}>Caderno de Anotações</Card.Title>
              <Card.Text>
                <p>“De todas as coisas que fazemos na vida para nos sentirmos bem, a paz é o que nos faz sentir melhor.” </p>
              </Card.Text>
              <a href="/downloads/arquivos/PEP%20-%20Caderno%20de%20Anota%C3%A7%C3%B5es.pdf" target="blank"><Button variant="success" style={{ marginTop: '75px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="containerDoacao">

        <div className="cardOneDoacao">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>PEP 03 - completo</Card.Title>
              <Card.Text>
                <p>Quando vim para o Ocidente, eu tinha apenas 13 anos. E as pessoas vinham me ver – adultos mais velhos, mais educados, mais inteligentes do que eu. Pelo menos, era assim que eles pareciam. </p>
              </Card.Text>
              <a href="/downloads/arquivos/pep_3_handouts_BrazilCorrectesFebruary2019.pdf" target="blank"><Button variant="success">Download</Button></a>
            </Card.Body>
          </Card>
        </div>
        <div className="cardDoisInscrever">
          <Card style={{ width: '18rem', height: '31rem' }}>
            <Card.Img variant="top" src="/static/images/downloads/paz.png" style={{ maxWidth: '70%', marginLeft: '40px' }} />
            <Card.Body>
              <Card.Title>PEP 04 - completo</Card.Title>
              <Card.Text>
                <p>Eu estou aqui para falar sobre algo muito fundamental. Você tem um anseio, um desejo a ser preenchido. E esse desejo não desaparecerá enquanto você viver.</p>
              </Card.Text>
              <a href="/downloads/arquivos/pep_collection_handouts_NewBrazil_V3.pdf" target="blank"><Button variant="success" style={{ marginTop: '20px' }}>Download</Button></a>
            </Card.Body>
          </Card>
        </div>
      </div>

    </>
  );
}

export default Downloads;
