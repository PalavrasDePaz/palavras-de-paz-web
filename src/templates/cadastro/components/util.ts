export const getIsHigherEducation = (schooling?: string): boolean =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !!(schooling && schooling.includes('superior'));
