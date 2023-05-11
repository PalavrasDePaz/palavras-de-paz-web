import React from 'react';
import countries from 'i18n-iso-countries';
import ptLocale from 'i18n-iso-countries/langs/pt.json';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';
import { ESCOLARIDADE_OPTIONS, OPCOES_ESTADOS } from './constants';
import { cadastroTela2Schema } from './schemas';

export default function cadastroSegundaTela({ buttonCallback } = props) {
  const {
    register,
    handleSubmit,
    watch,
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
            defaultValue="BR"
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
          {errors.pais && (
            <p className={ styles.inputError }>{errors.pais.message}</p>
          )}
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
              defaultValue=""
              className={ styles.cadastroFormSectionInputText }
              onChange={ (e) => selectCountryHandler(e.target.value) }
              { ...register('estado') }
            >
              <option value="" hidden disabled>
                Selecione
              </option>
              {countryArray?.length
                && OPCOES_ESTADOS.map(({ label, value }) => (
                  <option key={ value } value={ value }>
                    {label}
                  </option>
                ))}
            </select>
          ) : (
            <input
              name="estado"
              placeholder="Digite seu estado"
              type="text"
              className={ styles.cadastroFormSectionInputText }
              { ...register('estado') }
            />
          )}

          {errors.estado && (
            <p className={ styles.inputError }>{errors.estado.message}</p>
          )}
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
            type="text"
            maxLength={ 28 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('cidade') }
          />
          {errors.cidade && (
            <p className={ styles.inputError }>{errors.cidade.message}</p>
          )}
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
            type="number"
            pattern="[\d*]"
            maxLength={ 15 }
            minLength={ 3 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('telefone') }
          />
          {errors.telefone && (
            <p className={ styles.inputError }>{errors.telefone.message}</p>
          )}
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
            defaultValue=""
            { ...register('escolaridade') }
          >
            <option value="" hidden disabled>
              Selecione
            </option>
            {ESCOLARIDADE_OPTIONS.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>
            ))}
          </select>
          {errors.escolaridade && (
            <p className={ styles.inputError }>{errors.escolaridade.message}</p>
          )}
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
            maxLength={ 40 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('curso') }
          />
          {errors.curso && (
            <p className={ styles.inputError }>{errors.curso.message}</p>
          )}
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
            defaultValue=""
            { ...register('deficiencia') }
          >
            <option value="" hidden disabled>
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
            <option value="prefiro não dizer">Prefiro não dizer</option>
          </select>
          {errors.deficiencia && (
            <p className={ styles.inputError }>{errors.deficiencia.message}</p>
          )}
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
              maxLength={ 30 }
              className={ styles.cadastroFormSectionInputText }
              { ...register('descricaoDeficiencia') }
            />
          </div>
        )}
      </section>
      <button type="submit" className={ styleButton.cadastroFormSectionButton }>
        Próximo
      </button>
    </form>
  );
}
