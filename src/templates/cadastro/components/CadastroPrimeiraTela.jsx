import React from 'react';

export default function cadastroPrimeiraTela() {
  return (
    <form className="styles.cadastroFormSection">
      <section>

        <h1>CADASTRO DE VOLUNTÁRIOS</h1>

        <p>
          Seja bem-vindo(a)! Preparamos este formulário para podermos te conhecer melhor,
          saber sobre seus conhecimentos e experiências, e também para entendermos a sua
          disponibilidade com o nosso voluntariado. Quanto mais você puder compartilhar
          com a gente, mais conseguiremos te ajudar a alcançar seus objetivos!
          O preenchimento tomará no máximo dez minutos do seu tempo! Bora lá?
        </p>

        <section className="styles.cadastroFormSectionInputContainer">
          <div>
            <label className="styles.cadastroFormSectionInputLabel" htmlFor="nome">
              Nome
            </label>

            <input
              placeholder="Digite seu nome"
              type="text"
              className="styles.cadastroFormSectionInputText"
            />
          </div>

          <div>
            <label className="styles.cadastroFormSectionInputLabel" htmlFor="nome">
              Email
            </label>

            <input
              placeholder="Digite seu email"
              type="text"
              className="styles.cadastroFormSectionInputText"
            />
          </div>

          <div>
            <label className="styles.cadastroFormSectionInputLabel" htmlFor="nome">
              Senha
            </label>

            <input
              placeholder="Digite sua senha"
              type="password"
              className="styles.cadastroFormSectionInputText"
            />
          </div>

          <div>
            <label className="styles.cadastroFormSectionInputLabel" htmlFor="nome">
              Confirme sua senha
            </label>

            <input
              type="password"
              className="styles.cadastroFormSectionInputText"
            />
          </div>

          <button>
            Próximo
          </button>

        </section>

      </section>
    </form>
  );
}
