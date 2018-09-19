import { response } from '../../common/constants';

export const converter = (input) => {

  const { MAX_NUM, INPUT_EMPTY, INPUT_MIN_MAX_NUM, INPUT_STRING } = response;

  // Weed out problems before we get started
  if (input === '') return INPUT_EMPTY;
  if (typeof (input) === 'string' && input.match(/[a-z]/i)) return INPUT_STRING;
  if (input < 1 || input > MAX_NUM) return INPUT_MIN_MAX_NUM;

  // Convert the input value to number
  const num = parseInt(input, 10);

  // Array of num/rom objects
  const numRomPairs = [
    { num: 1, rom: 'I' },
    { num: 4, rom: 'IV' },
    { num: 5, rom: 'V' },
    { num: 9, rom: 'IX' },
    { num: 10, rom: 'X' },
    { num: 40, rom: 'XL' },
    { num: 50, rom: 'L' },
    { num: 90, rom: 'XC' },
    { num: 100, rom: 'C' },
    { num: 400, rom: 'CD' },
    { num: 900, rom: 'CM' },
    { num: 1000, rom: 'M' }
  ];

  let romanNum = num;

  //numRomPairs.map()

  return romanNum;
}