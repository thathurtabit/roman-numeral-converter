export const converter = (input) => {
  if (input === '') return 'Gimme a number';
  if (typeof(input) === 'string' && input.match(/[a-z]/i)) return 'Numbers only please!';
  if (input > 3999) return 'Only numbers up to 3999 please!';
  
  const num = parseInt(input, 10);

  const numRomPairs = [
    { num: 1,     rom: 'I' },
    { num: 4,     rom: 'IV' },
    { num: 5,     rom: 'V' },
    { num: 9,     rom: 'IX' },
    { num: 10,    rom: 'X' },
    { num: 40,    rom: 'XL' },
    { num: 50,    rom: 'L' },
    { num: 90,    rom: 'XC' },
    { num: 100,   rom: 'C' },
    { num: 400,   rom: 'CD' },
    { num: 900,   rom: 'CM' },
    { num: 1000,  rom: 'M' }
  ];
  const splitNum = [...num];
  //console.log('splitNum: ', splitNum);
  let romanNum = num;

  return romanNum;
}