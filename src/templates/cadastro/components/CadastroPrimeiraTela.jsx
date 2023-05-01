import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import styles from '../styles/CadastroPrimeiraTela.module.css';
import { increment } from '../../../store/store';

const MIN_PASSWORD_LENGTH = 6;

const schema = yup.object().shape({
  name: yup.string().required('Este campo é obrigatório'),
  email: yup.string()
    .email('Seu email está com formato incorreto, utilize um email válido')
    .required('Este campo é obrigatório'),
  password: yup.string().required('Este campo é obrigatório')
    .min(MIN_PASSWORD_LENGTH, 'A senha deve ter no mínimo 6 caracteres'),
  passConfirmation: yup.string()
    .required('Este campo é obrigatório')
    .min(MIN_PASSWORD_LENGTH, 'A senha deve ter no mínimo 6 caracteres')
    .equals([yup.ref('password')], 'As senhas não são iguais'),
});

export default function cadastroPrimeiraTela(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { button } = props;

  watch('name');
  watch('email');
  watch('password');
  watch('passConfirmation');

  function onSubmit(data) {
    dispatch(increment());
    reset();
  }

  return (
    <form className={ styles.cadastroFormSection } onSubmit={ handleSubmit(onSubmit) }>
      <section>
        <h1 className={ styles.formTitle }>CADASTRO DE VOLUNTÁRIOS</h1>

        <p className={ styles.formParagraph }>
          Seja bem-vindo(a)! Preparamos este formulário para podermos te
          conhecer melhor, saber sobre seus conhecimentos e experiências, e
          também para entendermos a sua disponibilidade com o nosso
          voluntariado. Quanto mais você puder compartilhar com a gente, mais
          conseguiremos te ajudar a alcançar seus objetivos! O preenchimento
          tomará no máximo dez minutos do seu tempo! Bora lá?
        </p>

        <section className={ styles.cadastroFormSectionInputContainer }>
          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="name"
            >
              Nome
            </label>

            <input
              placeholder="Digite seu nome"
              type="text"
              className={ styles.cadastroFormSectionInputText }
              { ...register('name') }
            />
            {errors.name
            && <p className={ styles.inputError }>{errors.name.message}</p>}
          </div>

          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="email"
            >
              Email
            </label>

            <input
              placeholder="Digite seu email"
              type="text"
              className={ styles.cadastroFormSectionInputText }
              { ...register('email') }
            />
            {errors.email
            && <p className={ styles.inputError }>{errors.email.message}</p>}
          </div>

          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="password"
            >
              Senha
            </label>

            <input
              placeholder="Digite sua senha"
              type="password"
              className={ styles.cadastroFormSectionInputText }
              { ...register('password') }
            />
            {errors.password
            && <p className={ styles.inputError }>{errors.password.message}</p>}
          </div>

          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="password"
            >
              Confirme sua senha
            </label>

            <input
              type="password"
              className={ styles.cadastroFormSectionInputText }
              { ...register('passConfirmation') }
            />
            {errors.passConfirmation
            && <p className={ styles.inputError }>{errors.passConfirmation.message}</p>}
          </div>
        </section>
      </section>

    </form>
  );
}
