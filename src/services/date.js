const months = [
  'ene',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getCurrentDate = () => {
  // More info -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();
  return `${day} ${month}. ${year}`;
};

const objToExport = {
  getCurrentDate: getCurrentDate,
};

export default objToExport;
