export const getIsHigherEducation = (schooling?: string): boolean =>
  schooling && schooling.includes("superior");
