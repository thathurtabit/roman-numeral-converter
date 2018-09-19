import { response } from '../../common/constants';

export const converter = (input) => {

  const { MAX_NUM, INPUT_EMPTY, INPUT_MIN_MAX_NUM, INPUT_STRING } = response;

  // Weed out problems before we get started
  if (input === '') return INPUT_EMPTY;
  if (typeof (input) === 'string' && !input.match(/^\d+$/)) return INPUT_STRING;
  if (input < 1 || input > MAX_NUM) return INPUT_MIN_MAX_NUM;

  // Convert the input value to number
  let inputNum = parseInt(input, 10);

  // Where our return value will live
  let romanNum = '';

  // Array of num/rom objects to denote changes in Roman numeral syntax
  const numRomPairs = [
    { num: 1000, rom: 'M' },
    { num: 900, rom: 'CM' },
    { num: 500, rom: 'D' },
    { num: 400, rom: 'CD' },
    { num: 100, rom: 'C' },
    { num: 90, rom: 'XC' },
    { num: 50, rom: 'L' },
    { num: 40, rom: 'XL' },
    { num: 10, rom: 'X' },
    { num: 9, rom: 'IX' },
    { num: 5, rom: 'V' },
    { num: 4, rom: 'IV' },
    { num: 1, rom: 'I' },
    { num: 0, rom: 'dick' }
  ];

  // Loop over our numRomPairs array
  numRomPairs.forEach(obj => {
    // We're looping, but while this condition is true, create a sub loop to repeat characters where necessary, i.e. 'III'
    while (inputNum % obj.num < inputNum) {
      // Construct our return string from the obj.rom value, i.e. 'IV...' (higher number goes first, as ordered in the numRomParis array)
      romanNum += obj.rom;
      // Decrease our original input value until we stop the while loop and continue onto the next object
      inputNum -= obj.num;
    }
  })

  // Return the result
  return romanNum;
}