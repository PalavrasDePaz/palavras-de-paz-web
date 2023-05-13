import React from 'react';
import countries from 'i18n-iso-countries';
import ptLocale from 'i18n-iso-countries/langs/pt.json';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';
import { ESCOLARIDADE_OPTIONS, OPCOES_ESTADOS } from './constants';
import { cadastroTela2Schema } from './schemas';
import ErrorMessage from '../../../components/forms/ErrorMessage';
import EmptyOption from '../../../components/forms/EmptyOption';

export default function cadastroSegundaTela({
  buttonCallback,
  returnButton,
  data,
} = props) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroTela2Schema),
  });

  const country = watch('pais', 'BR');
  const disability = watch('deficiencia', 'não');

  countries.registerLocale(ptLocale);

  const countryObj = countries.getNames('pt', { select: 'official' });
  const countryArray = Object.entries(countryObj).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(buttonCallback) }
    >
      <section className={ styles.cadastroFormSectionInputContainer }>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="pais"
            className={ styles.cadastroFormSectionInputLabel }
          >
            País
          </label>
          <select
            name="pais"
            defaultValue={ data.country || 'BR' }
            className={ styles.cadastroFormSectionInputText }
            { ...register('pais') }
          >
            {countryArray?.length
              && countryArray.map(({ label, value }) => (
                <option key={ value } value={ value }>
                  {label}
                </option>
              ))}
          </select>
          <ErrorMessage showError={ errors.pais } style={ styles.inputError } />
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="estado"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Estado
          </label>
          {country === 'BR' ? (
            <select
              name="estado"
              defaultValue={ data.estado || '' }
              className={ styles.cadastroFormSectionInputText }
              { ...register('estado') }
            >
              <EmptyOption />
              {OPCOES_ESTADOS.map(({ label, value }) => (
                <option key={ value } value={ value }>
                  {label}
                </option>
              ))}
            </select>
          ) : (
            <input
              name="estado"
              placeholder="Digite seu estado"
              defaultValue={ data.estado || '' }
              type="text"
              className={ styles.cadastroFormSectionInputText }
              { ...register('estado') }
            />
          )}
          <ErrorMessage showError={ errors.estado } style={ styles.inputError } />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="cidade"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Cidade
          </label>
          <input
            name="cidade"
            placeholder="Digite sua cidade"
            defaultValue={ data.cidade || '' }
            type="text"
            maxLength={ 28 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('cidade') }
          />
          <ErrorMessage showError={ errors.cidade } style={ styles.inputError } />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="telefone"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Telefone
          </label>
          <input
            name="telefone"
            placeholder="Digite seu telefone"
            type="tel"
            defaultValue={ data.telefone }
            maxLength={ 15 }
            minLength={ 3 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('telefone') }
          />
          <ErrorMessage showError={ errors.telefone } style={ styles.inputError } />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="escolaridade"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Escolaridade
          </label>
          <select
            className={ styles.cadastroFormSectionInputText }
            name="escolaridade"
            defaultValue={ data.escolaridade || '' }
            { ...register('escolaridade') }
          >
            <EmptyOption />
            {ESCOLARIDADE_OPTIONS.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>
            ))}
          </select>
          <ErrorMessage
            showError={ errors.escolaridade }
            style={ styles.inputError }
          />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="curso"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Qual o Curso
          </label>
          <input
            placeholder="Digite seu curso"
            type="text"
            name="curso"
            defaultValue={ data.curso }
            maxLength={ 40 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('curso') }
          />
          <ErrorMessage showError={ errors.curso } style={ styles.inputError } />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="deficiencia"
            className={ styles.cadastroFormSectionInputLabel }
          >
            É pessoa com deficiência?
          </label>
          <select
            name="deficiencia"
            className={ styles.cadastroFormSectionInputText }
            defaultValue={ data.deficiencia || '' }
            { ...register('deficiencia') }
          >
            <EmptyOption />
            <option value="sim">Sim</option>
            <option value="não">Não</option>
            <option value="prefiro não dizer">Prefiro não dizer</option>
          </select>
          <ErrorMessage
            showError={ errors.deficiencia }
            style={ styles.inputError }
          />
        </div>
        {disability === 'sim' && (
          <div className={ styles.cadastroFormDiv }>
            <label
              htmlFor="descricaoDeficiencia"
              className={ styles.cadastroFormSectionInputLabel }
            >
              Qual?
            </label>
            <input
              name="descricaoDeficiencia"
              type="text"
              defaultValue={ data.descricaoDeficiencia }
              maxLength={ 30 }
              className={ styles.cadastroFormSectionInputText }
              { ...register('descricaoDeficiencia') }
            />
            <ErrorMessage
              showError={ errors.descricaoDeficiencia }
              style={ styles.inputError }
            />
          </div>
        )}
      </section>
      <div className={ styles.buttonsRow }>
        <button
          type="button"
          className={ styleButton.cadastroFormSectionButton }
          onClick={ () => returnButton(getValues()) }
        >
          Anterior
        </button>
        <button type="submit" className={ styleButton.cadastroFormSectionButton }>
          Próximo
        </button>
      </div>
    </form>
  );
}
