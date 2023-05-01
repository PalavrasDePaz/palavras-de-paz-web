import React from 'react';
import CadastroPrimeiraTela from './components/CadastroPrimeiraTela';
import HeaderCadastro from './components/HeaderCadastro';
import styles from './styles/CadastroTemplate.module.css';

export default function cadastroTemplate() {
  const [controller, setController] = React.useState(0);

  const buttonNext = () => (
    <button
      type="submit"
      className={ styles.cadastroFormSectionButton }
      onClick={ () => setController(1) }
    >
      Próximo
    </button>
  );

  return (
    <div>
      <HeaderCadastro />
      <div className={ styles.main_container_form }>
        {controller === 0 && (
          <CadastroPrimeiraTela setController={ setController } />
        )}
        <div className={ styles.main_container_button }>{buttonNext()}</div>
      </div>
    </div>
  );
}
