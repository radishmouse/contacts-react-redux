export const fields = [
  'name',
  'email',
  'twitter',
  'github',
];

export const createEmptyContact = () => fields.reduce((obj, k) => ({...obj, [k]: ''}), {});
export const blankContact = createEmptyContact();
