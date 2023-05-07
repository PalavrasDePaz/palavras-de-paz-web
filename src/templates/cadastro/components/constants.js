export const REFERRAL = {
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

export const AWARENESS = {
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
    label: 'aboutYou',
    text: `Para entender melhor você como voluntário,
    você poderia contar um pouco sobre seus conhecimentos e estudos?`,
  },
  {
    label: 'experience',
    text: `Você poderia compartilhar um pouco suas experiências? 
    (Qualquer experiência é relevante, queremos te conhecer)`,
  },
  {
    label: 'expectations',
    text: `Quais são seus sonhos/desejos e como acha que se alinha 
    com o nosso trabalho voluntário?`,
  },
];

export const DATA_1 = [
  'Facilitador presencial',
  'Facilitador virtual',
  'Avaliador remoto',
  'Captação de voluntário',
  'Leitura de caderno de presos Virtual',
  'Tradutor remoto',
  'Divulgação',
  'Captação de grupos',
  'Leitura de redação dos presos virtual',
];

export const DATA_2 = [
  'Administração',
  'Comunicação',
  'Jornalismo',
  'Mídias Sociais',
  'Rádio e Televisão',
  'Recursos Humanos',
  'Tecnologia da Informação',
  'Psicologia',
  'Assistência Social',
  'Outros',
];

export const MANDATORY_FIELD = 'Este campo é obrigatório';
