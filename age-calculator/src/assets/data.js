export const inputs = [
  {
    id: 1,
    name: 'day',
    label: 'DAY',
    placeholder: 'DD',
    error: 'Must be a valid day',
    min: '1',
    max: '31',
    pattern: '(0?[1-9]|[1-2][0-9]|3[0-1])',
  },
  {
    id: 2,
    name: 'month',
    label: 'MONTH',
    placeholder: 'MM',
    error: 'Must be a valid month',
    min: '1',
    max: '12',
  },
  {
    id: 3,
    name: 'year',
    label: 'YEAR',
    placeholder: 'YYYY',
    error: 'Must be in the past',
    min: '1900',
    max: '2022',
  },
];

export const periods = ['years', 'months', 'days'];
