import countries from 'i18n-iso-countries';
import ptLocale from 'i18n-iso-countries/langs/pt.json';

countries.registerLocale(ptLocale);

export const countryObj = countries.getNames('pt', { select: 'official' });
export const countryArray = Object.values(countryObj).map((country) => ({
  label: country,
  value: country,
}));

export const HOW_FOUND_PEP = {
  fieldLabel: 'Por onde você nos conheceu?',
  options: [
    'Atados',
    'Instagram',
    'Facebook',
    'Linkedin',
    'Pepsico',
    'Youtube',
    'Website',
    'Indicações',
    'Outros',
  ],
};

export const KNOWLEDGE_PEP = {
  fieldLabel: 'Você conhece o programa de educação para a paz?',
  options: [
    {
      label: 'Já participei dos 10 workshops',
      value: 'complete',
    },
    { label: 'Já participei de alguns workshops', value: 'partial' },
    {
      label: 'Ainda não participei de nenhum',
      value: 'none',
    },
  ],
};

export const OPEN_TEXT_FIELDS = [
  {
    label: 'studiesKnowledge',
    text: `Para entender melhor você como voluntário,
    você poderia contar um pouco sobre seus conhecimentos e estudos?`,
  },
  {
    label: 'lifeExperience',
    text: `Você poderia compartilhar um pouco suas experiências? 
    (Qualquer experiência é relevante, queremos te conhecer)`,
  },
  {
    label: 'desires',
    text: `Quais são seus sonhos/desejos e como acha que se alinha 
    com o nosso trabalho voluntário?`,
  },
];

export const FUTURE_ROLES = [
  { label: 'Facilitador presencial', value: 'facilitadorPresencial' },
  { label: 'Facilitador virtual', value: 'facilitadorVirtual' },
  { label: 'Avaliador remoto', value: 'avaliadorRemoto' },
  { label: 'Captação de voluntário', value: 'captaçãoDeVoluntario' },
  { label: 'Leitura de caderno de presos Virtual', value: 'leituraDeCaderno' },
  { label: 'Tradutor remoto', value: 'tradutorRemoto' },
  { label: 'Divulgação', value: 'divulgacao' },
  { label: 'Captação de grupos', value: 'captacaoDeGrupos' },
  { label: 'Leitura de redação dos presos virtual', value: 'leituraDeRedacao' },
];

export const SKILLS = [
  { label: 'Administração', value: 'administracao' },
  { label: 'Comunicação', value: 'comunicacao' },
  { label: 'Jornalismo', value: 'jornalismo' },
  { label: 'Mídias Sociais', value: 'midiasSociais' },
  { label: 'Rádio e Televisão', value: 'radioTV' },
  { label: 'Recursos Humanos', value: 'RH' },
  { label: 'Tecnologia da Informação', value: 'TI' },
  { label: 'Psicologia', value: 'psicologia' },
  { label: 'Assistência Social', value: 'assistenciaSocial' },
  { label: 'Outros', value: 'outros' },
];

export const REQUIRED_FIELD = 'Este campo é obrigatório';
export const INVALID_MAIL = 'Seu email está com formato incorreto';
export const PASS_MIN = 'A senha deve ter no mínimo 6 caracteres';
export const PASS_MISMATCH = 'As senhas não são iguais';
export const INVALID_PHONE = 'O telefone está com formato incorreto';
export const AT_LEAST_ONE = 'Selecione ao menos uma opção';

export const SCHOOLING_OPTIONS = [
  'Ensino fundamental incompleto/cursando',
  'Ensino fundamental completo',
  'Ensino médio incompleto/cursando',
  'Ensino médio completo',
  'Ensino superior incompleto/cursando',
  'Ensino superior completo',
];

const ESTADOS = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

export const statesArray = ESTADOS.map((state) => ({
  label: state,
  value: state,
}));

export const MIN_CHARS_INPUTS = 3;

export const minCharsMessage = (chars: number) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `Por favor utilize pelo menos ${ chars } caracteres`;
